import { Component, Inject, LOCALE_ID, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { catchError, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

import _ from 'lodash';

import { ActionLabelsI18n, URLVerbs } from '~/app/shared/constants/app.constants';
import { CdTableAction } from '~/app/shared/models/cd-table-action';
import { CdTableColumn } from '~/app/shared/models/cd-table-column';
import { CdTableFetchDataContext } from '~/app/shared/models/cd-table-fetch-data-context';
import { ListWithDetails } from '~/app/shared/classes/list-with-details.class';
import { Permission } from '~/app/shared/models/permissions';

import { AuthStorageService } from '~/app/shared/services/auth-storage.service';
import { SmbService } from '~/app/shared/api/smb.service';
import { SMBUsersGroups } from '../smb.model';
import { Router } from '@angular/router';
import { Icons } from '~/app/shared/enum/icons.enum';
import { CdTableSelection } from '~/app/shared/models/cd-table-selection';
import { URLBuilderService } from '~/app/shared/services/url-builder.service';
import { DeleteConfirmationModalComponent } from '~/app/shared/components/delete-confirmation-modal/delete-confirmation-modal.component';
import { FinishedTask } from '~/app/shared/models/finished-task';
import { ModalCdsService } from '~/app/shared/services/modal-cds.service';
import { TaskWrapperService } from '~/app/shared/services/task-wrapper.service';

export const USERSGROUPS_PATH = 'cephfs/smb/standalone';

@Component({
  selector: 'cd-smb-users-list',
  templateUrl: './smb-usersgroups-list.component.html',
  styleUrls: ['./smb-usersgroups-list.component.scss'],
  providers: [{ provide: URLBuilderService, useValue: new URLBuilderService(USERSGROUPS_PATH) }]
})
export class SmbUsersgroupsListComponent extends ListWithDetails implements OnInit {
  @ViewChild('groupsNamesTpl', { static: true })
  groupsNamesTpl: TemplateRef<any>;
  columns: CdTableColumn[];
  permission: Permission;
  tableActions: CdTableAction[];
  context: CdTableFetchDataContext;

  usersGroups$: Observable<SMBUsersGroups[]>;
  subject$ = new BehaviorSubject<SMBUsersGroups[]>([]);
  selection: CdTableSelection = new CdTableSelection();
  isZhHans = false;
  headerTitle = 'Standalone access resoruces';
  headerDescription = 'Logical management units for authorization on Standalone servers';

  constructor(
    private router: Router,
    private urlBuilder: URLBuilderService,
    private authStorageService: AuthStorageService,
    public actionLabels: ActionLabelsI18n,
    private smbService: SmbService,
    private modalService: ModalCdsService,
    private taskWrapper: TaskWrapperService,
    @Inject(LOCALE_ID) private localeId: string
  ) {
    super();
    this.permission = this.authStorageService.getPermissions().smb;
    this.isZhHans = this.localeId.startsWith('zh');
    this.headerTitle = this.isZhHans ? '独立模式访问资源' : 'Standalone access resoruces';
    this.headerDescription = this.isZhHans
      ? '用于独立模式服务器授权管理的逻辑资源单元'
      : 'Logical management units for authorization on Standalone servers';
  }

  ngOnInit() {
    this.columns = [
      {
        name: $localize`Name`,
        prop: 'users_groups_id',
        flexGrow: 2
      },
      {
        name: $localize`Number of users`,
        prop: 'values.users.length',
        flexGrow: 2
      },
      {
        name: $localize`Groups`,
        prop: 'values.groups',
        cellTemplate: this.groupsNamesTpl,
        flexGrow: 2
      },
      {
        name: $localize`Linked to cluster`,
        prop: 'values.linked_to_cluster',
        flexGrow: 2
      }
    ];

    this.tableActions = [
      {
        name: this.isZhHans ? '创建独立模式资源' : `${this.actionLabels.CREATE} standalone`,
        permission: 'create',
        icon: Icons.add,
        click: () => this.router.navigate([this.urlBuilder.getCreate()]),
        canBePrimary: (selection: CdTableSelection) => !selection.hasSelection
      },
      {
        name: this.actionLabels.EDIT,
        permission: 'update',
        icon: Icons.edit,
        click: () =>
          this.router.navigate([
            this.urlBuilder.getEdit(String(this.selection.first().users_groups_id))
          ])
      },
      {
        name: this.actionLabels.DELETE,
        permission: 'delete',
        icon: Icons.destroy,
        click: () => this.openDeleteModal()
      }
    ];

    this.usersGroups$ = this.subject$.pipe(
      switchMap(() =>
        this.smbService.listUsersGroups().pipe(
          catchError(() => {
            this.context.error();
            return of(null);
          })
        )
      )
    );
  }

  loadUsersGroups() {
    this.subject$.next([]);
  }

  openDeleteModal() {
    const usersGroupsId = this.selection.first().users_groups_id;

    this.modalService.show(DeleteConfirmationModalComponent, {
      itemDescription: $localize`Users and groups access resource`,
      itemNames: [usersGroupsId],
      submitActionObservable: () =>
        this.taskWrapper.wrapTaskAroundCall({
          task: new FinishedTask(`${USERSGROUPS_PATH}/${URLVerbs.DELETE}`, {
            usersGroupsId: usersGroupsId
          }),
          call: this.smbService.deleteUsersgroups(usersGroupsId)
        })
    });
  }

  updateSelection(selection: CdTableSelection) {
    this.selection = selection;
  }
}
