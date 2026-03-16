"use strict";
(self["webpackChunkceph_dashboard"] = self["webpackChunkceph_dashboard"] || []).push([["src_app_ceph_pool_pool_module_ts"],{

/***/ 76540:
/*!************************************************************************************!*\
  !*** ./src/app/ceph/pool/crush-rule-form-modal/crush-rule-form-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrushRuleFormModalComponent: () => (/* binding */ CrushRuleFormModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 58524);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_api_crush_rule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/crush-rule.service */ 17612);
/* harmony import */ var _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/classes/crush.node.selection.class */ 94612);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 54372);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 43808);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 3687);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 85481);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 50813);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 66083);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/helper/helper.component */ 39403);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 69081);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 59781);
/* harmony import */ var _shared_components_help_text_help_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/help-text/help-text.component */ 64333);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 23603);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 90476);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 10142);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 78708);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 37966);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 37353);





























function CrushRuleFormModalComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function CrushRuleFormModalComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function CrushRuleFormModalComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function CrushRuleFormModalComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function CrushRuleFormModalComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bucket_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngValue", bucket_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", bucket_r2.name, " ");
  }
}
function CrushRuleFormModalComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function CrushRuleFormModalComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function CrushRuleFormModalComponent_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const domain_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngValue", domain_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", domain_r3, " ( ", ctx_r3.failureDomains[domain_r3].length, " ) ");
  }
}
function CrushRuleFormModalComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function CrushRuleFormModalComponent_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deviceClass_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngValue", deviceClass_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", deviceClass_r5, " ");
  }
}
class CrushRuleFormModalComponent extends _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_2__.CrushNodeSelectionClass {
  formBuilder;
  activeModal;
  taskWrapper;
  crushRuleService;
  actionLabels;
  submitAction = new _angular_core__WEBPACK_IMPORTED_MODULE_18__.EventEmitter();
  tooltips;
  form;
  names;
  action;
  resource;
  constructor(formBuilder, activeModal, taskWrapper, crushRuleService, actionLabels) {
    super();
    this.formBuilder = formBuilder;
    this.activeModal = activeModal;
    this.taskWrapper = taskWrapper;
    this.crushRuleService = crushRuleService;
    this.actionLabels = actionLabels;
    this.action = this.actionLabels.CREATE;
    this.resource = "Crush Rule";
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      // name: string
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.pattern('[A-Za-z0-9_-]+'), _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('uniqueName', value => this.names && this.names.indexOf(value) !== -1)]],
      // root: CrushNode
      root: null,
      // Replaced with first root
      // failure_domain: string
      failure_domain: '',
      // Replaced with most common type
      // device_class: string
      device_class: '' // Replaced with device type if only one exists beneath domain
    });
  }
  ngOnInit() {
    this.tooltips = this.crushRuleService.formTooltips;
    this.crushRuleService.getInfo().subscribe(({
      names,
      nodes
    }) => {
      this.initCrushNodeSelection(nodes, this.form.get('root'), this.form.get('failure_domain'), this.form.get('device_class'), false);
      this.names = names;
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.setErrors({
        cdSubmitButton: true
      });
      return;
    }
    const rule = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.form.value);
    rule.root = rule.root.name;
    if (rule.device_class === '') {
      delete rule.device_class;
    }
    this.taskWrapper.wrapTaskAroundCall({
      task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_6__.FinishedTask('crushRule/create', rule),
      call: this.crushRuleService.create(rule)
    }).subscribe({
      error: () => {
        this.form.setErrors({
          cdSubmitButton: true
        });
      },
      complete: () => {
        this.activeModal.close();
        this.submitAction.emit(rule);
      }
    });
  }
  static ɵfac = function CrushRuleFormModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CrushRuleFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_4__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_7__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_api_crush_rule_service__WEBPACK_IMPORTED_MODULE_1__.CrushRuleService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__.ActionLabelsI18n));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: CrushRuleFormModalComponent,
    selectors: [["cd-crush-rule-form-modal"]],
    outputs: {
      submitAction: "submitAction"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]],
    decls: 57,
    vars: 27,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_0 = goog.getMsg("{$interpolation} {$interpolation_1}", {
          "interpolation": "\uFFFD0\uFFFD",
          "interpolation_1": "\uFFFD1\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ action | titlecase }}",
            "interpolation_1": "{{ resource | upperFirst }}"
          }
        });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_1 = goog.getMsg("Name");
        i18n_1 = MSG_EXTERNAL_8953033926734869941$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = "Name";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9169367680120922814$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_2 = goog.getMsg("Root");
        i18n_2 = MSG_EXTERNAL_9169367680120922814$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = "Root";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4525362715759041227$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_3 = goog.getMsg("Failure domain type");
        i18n_3 = MSG_EXTERNAL_4525362715759041227$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_3;
      } else {
        i18n_3 = "Failure domain type";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7136079353894161076$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_4 = goog.getMsg("Device class");
        i18n_4 = MSG_EXTERNAL_7136079353894161076$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_4;
      } else {
        i18n_4 = "Device class";
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5916475565738124222$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_5 = goog.getMsg("All devices");
        i18n_5 = MSG_EXTERNAL_5916475565738124222$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_5;
      } else {
        i18n_5 = "All devices";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5139354158419018287$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_6 = goog.getMsg("{$interpolation}", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{tooltips.device_class}}"
          }
        });
        i18n_6 = MSG_EXTERNAL_5139354158419018287$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_6;
      } else {
        i18n_6 = "" + "\uFFFD0\uFFFD" + "";
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_7 = goog.getMsg("This field is required!");
        i18n_7 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_7;
      } else {
        i18n_7 = "This field is required!";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1576206503438015503$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_8 = goog.getMsg("The name can only consist of alphanumeric characters, dashes and underscores.");
        i18n_8 = MSG_EXTERNAL_1576206503438015503$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_8;
      } else {
        i18n_8 = "The name can only consist of alphanumeric characters, dashes and underscores.";
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1951556666035670157$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_9 = goog.getMsg("The chosen erasure code profile name is already in use.");
        i18n_9 = MSG_EXTERNAL_1951556666035670157$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_9;
      } else {
        i18n_9 = "The chosen erasure code profile name is already in use.";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_10 = goog.getMsg("Loading...");
        i18n_10 = MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_10;
      } else {
        i18n_10 = "Loading...";
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_11 = goog.getMsg("This field is required!");
        i18n_11 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_11;
      } else {
        i18n_11 = "This field is required!";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_12 = goog.getMsg("Loading...");
        i18n_12 = MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_12;
      } else {
        i18n_12 = "Loading...";
      }
      let i18n_13;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_13 = goog.getMsg("This field is required!");
        i18n_13 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_13;
      } else {
        i18n_13 = "This field is required!";
      }
      return [["frm", "ngForm"], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, [3, "modalRef"], [1, "modal-title"], [1, "modal-content"], ["novalidate", "", 3, "formGroup"], [1, "modal-body"], [1, "form-group", "row"], ["for", "name", 1, "cd-col-form-label"], [1, "required"], [1, "cd-col-form-input"], ["type", "text", "id", "name", "name", "name", "placeholder", "Name...", "formControlName", "name", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "root", 1, "cd-col-form-label"], [3, "html"], ["id", "root", "name", "root", "formControlName", "root", 1, "form-select"], ["ngValue", "", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "failure_domain", 1, "cd-col-form-label"], ["id", "failure_domain", "name", "failure_domain", "formControlName", "failure_domain", 1, "form-select"], ["for", "device_class", 1, "cd-col-form-label"], ["id", "device_class", "name", "device_class", "formControlName", "device_class", 1, "form-select"], ["ngValue", ""], [1, "modal-footer"], [3, "submitActionEvent", "form", "submitText"], [1, "invalid-feedback"], [3, "ngValue"]];
    },
    template: function CrushRuleFormModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "cd-modal", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](1, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](5, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "form", 18, 0)(8, "div", 19)(9, "div", 20)(10, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](12, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](13, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](16, CrushRuleFormModalComponent_span_16_Template, 2, 0, "span", 25)(17, CrushRuleFormModalComponent_span_17_Template, 2, 0, "span", 25)(18, CrushRuleFormModalComponent_span_18_Template, 2, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 20)(20, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](22, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](23, "cd-helper", 27)(24, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 23)(26, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](27, CrushRuleFormModalComponent_option_27_Template, 2, 0, "option", 29)(28, CrushRuleFormModalComponent_option_28_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](29, CrushRuleFormModalComponent_span_29_Template, 2, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "div", 20)(31, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](33, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](34, "cd-helper", 27)(35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "div", 23)(37, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](38, CrushRuleFormModalComponent_option_38_Template, 2, 0, "option", 29)(39, CrushRuleFormModalComponent_option_39_Template, 2, 3, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](40, CrushRuleFormModalComponent_span_40_Template, 2, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "div", 20)(42, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](44, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "div", 23)(46, "select", 34)(47, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](48, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](49, CrushRuleFormModalComponent_option_49_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](50, "cd-help-text")(51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](52, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](53, "div", 36)(54, "cd-form-button-panel", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](55, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](56, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("submitActionEvent", function CrushRuleFormModalComponent_Template_cd_form_button_panel_submitActionEvent_54_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx.onSubmit());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const frm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 19, ctx.action))(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 21, ctx.resource));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("name", frm_r6, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("name", frm_r6, "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("name", frm_r6, "uniqueName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx.tooltips.root);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.buckets);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.buckets);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("root", frm_r6, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx.tooltips.failure_domain);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.failureDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.failureDomainKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("failure_domain", frm_r6, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](ctx.tooltips.device_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("form", ctx.form)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](55, 23, ctx.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](56, 25, ctx.resource));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_8__.HelperComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__.ModalComponent, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_10__.FormButtonPanelComponent, _shared_components_help_text_help_text_component__WEBPACK_IMPORTED_MODULE_11__.HelpTextComponent, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_12__.AutofocusDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_13__.FormInputDisableDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_14__.CdFormControlDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_15__.CdFormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_16__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_21__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_17__.UpperFirstPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66708:
/*!**************************************************************************************************!*\
  !*** ./src/app/ceph/pool/erasure-code-profile-form/erasure-code-profile-form-modal.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErasureCodeProfileFormModalComponent: () => (/* binding */ ErasureCodeProfileFormModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/erasure-code-profile.service */ 14267);
/* harmony import */ var _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/classes/crush.node.selection.class */ 94612);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 54372);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 46045);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 43808);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 3687);
/* harmony import */ var _app_shared_models_erasure_code_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/models/erasure-code-profile */ 49862);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 85481);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 50813);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 66083);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/helper/helper.component */ 39403);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 69081);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 59781);
/* harmony import */ var _shared_components_help_text_help_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/help-text/help-text.component */ 64333);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 23603);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 90476);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 10142);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 78708);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 37966);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 37353);






























const _c0 = (a0, a1, a2) => [a0, a1, a2];
function ErasureCodeProfileFormModalComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plugin_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngValue", plugin_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", plugin_r2, " ");
  }
}
function ErasureCodeProfileFormModalComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx_r2.deviceCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](1);
  }
}
function ErasureCodeProfileFormModalComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx_r2.deviceCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](1);
  }
}
function ErasureCodeProfileFormModalComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx_r2.lrcMultiK);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](1);
  }
}
function ErasureCodeProfileFormModalComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx_r2.deviceCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](1);
  }
}
function ErasureCodeProfileFormModalComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx_r2.deviceCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](1);
  }
}
function ErasureCodeProfileFormModalComponent_div_52_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_div_52_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61)(1, "label", 96)(2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](3, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "cd-helper", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_52_span_7_Template, 2, 0, "span", 65)(8, ErasureCodeProfileFormModalComponent_div_52_span_8_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const frm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx_r2.tooltips.plugins.shec.c);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.form.showError("c", frm_r4, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.form.showError("c", frm_r4, "cGreaterM"));
  }
}
function ErasureCodeProfileFormModalComponent_div_53_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_div_53_ng_container_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx_r2.getDMin())(ctx_r2.getDMax());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](1);
  }
}
function ErasureCodeProfileFormModalComponent_div_53_ng_container_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx_r2.getDMax());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](1);
  }
}
function ErasureCodeProfileFormModalComponent_div_53_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ErasureCodeProfileFormModalComponent_div_53_ng_container_11_span_1_Template, 2, 2, "span", 74)(2, ErasureCodeProfileFormModalComponent_div_53_ng_container_11_span_2_Template, 2, 1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.getDMin() < ctx_r2.getDMax());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.getDMin() === ctx_r2.getDMax());
  }
}
function ErasureCodeProfileFormModalComponent_div_53_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx_r2.getDMin());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](1);
  }
}
function ErasureCodeProfileFormModalComponent_div_53_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx_r2.getDMax());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](1);
  }
}
function ErasureCodeProfileFormModalComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61)(1, "label", 98)(2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](3, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "cd-helper", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 63)(6, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ErasureCodeProfileFormModalComponent_div_53_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r2.toggleDCalc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, ErasureCodeProfileFormModalComponent_div_53_span_10_Template, 2, 0, "span", 74)(11, ErasureCodeProfileFormModalComponent_div_53_ng_container_11_Template, 3, 2, "ng-container", 103)(12, ErasureCodeProfileFormModalComponent_div_53_span_12_Template, 2, 1, "span", 65)(13, ErasureCodeProfileFormModalComponent_div_53_span_13_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const frm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx_r2.tooltips.plugins.clay.d);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", ctx_r2.dCalc ? ctx_r2.icons.unlock : ctx_r2.icons.lock);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.dCalc);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r2.dCalc);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.form.showError("d", frm_r4, "dMin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.form.showError("d", frm_r4, "dMax"));
  }
}
function ErasureCodeProfileFormModalComponent_div_54_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_div_54_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_div_54_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61)(1, "label", 104)(2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](3, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "cd-helper", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_54_span_7_Template, 2, 0, "span", 65)(8, ErasureCodeProfileFormModalComponent_div_54_span_8_Template, 2, 0, "span", 65)(9, ErasureCodeProfileFormModalComponent_div_54_span_9_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](11, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const frm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx_r2.tooltips.plugins.lrc.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.form.showError("l", frm_r4, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.form.showError("l", frm_r4, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.form.showError("l", frm_r4, "unequal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx_r2.lrcGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](11);
  }
}
function ErasureCodeProfileFormModalComponent_option_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_option_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const domain_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngValue", domain_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"](" ", domain_r6, " ( ", ctx_r2.failureDomains[domain_r6].length, " ) ");
  }
}
function ErasureCodeProfileFormModalComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_span_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_div_80_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_div_80_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_div_80_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const domain_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngValue", domain_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"](" ", domain_r7, " ( ", ctx_r2.failureDomains[domain_r7].length, " ) ");
  }
}
function ErasureCodeProfileFormModalComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61)(1, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](3, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "cd-helper", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 63)(6, "select", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_80_option_7_Template, 2, 0, "option", 70)(8, ErasureCodeProfileFormModalComponent_div_80_option_8_Template, 2, 0, "option", 70)(9, ErasureCodeProfileFormModalComponent_div_80_option_9_Template, 2, 3, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx_r2.tooltips.plugins.lrc.crushLocality);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r2.failureDomains);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.failureDomainKeys.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r2.failureDomainKeys);
  }
}
function ErasureCodeProfileFormModalComponent_div_81_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plugin_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngValue", plugin_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", plugin_r8, " ");
  }
}
function ErasureCodeProfileFormModalComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61)(1, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](3, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "cd-helper", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 63)(6, "select", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_81_option_7_Template, 2, 2, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx_r2.tooltips.plugins.clay.scalar_mds);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction3"](2, _c0, ctx_r2.PLUGIN.JERASURE, ctx_r2.PLUGIN.ISA, ctx_r2.PLUGIN.SHEC));
  }
}
function ErasureCodeProfileFormModalComponent_div_82_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const technique_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngValue", technique_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", technique_r9, " ");
  }
}
function ErasureCodeProfileFormModalComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61)(1, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](3, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "cd-helper", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 63)(6, "select", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_82_option_7_Template, 2, 2, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx_r2.tooltips.plugins[ctx_r2.plugin].technique);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r2.techniques);
  }
}
function ErasureCodeProfileFormModalComponent_div_83_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61)(1, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](3, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "cd-helper", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_83_span_7_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const frm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx_r2.tooltips.plugins.jerasure.packetSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.form.showError("packetSize", frm_r4, "min"));
  }
}
function ErasureCodeProfileFormModalComponent_option_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ErasureCodeProfileFormModalComponent_option_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bucket_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngValue", bucket_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", bucket_r10.name, " ");
  }
}
function ErasureCodeProfileFormModalComponent_option_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deviceClass_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngValue", deviceClass_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", deviceClass_r11, " ");
  }
}
class ErasureCodeProfileFormModalComponent extends _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_1__.CrushNodeSelectionClass {
  formBuilder;
  activeModal;
  taskWrapper;
  ecpService;
  actionLabels;
  submitAction = new _angular_core__WEBPACK_IMPORTED_MODULE_19__.EventEmitter();
  tooltips;
  PLUGIN = {
    LRC: 'lrc',
    // Locally Repairable Erasure Code
    SHEC: 'shec',
    // Shingled Erasure Code
    CLAY: 'clay',
    // Coupled LAYer
    JERASURE: 'jerasure',
    // default
    ISA: 'isa' // Intel Storage Acceleration
  };
  plugin = this.PLUGIN.JERASURE;
  icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_3__.Icons;
  form;
  plugins;
  names;
  techniques;
  action;
  resource;
  dCalc;
  lrcGroups;
  lrcMultiK;
  CrushFailureDomains = _app_shared_models_erasure_code_profile__WEBPACK_IMPORTED_MODULE_6__.CrushFailureDomains;
  constructor(formBuilder, activeModal, taskWrapper, ecpService, actionLabels) {
    super();
    this.formBuilder = formBuilder;
    this.activeModal = activeModal;
    this.taskWrapper = taskWrapper;
    this.ecpService = ecpService;
    this.actionLabels = actionLabels;
    this.action = this.actionLabels.CREATE;
    this.resource = "EC Profile";
    this.createForm();
    this.setJerasureDefaults();
  }
  createForm() {
    this.form = this.formBuilder.group({
      name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('[A-Za-z0-9_-]+'), _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('uniqueName', value => this.names && this.names.indexOf(value) !== -1)]],
      plugin: [this.PLUGIN.JERASURE, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]],
      k: [4,
      // Will be overwritten with plugin defaults
      [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('max', () => this.baseValueValidation(true)), _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('unequal', v => this.lrcDataValidation(v)), _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('kLowerM', v => this.shecDataValidation(v))]],
      m: [2,
      // Will be overwritten with plugin defaults
      [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('max', () => this.baseValueValidation())]],
      crushFailureDomain: '',
      // Will be preselected
      crushNumFailureDomains: [0, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.requiredIf({
        crushOsdsPerFailureDomain: {
          op: 'minValue',
          arg1: 1
        }
      })],
      crushOsdsPerFailureDomain: [0, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.requiredIf({
        crushNumFailureDomains: {
          op: 'minValue',
          arg1: 1
        }
      })],
      crushRoot: null,
      // Will be preselected
      crushDeviceClass: '',
      // Will be preselected
      directory: '',
      // Only for 'jerasure', 'clay' and 'isa' use
      technique: 'reed_sol_van',
      // Only for 'jerasure' use
      packetSize: [2048],
      // Only for 'lrc' use
      l: [3,
      // Will be overwritten with plugin defaults
      [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('unequal', v => this.lrcLocalityValidation(v))]],
      crushLocality: '',
      // set to none at the end (same list as for failure domains)
      // Only for 'shec' use
      c: [2,
      // Will be overwritten with plugin defaults
      [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('cGreaterM', v => this.shecDurabilityValidation(v))]],
      // Only for 'clay' use
      d: [5,
      // Will be overwritten with plugin defaults (k+m-1) = k+1 <= d <= k+m-1
      [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('dMin', v => this.dMinValidation(v)), _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('dMax', v => this.dMaxValidation(v))]],
      scalar_mds: [this.PLUGIN.JERASURE, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]] // jerasure or isa or shec
    });
    this.toggleDCalc();
    this.form.get('k').valueChanges.subscribe(() => this.updateValidityOnChange(['m', 'l', 'd']));
    this.form.get('m').valueChanges.subscribe(() => this.updateValidityOnChange(['k', 'l', 'c', 'd']));
    this.form.get('l').valueChanges.subscribe(() => this.updateValidityOnChange(['k', 'm']));
    this.form.get('plugin').valueChanges.subscribe(plugin => this.onPluginChange(plugin));
    this.form.get('scalar_mds').valueChanges.subscribe(() => this.setClayDefaultsForScalar());
  }
  baseValueValidation(dataChunk = false) {
    return this.validValidation(() => {
      const kMSum = this.form.get('crushFailureDomain').value === _app_shared_models_erasure_code_profile__WEBPACK_IMPORTED_MODULE_6__.CrushFailureDomains.Host ? this.getKMSum() + 1 : this.getKMSum();
      return kMSum > this.deviceCount && this.form.getValue('k') > this.form.getValue('m') === dataChunk;
    });
  }
  validValidation(fn, plugin) {
    if (!this.form || plugin ? this.plugin !== plugin : false) {
      return false;
    }
    return fn();
  }
  getKMSum() {
    return this.form.getValue('k') + this.form.getValue('m');
  }
  lrcDataValidation(k) {
    return this.validValidation(() => {
      const m = this.form.getValue('m');
      const l = this.form.getValue('l');
      const km = k + m;
      this.lrcMultiK = k / (km / l);
      return k % (km / l) !== 0;
    }, 'lrc');
  }
  shecDataValidation(k) {
    return this.validValidation(() => {
      const m = this.form.getValue('m');
      return m > k;
    }, 'shec');
  }
  lrcLocalityValidation(l) {
    return this.validValidation(() => {
      const value = this.getKMSum();
      this.lrcGroups = l > 0 ? value / l : 0;
      return l > 0 && value % l !== 0;
    }, 'lrc');
  }
  shecDurabilityValidation(c) {
    return this.validValidation(() => {
      const m = this.form.getValue('m');
      return c > m;
    }, 'shec');
  }
  dMinValidation(d) {
    return this.validValidation(() => this.getDMin() > d, 'clay');
  }
  getDMin() {
    return this.form.getValue('k') + 1;
  }
  dMaxValidation(d) {
    return this.validValidation(() => d > this.getDMax(), 'clay');
  }
  getDMax() {
    const m = this.form.getValue('m');
    const k = this.form.getValue('k');
    return k + m - 1;
  }
  toggleDCalc() {
    this.dCalc = !this.dCalc;
    this.form.get('d')[this.dCalc ? 'disable' : 'enable']();
    this.calculateD();
  }
  calculateD() {
    if (this.plugin !== this.PLUGIN.CLAY || !this.dCalc) {
      return;
    }
    this.form.silentSet('d', this.getDMax());
  }
  updateValidityOnChange(names) {
    names.forEach(name => {
      if (name === 'd') {
        this.calculateD();
      }
      this.form.get(name).updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  onPluginChange(plugin) {
    this.plugin = plugin;
    if (plugin === this.PLUGIN.JERASURE) {
      this.setJerasureDefaults();
    } else if (plugin === this.PLUGIN.LRC) {
      this.setLrcDefaults();
    } else if (plugin === this.PLUGIN.ISA) {
      this.setIsaDefaults();
    } else if (plugin === this.PLUGIN.SHEC) {
      this.setShecDefaults();
    } else if (plugin === this.PLUGIN.CLAY) {
      this.setClayDefaults();
    }
    this.updateValidityOnChange(['m']); // Triggers k, m, c, d and l
  }
  setJerasureDefaults() {
    this.techniques = ['reed_sol_van', 'reed_sol_r6_op', 'cauchy_orig', 'cauchy_good', 'liberation', 'blaum_roth', 'liber8tion'];
    this.setDefaults({
      k: 4,
      m: 2,
      technique: 'reed_sol_van'
    });
  }
  setLrcDefaults() {
    this.setDefaults({
      k: 4,
      m: 2,
      l: 3
    });
  }
  setIsaDefaults() {
    /**
     * Actually k and m are not required - but they will be set to the default values in case
     * if they are not set, therefore it's fine to mark them as required in order to get
     * strange values that weren't set.
     */
    this.techniques = ['reed_sol_van', 'cauchy'];
    this.setDefaults({
      k: 7,
      m: 3,
      technique: 'reed_sol_van'
    });
  }
  setShecDefaults() {
    /**
     * Actually k, c and m are not required - but they will be set to the default values in case
     * if they are not set, therefore it's fine to mark them as required in order to get
     * strange values that weren't set.
     */
    this.setDefaults({
      k: 4,
      m: 3,
      c: 2
    });
  }
  setClayDefaults() {
    /**
     * Actually d and scalar_mds are not required - but they will be set to show the default values
     * in case if they are not set, therefore it's fine to mark them as required in order to not get
     * strange values that weren't set.
     *
     * As d would be set to the value k+m-1 for the greatest savings, the form will
     * automatically update d if the automatic calculation is activated (default).
     */
    this.setDefaults({
      k: 4,
      m: 2,
      // d: 5, <- Will be automatically update to 5
      scalar_mds: this.PLUGIN.JERASURE
    });
    this.setClayDefaultsForScalar();
  }
  setClayDefaultsForScalar() {
    const plugin = this.form.getValue('scalar_mds');
    let defaultTechnique = 'reed_sol_van';
    if (plugin === this.PLUGIN.JERASURE) {
      this.techniques = ['reed_sol_van', 'reed_sol_r6_op', 'cauchy_orig', 'cauchy_good', 'liber8tion'];
    } else if (plugin === this.PLUGIN.ISA) {
      this.techniques = ['reed_sol_van', 'cauchy'];
    } else {
      // this.PLUGIN.SHEC
      defaultTechnique = 'single';
      this.techniques = ['single', 'multiple'];
    }
    this.setDefaults({
      technique: defaultTechnique
    });
  }
  setDefaults(defaults) {
    Object.keys(defaults).forEach(controlName => {
      const control = this.form.get(controlName);
      const value = control.value;
      /**
       * As k, m, c and l are now set touched and dirty on the beginning, plugin change will
       * overwrite their values as we can't determine if the user has changed anything.
       * k and m can have two default values where as l and c can only have one,
       * so there is no need to overwrite them.
       */
      const overwrite = control.pristine || controlName === 'technique' && !this.techniques.includes(value) || controlName === 'k' && [4, 7].includes(value) || controlName === 'm' && [2, 3].includes(value);
      if (overwrite) {
        control.setValue(defaults[controlName]); // also validates new value
      } else {
        control.updateValueAndValidity();
      }
    });
  }
  ngOnInit() {
    this.tooltips = this.ecpService.formTooltips;
    this.ecpService.getInfo().subscribe(({
      plugins,
      names,
      directory,
      nodes
    }) => {
      this.initCrushNodeSelection(nodes, this.form.get('crushRoot'), this.form.get('crushFailureDomain'), this.form.get('crushDeviceClass'), false);
      this.plugins = plugins;
      this.names = names;
      this.form.silentSet('directory', directory);
      this.preValidateNumericInputFields();
    });
  }
  /**
   * This allows k, m, l and c to be validated instantly on change, before the
   * fields got changed before by the user.
   */
  preValidateNumericInputFields() {
    const kml = ['k', 'm', 'l', 'c', 'd'].map(name => this.form.get(name));
    kml.forEach(control => {
      control.markAsTouched();
      control.markAsDirty();
    });
    kml[1].updateValueAndValidity(); // Update validity of k, m, c, d and l
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.setErrors({
        cdSubmitButton: true
      });
      return;
    }
    const profile = this.createJson();
    this.taskWrapper.wrapTaskAroundCall({
      task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_7__.FinishedTask('ecp/create', {
        name: profile.name
      }),
      call: this.ecpService.create(profile)
    }).subscribe({
      error: () => {
        this.form.setErrors({
          cdSubmitButton: true
        });
      },
      complete: () => {
        this.activeModal.close();
        this.submitAction.emit(profile);
      }
    });
  }
  createJson() {
    const pluginControls = {
      technique: [this.PLUGIN.ISA, this.PLUGIN.JERASURE, this.PLUGIN.CLAY],
      packetSize: [this.PLUGIN.JERASURE],
      l: [this.PLUGIN.LRC],
      crushLocality: [this.PLUGIN.LRC],
      c: [this.PLUGIN.SHEC],
      d: [this.PLUGIN.CLAY],
      scalar_mds: [this.PLUGIN.CLAY]
    };
    const ecp = new _app_shared_models_erasure_code_profile__WEBPACK_IMPORTED_MODULE_6__.ErasureCodeProfile();
    const plugin = this.form.getValue('plugin');
    Object.keys(this.form.controls).filter(name => {
      const pluginControl = pluginControls[name];
      const value = this.form.getValue(name);
      const usable = pluginControl && pluginControl.includes(plugin) || !pluginControl;
      return usable && value && value !== '';
    }).forEach(name => {
      this.extendJson(name, ecp);
    });
    return ecp;
  }
  extendJson(name, ecp) {
    const differentApiAttributes = {
      crushFailureDomain: 'crush-failure-domain',
      crushNumFailureDomains: 'crush-num-failure-domains',
      crushOsdsPerFailureDomain: 'crush-osds-per-failure-domain',
      crushRoot: 'crush-root',
      crushDeviceClass: 'crush-device-class',
      packetSize: 'packetsize',
      crushLocality: 'crush-locality'
    };
    const value = this.form.getValue(name);
    ecp[differentApiAttributes[name] || name] = name === 'crushRoot' ? value.name : value;
  }
  onCrushFailureDomainChane() {
    this.form.get('k').updateValueAndValidity();
    this.form.get('m').updateValueAndValidity();
  }
  static ɵfac = function ErasureCodeProfileFormModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ErasureCodeProfileFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_4__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_8__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_0__.ErasureCodeProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__.ActionLabelsI18n));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: ErasureCodeProfileFormModalComponent,
    selectors: [["cd-erasure-code-profile-form-modal"]],
    outputs: {
      submitAction: "submitAction"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 118,
    vars: 59,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_0 = goog.getMsg("{$interpolation} {$interpolation_1}", {
          "interpolation": "\uFFFD0\uFFFD",
          "interpolation_1": "\uFFFD1\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ action | titlecase }}",
            "interpolation_1": "{{ resource | upperFirst }}"
          }
        });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_1 = goog.getMsg("Name");
        i18n_1 = MSG_EXTERNAL_8953033926734869941$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = "Name";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4562362040556606648$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_2 = goog.getMsg("Plugin");
        i18n_2 = MSG_EXTERNAL_4562362040556606648$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = "Plugin";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7955887200666997467$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_3 = goog.getMsg("Data chunks (k)");
        i18n_3 = MSG_EXTERNAL_7955887200666997467$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_3;
      } else {
        i18n_3 = "Data chunks (k)";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1471879088759639523$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_4 = goog.getMsg("Coding chunks (m)");
        i18n_4 = MSG_EXTERNAL_1471879088759639523$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_4;
      } else {
        i18n_4 = "Coding chunks (m)";
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5489807080482456498$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_5 = goog.getMsg("Crush failure domain");
        i18n_5 = MSG_EXTERNAL_5489807080482456498$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_5;
      } else {
        i18n_5 = "Crush failure domain";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7909691702091350598$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_6 = goog.getMsg("Crush num failure domain");
        i18n_6 = MSG_EXTERNAL_7909691702091350598$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_6;
      } else {
        i18n_6 = "Crush num failure domain";
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5506639649229572031$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_7 = goog.getMsg("Crush osds per failure domain");
        i18n_7 = MSG_EXTERNAL_5506639649229572031$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_7;
      } else {
        i18n_7 = "Crush osds per failure domain";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6046264436151872561$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_8 = goog.getMsg("Crush root");
        i18n_8 = MSG_EXTERNAL_6046264436151872561$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_8;
      } else {
        i18n_8 = "Crush root";
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2641000698188090134$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_9 = goog.getMsg("Crush device class");
        i18n_9 = MSG_EXTERNAL_2641000698188090134$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_9;
      } else {
        i18n_9 = "Crush device class";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5916475565738124222$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_10 = goog.getMsg("All devices");
        i18n_10 = MSG_EXTERNAL_5916475565738124222$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_10;
      } else {
        i18n_10 = "All devices";
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_819838447230333063$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_11 = goog.getMsg("{$interpolation}", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{tooltips.crushDeviceClass}}"
          }
        });
        i18n_11 = MSG_EXTERNAL_819838447230333063$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_11;
      } else {
        i18n_11 = "" + "\uFFFD0\uFFFD" + "";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6229695115677974088$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_12 = goog.getMsg("Available OSDs: {$interpolation}", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{deviceCount}}"
          }
        });
        i18n_12 = MSG_EXTERNAL_6229695115677974088$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_12;
      } else {
        i18n_12 = "Available OSDs: " + "\uFFFD0\uFFFD" + "";
      }
      let i18n_13;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5256256049865563765$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_13 = goog.getMsg("Directory");
        i18n_13 = MSG_EXTERNAL_5256256049865563765$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_13;
      } else {
        i18n_13 = "Directory";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_14 = goog.getMsg("This field is required!");
        i18n_14 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_14;
      } else {
        i18n_14 = "This field is required!";
      }
      let i18n_15;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1576206503438015503$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_15 = goog.getMsg("The name can only consist of alphanumeric characters, dashes and underscores.");
        i18n_15 = MSG_EXTERNAL_1576206503438015503$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_15;
      } else {
        i18n_15 = "The name can only consist of alphanumeric characters, dashes and underscores.";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1951556666035670157$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_16 = goog.getMsg("The chosen erasure code profile name is already in use.");
        i18n_16 = MSG_EXTERNAL_1951556666035670157$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_16;
      } else {
        i18n_16 = "The chosen erasure code profile name is already in use.";
      }
      let i18n_17;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_17 = goog.getMsg("Loading...");
        i18n_17 = MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_17;
      } else {
        i18n_17 = "Loading...";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_18 = goog.getMsg("This field is required!");
        i18n_18 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_18;
      } else {
        i18n_18 = "This field is required!";
      }
      let i18n_19;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_19 = goog.getMsg("This field is required!");
        i18n_19 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_19;
      } else {
        i18n_19 = "This field is required!";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8474704684464173948$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_20 = goog.getMsg("Must be equal to or greater than 2.");
        i18n_20 = MSG_EXTERNAL_8474704684464173948$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_20;
      } else {
        i18n_20 = "Must be equal to or greater than 2.";
      }
      let i18n_21;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3359836088137801733$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_21 = goog.getMsg("Chunks (k+m) have exceeded the available OSDs of {$interpolation}.", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{deviceCount}}"
          }
        });
        i18n_21 = MSG_EXTERNAL_3359836088137801733$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_21;
      } else {
        i18n_21 = "Chunks (k+m) have exceeded the available OSDs of " + "\uFFFD0\uFFFD" + ".";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8545367220209602031$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_22 = goog.getMsg("Chunks (k+m+1) have exceeded the available hosts of {$interpolation}.", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{deviceCount}}"
          }
        });
        i18n_22 = MSG_EXTERNAL_8545367220209602031$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_22;
      } else {
        i18n_22 = "Chunks (k+m+1) have exceeded the available hosts of " + "\uFFFD0\uFFFD" + ".";
      }
      let i18n_23;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3917858926503912155$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_23 = goog.getMsg("For an equal distribution k has to be a multiple of (k+m)/l.");
        i18n_23 = MSG_EXTERNAL_3917858926503912155$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_23;
      } else {
        i18n_23 = "For an equal distribution k has to be a multiple of (k+m)/l.";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9208623611694278127$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_24 = goog.getMsg("K has to be equal to or greater than m in order to recover data correctly through c.");
        i18n_24 = MSG_EXTERNAL_9208623611694278127$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_24;
      } else {
        i18n_24 = "K has to be equal to or greater than m in order to recover data correctly through c.";
      }
      let i18n_25;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2764950342107258730$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_25 = goog.getMsg("Distribution factor: {$interpolation}", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{lrcMultiK}}"
          }
        });
        i18n_25 = MSG_EXTERNAL_2764950342107258730$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_25;
      } else {
        i18n_25 = "Distribution factor: " + "\uFFFD0\uFFFD" + "";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_26 = goog.getMsg("This field is required!");
        i18n_26 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_26;
      } else {
        i18n_26 = "This field is required!";
      }
      let i18n_27;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5366066218193149651$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_27 = goog.getMsg("Must be equal to or greater than 1.");
        i18n_27 = MSG_EXTERNAL_5366066218193149651$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_27;
      } else {
        i18n_27 = "Must be equal to or greater than 1.";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3359836088137801733$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_28 = goog.getMsg("Chunks (k+m) have exceeded the available OSDs of {$interpolation}.", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{deviceCount}}"
          }
        });
        i18n_28 = MSG_EXTERNAL_3359836088137801733$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_28;
      } else {
        i18n_28 = "Chunks (k+m) have exceeded the available OSDs of " + "\uFFFD0\uFFFD" + ".";
      }
      let i18n_29;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8545367220209602031$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_29 = goog.getMsg("Chunks (k+m+1) have exceeded the available hosts of {$interpolation}.", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{deviceCount}}"
          }
        });
        i18n_29 = MSG_EXTERNAL_8545367220209602031$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_29;
      } else {
        i18n_29 = "Chunks (k+m+1) have exceeded the available hosts of " + "\uFFFD0\uFFFD" + ".";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1759957197988313421$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_30 = goog.getMsg("Durability estimator (c)");
        i18n_30 = MSG_EXTERNAL_1759957197988313421$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_30;
      } else {
        i18n_30 = "Durability estimator (c)";
      }
      let i18n_31;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5366066218193149651$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_31 = goog.getMsg("Must be equal to or greater than 1.");
        i18n_31 = MSG_EXTERNAL_5366066218193149651$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_31;
      } else {
        i18n_31 = "Must be equal to or greater than 1.";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8961048959373432308$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_32 = goog.getMsg("C has to be equal to or lower than m as m defines the amount of chunks that can be used.");
        i18n_32 = MSG_EXTERNAL_8961048959373432308$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_32;
      } else {
        i18n_32 = "C has to be equal to or lower than m as m defines the amount of chunks that can be used.";
      }
      let i18n_33;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1704211354004450752$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_33 = goog.getMsg("Set d manually or use the plugin's default calculation that maximizes d.");
        i18n_33 = MSG_EXTERNAL_1704211354004450752$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_33;
      } else {
        i18n_33 = "Set d manually or use the plugin's default calculation that maximizes d.";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2038593409574317326$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_34 = goog.getMsg("Helper chunks (d)");
        i18n_34 = MSG_EXTERNAL_2038593409574317326$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_34;
      } else {
        i18n_34 = "Helper chunks (d)";
      }
      let i18n_35;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1888025761663541097$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_35 = goog.getMsg("D is automatically updated on k and m changes");
        i18n_35 = MSG_EXTERNAL_1888025761663541097$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_35;
      } else {
        i18n_35 = "D is automatically updated on k and m changes";
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7955996980541003424$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_36 = goog.getMsg("D can be set from {$interpolation} to {$interpolation_1}", {
          "interpolation": "\uFFFD0\uFFFD",
          "interpolation_1": "\uFFFD1\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{getDMin()}}",
            "interpolation_1": "{{getDMax()}}"
          }
        });
        i18n_36 = MSG_EXTERNAL_7955996980541003424$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_36;
      } else {
        i18n_36 = "D can be set from " + "\uFFFD0\uFFFD" + " to " + "\uFFFD1\uFFFD" + "";
      }
      let i18n_37;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5777341828354086382$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_37 = goog.getMsg("D can only be set to {$interpolation}", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{getDMax()}}"
          }
        });
        i18n_37 = MSG_EXTERNAL_5777341828354086382$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_37;
      } else {
        i18n_37 = "D can only be set to " + "\uFFFD0\uFFFD" + "";
      }
      let i18n_38;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5713559827745087589$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_38 = goog.getMsg("D has to be greater than k ({$interpolation}).", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{getDMin()}}"
          }
        });
        i18n_38 = MSG_EXTERNAL_5713559827745087589$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_38;
      } else {
        i18n_38 = "D has to be greater than k (" + "\uFFFD0\uFFFD" + ").";
      }
      let i18n_39;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7286956565403634147$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_39 = goog.getMsg("D has to be lower than k + m ({$interpolation}).", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{getDMax()}}"
          }
        });
        i18n_39 = MSG_EXTERNAL_7286956565403634147$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_39;
      } else {
        i18n_39 = "D has to be lower than k + m (" + "\uFFFD0\uFFFD" + ").";
      }
      let i18n_40;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5810495024055124667$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_40 = goog.getMsg("Locality (l)");
        i18n_40 = MSG_EXTERNAL_5810495024055124667$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_40;
      } else {
        i18n_40 = "Locality (l)";
      }
      let i18n_41;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1697705454616708510$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_41 = goog.getMsg("Locality groups: {$interpolation}", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{lrcGroups}}"
          }
        });
        i18n_41 = MSG_EXTERNAL_1697705454616708510$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_41;
      } else {
        i18n_41 = "Locality groups: " + "\uFFFD0\uFFFD" + "";
      }
      let i18n_42;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_42 = goog.getMsg("This field is required!");
        i18n_42 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_42;
      } else {
        i18n_42 = "This field is required!";
      }
      let i18n_43;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5366066218193149651$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_43 = goog.getMsg("Must be equal to or greater than 1.");
        i18n_43 = MSG_EXTERNAL_5366066218193149651$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_43;
      } else {
        i18n_43 = "Must be equal to or greater than 1.";
      }
      let i18n_44;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2767541069843337993$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_44 = goog.getMsg("Can't split up chunks (k+m) correctly with the current locality.");
        i18n_44 = MSG_EXTERNAL_2767541069843337993$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_44;
      } else {
        i18n_44 = "Can't split up chunks (k+m) correctly with the current locality.";
      }
      let i18n_45;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_45 = goog.getMsg("Loading...");
        i18n_45 = MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_45;
      } else {
        i18n_45 = "Loading...";
      }
      let i18n_46;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6825543475279966029$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_46 = goog.getMsg("This field is required when crush osds per failure domain is set!");
        i18n_46 = MSG_EXTERNAL_6825543475279966029$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_46;
      } else {
        i18n_46 = "This field is required when crush osds per failure domain is set!";
      }
      let i18n_47;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4898738149365434916$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_47 = goog.getMsg("This field is required when crush num failure domain is set!");
        i18n_47 = MSG_EXTERNAL_4898738149365434916$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_47;
      } else {
        i18n_47 = "This field is required when crush num failure domain is set!";
      }
      let i18n_48;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4728165402618807403$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_48 = goog.getMsg("Crush Locality");
        i18n_48 = MSG_EXTERNAL_4728165402618807403$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_48;
      } else {
        i18n_48 = "Crush Locality";
      }
      let i18n_49;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_49 = goog.getMsg("Loading...");
        i18n_49 = MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_49;
      } else {
        i18n_49 = "Loading...";
      }
      let i18n_50;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6252070156626006029$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_50 = goog.getMsg("None");
        i18n_50 = MSG_EXTERNAL_6252070156626006029$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_50;
      } else {
        i18n_50 = "None";
      }
      let i18n_51;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_236060313699362274$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_51 = goog.getMsg("Scalar mds");
        i18n_51 = MSG_EXTERNAL_236060313699362274$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_51;
      } else {
        i18n_51 = "Scalar mds";
      }
      let i18n_52;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3248445660509657942$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_52 = goog.getMsg("Technique");
        i18n_52 = MSG_EXTERNAL_3248445660509657942$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_52;
      } else {
        i18n_52 = "Technique";
      }
      let i18n_53;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8649008147509815275$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_53 = goog.getMsg("Packetsize");
        i18n_53 = MSG_EXTERNAL_8649008147509815275$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_53;
      } else {
        i18n_53 = "Packetsize";
      }
      let i18n_54;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5366066218193149651$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_54 = goog.getMsg("Must be equal to or greater than 1.");
        i18n_54 = MSG_EXTERNAL_5366066218193149651$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_54;
      } else {
        i18n_54 = "Must be equal to or greater than 1.";
      }
      let i18n_55;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_55 = goog.getMsg("Loading...");
        i18n_55 = MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_55;
      } else {
        i18n_55 = "Loading...";
      }
      return [["frm", "ngForm"], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, i18n_14, i18n_15, i18n_16, i18n_17, i18n_18, i18n_19, i18n_20, i18n_21, i18n_22, i18n_23, i18n_24, i18n_25, i18n_26, i18n_27, i18n_28, i18n_29, i18n_30, i18n_31, i18n_32, i18n_34, i18n_35, i18n_36, i18n_37, i18n_38, i18n_39, i18n_40, i18n_41, i18n_42, i18n_43, i18n_44, i18n_45, i18n_46, i18n_47, i18n_48, i18n_49, i18n_50, i18n_51, i18n_52, i18n_53, i18n_54, i18n_55, [3, "modalRef"], [1, "modal-title"], [1, "modal-content"], ["novalidate", "", 3, "formGroup"], [1, "modal-body"], [1, "form-group", "row"], ["for", "name", 1, "cd-col-form-label"], [1, "cd-col-form-input"], ["type", "text", "id", "name", "name", "name", "placeholder", "Name...", "formControlName", "name", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "plugin", 1, "cd-col-form-label"], [1, "required"], [3, "html"], ["id", "plugin", "name", "plugin", "formControlName", "plugin", 1, "form-select"], ["ngValue", "", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "k", 1, "cd-col-form-label"], ["type", "number", "id", "k", "name", "k", "ng-model", "$ctrl.erasureCodeProfile.k", "placeholder", "Data chunks...", "formControlName", "k", "min", "2", 1, "form-control"], ["class", "form-text text-muted", 4, "ngIf"], ["for", "m", 1, "cd-col-form-label"], ["type", "number", "id", "m", "name", "m", "placeholder", "Coding chunks...", "formControlName", "m", "min", "1", 1, "form-control"], ["class", "form-group row", 4, "ngIf"], ["for", "crushFailureDomain", 1, "cd-col-form-label"], ["id", "crushFailureDomain", "name", "crushFailureDomain", "formControlName", "crushFailureDomain", 1, "form-select", 3, "change"], ["for", "crushNumFailureDomains", 1, "cd-col-form-label"], ["type", "number", "id", "crushNumFailureDomains", "name", "crushNumFailureDomains", "formControlName", "crushNumFailureDomains", "min", "0", 1, "form-control"], ["for", "crushOsdsPerFailureDomain", 1, "cd-col-form-label"], ["type", "number", "id", "crushOsdsPerFailureDomain", "name", "crushOsdsPerFailureDomain", "formControlName", "crushOsdsPerFailureDomain", "min", "0", 1, "form-control"], ["for", "crushRoot", 1, "cd-col-form-label"], ["id", "crushRoot", "name", "crushRoot", "formControlName", "crushRoot", 1, "form-select"], ["for", "crushDeviceClass", 1, "cd-col-form-label"], ["id", "crushDeviceClass", "name", "crushDeviceClass", "formControlName", "crushDeviceClass", 1, "form-select"], ["ngValue", ""], [1, "form-text", "text-muted"], ["for", "directory", 1, "cd-col-form-label"], ["type", "text", "id", "directory", "name", "directory", "placeholder", "Path...", "formControlName", "directory", 1, "form-control"], [1, "modal-footer"], [3, "submitActionEvent", "form", "submitText"], [1, "invalid-feedback"], [3, "ngValue"], ["for", "c", 1, "cd-col-form-label"], ["type", "number", "id", "c", "name", "c", "placeholder", "Coding chunks...", "formControlName", "c", "min", "1", 1, "form-control"], ["for", "d", 1, "cd-col-form-label"], [1, "input-group"], ["type", "number", "id", "d", "name", "d", "placeholder", "Helper chunks...", "formControlName", "d", 1, "form-control"], ["id", "d-calc-btn", "ngbTooltip", i18n_33, "type", "button", 1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 3, "ngClass"], [4, "ngIf"], ["for", "l", 1, "cd-col-form-label"], ["type", "number", "id", "l", "name", "l", "placeholder", "Coding chunks...", "formControlName", "l", "min", "1", 1, "form-control"], ["for", "crushLocality", 1, "cd-col-form-label"], ["id", "crushLocality", "name", "crushLocality", "formControlName", "crushLocality", 1, "form-select"], ["for", "scalar_mds", 1, "cd-col-form-label"], ["id", "scalar_mds", "name", "scalar_mds", "formControlName", "scalar_mds", 1, "form-select"], ["for", "technique", 1, "cd-col-form-label"], ["id", "technique", "name", "technique", "formControlName", "technique", 1, "form-select"], ["for", "packetSize", 1, "cd-col-form-label"], ["type", "number", "id", "packetSize", "name", "packetSize", "placeholder", "Packetsize...", "formControlName", "packetSize", "min", "1", 1, "form-control"]];
    },
    template: function ErasureCodeProfileFormModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "cd-modal", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](1, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](5, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "form", 59, 0)(8, "div", 60)(9, "div", 61)(10, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](11, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](13, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](14, ErasureCodeProfileFormModalComponent_span_14_Template, 2, 0, "span", 65)(15, ErasureCodeProfileFormModalComponent_span_15_Template, 2, 0, "span", 65)(16, ErasureCodeProfileFormModalComponent_span_16_Template, 2, 0, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "div", 61)(18, "label", 66)(19, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](20, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "cd-helper", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div", 63)(23, "select", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](24, ErasureCodeProfileFormModalComponent_option_24_Template, 2, 0, "option", 70)(25, ErasureCodeProfileFormModalComponent_option_25_Template, 2, 2, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, ErasureCodeProfileFormModalComponent_span_26_Template, 2, 0, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "div", 61)(28, "label", 72)(29, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](30, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "cd-helper", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](34, ErasureCodeProfileFormModalComponent_span_34_Template, 2, 0, "span", 65)(35, ErasureCodeProfileFormModalComponent_span_35_Template, 2, 0, "span", 65)(36, ErasureCodeProfileFormModalComponent_span_36_Template, 2, 1, "span", 65)(37, ErasureCodeProfileFormModalComponent_span_37_Template, 2, 1, "span", 65)(38, ErasureCodeProfileFormModalComponent_span_38_Template, 2, 0, "span", 65)(39, ErasureCodeProfileFormModalComponent_span_39_Template, 2, 0, "span", 65)(40, ErasureCodeProfileFormModalComponent_span_40_Template, 2, 1, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "div", 61)(42, "label", 75)(43, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](44, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](45, "cd-helper", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](46, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](47, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](48, ErasureCodeProfileFormModalComponent_span_48_Template, 2, 0, "span", 65)(49, ErasureCodeProfileFormModalComponent_span_49_Template, 2, 0, "span", 65)(50, ErasureCodeProfileFormModalComponent_span_50_Template, 2, 1, "span", 65)(51, ErasureCodeProfileFormModalComponent_span_51_Template, 2, 1, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](52, ErasureCodeProfileFormModalComponent_div_52_Template, 9, 3, "div", 77)(53, ErasureCodeProfileFormModalComponent_div_53_Template, 14, 6, "div", 77)(54, ErasureCodeProfileFormModalComponent_div_54_Template, 12, 5, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](55, "div", 61)(56, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](58, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](59, "cd-helper", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](60, "div", 63)(61, "select", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("change", function ErasureCodeProfileFormModalComponent_Template_select_change_61_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx.onCrushFailureDomainChane());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](62, ErasureCodeProfileFormModalComponent_option_62_Template, 2, 0, "option", 70)(63, ErasureCodeProfileFormModalComponent_option_63_Template, 2, 3, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](64, "div", 61)(65, "label", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](67, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](68, "cd-helper", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](69, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](70, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](71, ErasureCodeProfileFormModalComponent_span_71_Template, 2, 0, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](72, "div", 61)(73, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](75, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](76, "cd-helper", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](77, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](78, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](79, ErasureCodeProfileFormModalComponent_span_79_Template, 2, 0, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](80, ErasureCodeProfileFormModalComponent_div_80_Template, 10, 4, "div", 77)(81, ErasureCodeProfileFormModalComponent_div_81_Template, 8, 6, "div", 77)(82, ErasureCodeProfileFormModalComponent_div_82_Template, 8, 2, "div", 77)(83, ErasureCodeProfileFormModalComponent_div_83_Template, 8, 2, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](84, "div", 61)(85, "label", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](87, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](88, "cd-helper", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](89, "div", 63)(90, "select", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](91, ErasureCodeProfileFormModalComponent_option_91_Template, 2, 0, "option", 70)(92, ErasureCodeProfileFormModalComponent_option_92_Template, 2, 2, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](93, "div", 61)(94, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](96, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](97, "div", 63)(98, "select", 87)(99, "option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](100, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](101, ErasureCodeProfileFormModalComponent_option_101_Template, 2, 2, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](102, "cd-help-text")(103, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](104, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](105, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](106, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](107, "div", 61)(108, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](110, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](111, "cd-helper", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](112, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](113, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](114, "div", 92)(115, "cd-form-button-panel", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](116, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](117, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("submitActionEvent", function ErasureCodeProfileFormModalComponent_Template_cd_form_button_panel_submitActionEvent_115_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx.onSubmit());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const frm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 47, ctx.action))(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 49, ctx.resource));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("name", frm_r4, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("name", frm_r4, "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("name", frm_r4, "uniqueName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx.tooltips.plugins[ctx.plugin].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.plugins);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.plugins);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("name", frm_r4, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx.tooltips.k);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("k", frm_r4, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("k", frm_r4, "min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("k", frm_r4, "max") && ctx.form.getValue("crushFailureDomain") === ctx.CrushFailureDomains.Osd);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("k", frm_r4, "max") && ctx.form.getValue("crushFailureDomain") === ctx.CrushFailureDomains.Host);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("k", frm_r4, "unequal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("k", frm_r4, "kLowerM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.plugin === "lrc");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx.tooltips.m);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("m", frm_r4, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("m", frm_r4, "min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("m", frm_r4, "max") && ctx.form.getValue("crushFailureDomain") === ctx.CrushFailureDomains.Osd);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("m", frm_r4, "max") && ctx.form.getValue("crushFailureDomain") === ctx.CrushFailureDomains.Host);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.plugin === "shec");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.plugin === "clay");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.plugin === ctx.PLUGIN.LRC);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx.tooltips.crushFailureDomain);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.failureDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.failureDomainKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx.tooltips.crushNumFailureDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("crushNumFailureDomains", frm_r4, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx.tooltips.crushOsdsPerFailureDomain);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.form.showError("crushOsdsPerFailureDomain", frm_r4, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.plugin === ctx.PLUGIN.LRC);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.PLUGIN.CLAY === ctx.plugin);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction3"](55, _c0, ctx.PLUGIN.JERASURE, ctx.PLUGIN.ISA, ctx.PLUGIN.CLAY).includes(ctx.plugin));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.plugin === ctx.PLUGIN.JERASURE);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx.tooltips.crushRoot);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.buckets);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.buckets);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx.tooltips.crushDeviceClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nExp"](ctx.deviceCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18nApply"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("html", ctx.tooltips.directory);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("form", ctx.form)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](116, 51, ctx.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](117, 53, ctx.resource));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_9__.HelperComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__.ModalComponent, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_11__.FormButtonPanelComponent, _shared_components_help_text_help_text_component__WEBPACK_IMPORTED_MODULE_12__.HelpTextComponent, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__.AutofocusDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_14__.FormInputDisableDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_15__.CdFormControlDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_16__.CdFormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_17__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_22__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_18__.UpperFirstPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 31428:
/*!******************************************************************!*\
  !*** ./src/app/ceph/pool/pool-details/pool-details.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PoolDetailsComponent: () => (/* binding */ PoolDetailsComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 58524);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/pool.service */ 59870);
/* harmony import */ var _app_shared_classes_cd_helper_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/classes/cd-helper.class */ 32609);
/* harmony import */ var _app_shared_models_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/models/permissions */ 73709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 66083);
/* harmony import */ var _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/grafana/grafana.component */ 1505);
/* harmony import */ var _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 62847);
/* harmony import */ var _shared_datatable_table_key_value_table_key_value_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/datatable/table-key-value/table-key-value.component */ 37823);
/* harmony import */ var _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/stateful-tab.directive */ 62988);
/* harmony import */ var _block_rbd_configuration_list_rbd_configuration_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../block/rbd-configuration-list/rbd-configuration-list.component */ 73409);













function PoolDetailsComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "cd-table-key-value", 14);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("renderObjects", true)("data", ctx_r0.poolDetails)("autoReload", false);
  }
}
function PoolDetailsComponent_ng_container_0_ng_container_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "cd-grafana", 16);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("grafanaPath", "ceph-pool-detail?var-pool_name=", ctx_r0.selection.pool_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "metrics");
  }
}
function PoolDetailsComponent_ng_container_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, PoolDetailsComponent_ng_container_0_ng_container_7_ng_template_3_Template, 1, 3, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function PoolDetailsComponent_ng_container_0_ng_container_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "cd-rbd-configuration-table", 18);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r0.selectedPoolConfiguration);
  }
}
function PoolDetailsComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, PoolDetailsComponent_ng_container_0_ng_container_8_ng_template_3_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function PoolDetailsComponent_ng_container_0_ng_container_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "cd-table", 20);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r0.cacheTiers)("columns", ctx_r0.cacheTierColumns)("autoSave", false);
  }
}
function PoolDetailsComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, PoolDetailsComponent_ng_container_0_ng_container_9_ng_template_3_Template, 1, 3, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function PoolDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nav", 6, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](3, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](5, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, PoolDetailsComponent_ng_container_0_ng_template_6_Template, 1, 3, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, PoolDetailsComponent_ng_container_0_ng_container_7_Template, 4, 0, "ng-container", 10)(8, PoolDetailsComponent_ng_container_0_ng_container_8_Template, 4, 0, "ng-container", 11)(9, PoolDetailsComponent_ng_container_0_ng_container_9_Template, 4, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const nav_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.permissions.grafana.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.selection.type === "replicated");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r0.selection["tiers"] == null ? null : ctx_r0.selection["tiers"].length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavOutlet", nav_r2);
  }
}
class PoolDetailsComponent {
  poolService;
  cacheTiers;
  permissions;
  selection;
  cacheTierColumns = [];
  // 'stats' won't be shown as the pure stat numbers won't tell the user much,
  // if they are not converted or used in a chart (like the ones available in the pool listing)
  omittedPoolAttributes = ['cdExecuting', 'cdIsBinary', 'stats'];
  poolDetails;
  selectedPoolConfiguration;
  constructor(poolService) {
    this.poolService = poolService;
    this.cacheTierColumns = [{
      prop: 'pool_name',
      name: "Name",
      flexGrow: 3
    }, {
      prop: 'cache_mode',
      name: "Cache Mode",
      flexGrow: 2
    }, {
      prop: 'cache_min_evict_age',
      name: "Min Evict Age",
      flexGrow: 2
    }, {
      prop: 'cache_min_flush_age',
      name: "Min Flush Age",
      flexGrow: 2
    }, {
      prop: 'target_max_bytes',
      name: "Target Max Bytes",
      flexGrow: 2
    }, {
      prop: 'target_max_objects',
      name: "Target Max Objects",
      flexGrow: 2
    }];
  }
  ngOnChanges() {
    if (this.selection) {
      this.poolService.getConfiguration(this.selection.pool_name).subscribe(poolConf => {
        _app_shared_classes_cd_helper_class__WEBPACK_IMPORTED_MODULE_2__.CdHelperClass.updateChanged(this, {
          selectedPoolConfiguration: poolConf
        });
      });
      _app_shared_classes_cd_helper_class__WEBPACK_IMPORTED_MODULE_2__.CdHelperClass.updateChanged(this, {
        poolDetails: lodash__WEBPACK_IMPORTED_MODULE_0___default().omit(this.selection, this.omittedPoolAttributes)
      });
    }
  }
  static ɵfac = function PoolDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PoolDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_1__.PoolService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: PoolDetailsComponent,
    selectors: [["cd-pool-details"]],
    inputs: {
      cacheTiers: "cacheTiers",
      permissions: "permissions",
      selection: "selection"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5028777105388019087$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS_0 = goog.getMsg("Details");
        i18n_0 = MSG_EXTERNAL_5028777105388019087$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS_0;
      } else {
        i18n_0 = "Details";
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9041763226911499160$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS_1 = goog.getMsg("Performance Details");
        i18n_1 = MSG_EXTERNAL_9041763226911499160$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS_1;
      } else {
        i18n_1 = "Performance Details";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4382964053540797190$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS_2 = goog.getMsg("Pool details");
        i18n_2 = MSG_EXTERNAL_4382964053540797190$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS_2;
      } else {
        i18n_2 = "Pool details";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3008420115644088420$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS_3 = goog.getMsg("Configuration");
        i18n_3 = MSG_EXTERNAL_3008420115644088420$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS_3;
      } else {
        i18n_3 = "Configuration";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4064628532851090088$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS_4 = goog.getMsg("Cache Tiers Details");
        i18n_4 = MSG_EXTERNAL_4064628532851090088$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS_4;
      } else {
        i18n_4 = "Cache Tiers Details";
      }
      return [["nav", "ngbNav"], i18n_0, i18n_1, i18n_3, i18n_4, [4, "ngIf"], ["ngbNav", "", "cdStatefulTab", "pool-details", 1, "nav-tabs"], ["ngbNavItem", "details"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["ngbNavItem", "performance-details", 4, "ngIf"], ["ngbNavItem", "configuration", 4, "ngIf"], ["ngbNavItem", "cache-tiers-details", 4, "ngIf"], [3, "ngbNavOutlet"], [3, "renderObjects", "data", "autoReload"], ["ngbNavItem", "performance-details"], ["title", i18n_2, "uid", "-xyV8KCiz", "grafanaStyle", "three", 3, "grafanaPath", "type"], ["ngbNavItem", "configuration"], [3, "data"], ["ngbNavItem", "cache-tiers-details"], ["columnMode", "flex", 3, "data", "columns", "autoSave"]];
    },
    template: function PoolDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, PoolDetailsComponent_ng_container_0_Template, 11, 4, "ng-container", 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavOutlet, _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_4__.GrafanaComponent, _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _shared_datatable_table_key_value_table_key_value_component__WEBPACK_IMPORTED_MODULE_6__.TableKeyValueComponent, _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_7__.StatefulTabDirective, _block_rbd_configuration_list_rbd_configuration_list_component__WEBPACK_IMPORTED_MODULE_8__.RbdConfigurationListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 92834:
/*!*******************************************************!*\
  !*** ./src/app/ceph/pool/pool-form/pool-form-data.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PoolFormData: () => (/* binding */ PoolFormData)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _app_shared_components_select_select_messages_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/components/select/select-messages.model */ 66668);


class PoolFormData {
  poolTypes;
  erasureInfo = false;
  crushInfo = false;
  applications;
  APP_LABELS = {
    cephfs: 'Filesystem',
    rbd: 'Block',
    rgw: 'Object'
  };
  constructor() {
    this.poolTypes = ['erasure', 'replicated'];
    this.applications = {
      selected: [],
      default: ['cephfs', 'rbd', 'rgw'],
      available: [],
      // Filled during runtime
      validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[A-Za-z0-9_]+'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(128)],
      messages: new _app_shared_components_select_select_messages_model__WEBPACK_IMPORTED_MODULE_0__.SelectMessages({
        empty: "No applications added",
        selectionLimit: {
          text: "Applications limit reached",
          tooltip: "A pool can only have up to four applications definitions."
        },
        customValidations: {
          pattern: "Allowed characters '_a-zA-Z0-9'",
          maxlength: "Maximum length is 128 characters"
        },
        filter: "Filter or add applications",
        add: "Add application"
      })
    };
  }
  pgs = 1;
  pool; // Only available during edit mode
}

/***/ }),

/***/ 53916:
/*!************************************************************!*\
  !*** ./src/app/ceph/pool/pool-form/pool-form.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PoolFormComponent: () => (/* binding */ PoolFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 58524);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! rxjs */ 41739);
/* harmony import */ var _app_core_error_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/error/error */ 5155);
/* harmony import */ var _app_shared_api_crush_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/api/crush-rule.service */ 17612);
/* harmony import */ var _app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/api/erasure-code-profile.service */ 14267);
/* harmony import */ var _app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/api/pool.service */ 59870);
/* harmony import */ var _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/classes/crush.node.selection.class */ 94612);
/* harmony import */ var _app_shared_components_delete_confirmation_modal_delete_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/components/delete-confirmation-modal/delete-confirmation-modal.component */ 84821);
/* harmony import */ var _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/components/select/select-option.model */ 31345);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 54372);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 46045);
/* harmony import */ var _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/forms/cd-form */ 74902);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 58384);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 3687);
/* harmony import */ var _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/shared/models/configuration */ 6107);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 85481);
/* harmony import */ var _app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/shared/pipes/dimless-binary.pipe */ 73651);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 34220);
/* harmony import */ var _app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/app/shared/services/formatter.service */ 12540);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 77867);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 50813);
/* harmony import */ var _crush_rule_form_modal_crush_rule_form_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../crush-rule-form-modal/crush-rule-form-modal.component */ 76540);
/* harmony import */ var _erasure_code_profile_form_erasure_code_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../erasure-code-profile-form/erasure-code-profile-form-modal.component */ 66708);
/* harmony import */ var _pool_form_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pool-form-data */ 92834);
/* harmony import */ var _app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ~/app/shared/api/rbd-mirroring.service */ 6872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 66083);
/* harmony import */ var _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/components/helper/helper.component */ 39403);
/* harmony import */ var _shared_components_select_badges_select_badges_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/components/select-badges/select-badges.component */ 48693);
/* harmony import */ var _shared_components_doc_doc_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/components/doc/doc.component */ 87837);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 59781);
/* harmony import */ var _shared_components_help_text_help_text_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../shared/components/help-text/help-text.component */ 64333);
/* harmony import */ var _shared_datatable_table_key_value_table_key_value_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../shared/datatable/table-key-value/table-key-value.component */ 37823);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 23603);
/* harmony import */ var _shared_directives_dimless_binary_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/directives/dimless-binary.directive */ 42865);
/* harmony import */ var _shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../shared/directives/form-loading.directive */ 56677);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 90476);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 10142);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 78708);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 37966);
/* harmony import */ var _block_rbd_configuration_form_rbd_configuration_form_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../block/rbd-configuration-form/rbd-configuration-form.component */ 92737);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 37353);



























































const _c0 = ["crushInfoTabs"];
const _c1 = ["crushDeletionBtn"];
const _c2 = ["ecpInfoTabs"];
const _c3 = ["ecpDeletionBtn"];
const _c4 = a0 => ({
  "active": a0
});
const _c5 = a0 => [a0];
const _c6 = () => ["name"];
const _c7 = () => ["steps", "type", "rule_name"];
function PoolFormComponent_div_0_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const poolType_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("value", poolType_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtextInterpolate1"](" ", poolType_r2, " ");
  }
}
function PoolFormComponent_div_0_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_27_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mode_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("value", mode_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtextInterpolate1"](" ", mode_r3, " ");
  }
}
function PoolFormComponent_div_0_div_27_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_27_div_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_27_div_7_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_27_div_7_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div", 90)(1, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](2, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](3, "div", 92)(4, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵlistener"]("focus", function PoolFormComponent_div_0_div_27_div_7_Template_input_focus_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.externalPgChange = false);
    })("blur", function PoolFormComponent_div_0_div_27_div_7_Template_input_blur_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.alignPgs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](5, PoolFormComponent_div_0_div_27_div_7_span_5_Template, 2, 0, "span", 94)(6, PoolFormComponent_div_0_div_27_div_7_span_6_Template, 2, 0, "span", 94)(7, PoolFormComponent_div_0_div_27_div_7_span_7_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](8, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](9, "cd-doc", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](10, PoolFormComponent_div_0_div_27_div_7_span_10_Template, 2, 0, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](2);
    const formDir_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("pgNum", formDir_r6, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("pgNum", formDir_r6, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("pgNum", formDir_r6, "34"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.externalPgChange);
  }
}
function PoolFormComponent_div_0_div_27_div_8_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113)(1, "ul", 125)(2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](3, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](5, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18nExp"](ctx_r4.getMinSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18nApply"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18nExp"](ctx_r4.getMaxSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18nApply"](5);
  }
}
function PoolFormComponent_div_0_div_27_div_8_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18nExp"](ctx_r4.getMinSize())(ctx_r4.getMaxSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18nApply"](1);
  }
}
function PoolFormComponent_div_0_div_27_div_8_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_27_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div", 90)(1, "label", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](2, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](4, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](5, PoolFormComponent_div_0_div_27_div_8_span_5_Template, 6, 2, "span", 94)(6, PoolFormComponent_div_0_div_27_div_8_span_6_Template, 2, 2, "span", 94)(7, PoolFormComponent_div_0_div_27_div_8_span_7_Template, 2, 0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](2);
    const formDir_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("max", ctx_r4.getMaxSize())("min", ctx_r4.getMinSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("size", formDir_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("size", formDir_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.getValue("size") === 1);
  }
}
function PoolFormComponent_div_0_div_27_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div", 90)(1, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](2, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](3, "div", 92)(4, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](5, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](6, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](7, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()()()();
  }
}
function PoolFormComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div")(1, "div", 90)(2, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](3, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](4, "div", 92)(5, "select", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_27_option_6_Template, 2, 2, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](7, PoolFormComponent_div_0_div_27_div_7_Template, 11, 4, "div", 103)(8, PoolFormComponent_div_0_div_27_div_8_Template, 8, 5, "div", 103)(9, PoolFormComponent_div_0_div_27_div_9_Template, 8, 0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngForOf", ctx_r4.pgAutoscaleModes);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.getValue("pgAutoscaleMode") !== "on");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.isReplicated);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.info.is_all_bluestore && ctx_r4.isErasure);
  }
}
function PoolFormComponent_div_0_i_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](0, "i", 131);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵclassMapInterpolate1"]("", ctx_r4.icons.warning, " icon-warning-color");
  }
}
function PoolFormComponent_div_0_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div", 90)(1, "div", 132)(2, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](3, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](4, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](5, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](6, "cd-help-text")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](8, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()()()()();
  }
}
function PoolFormComponent_div_0_div_40_div_3_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_40_div_3_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngValue", null);
  }
}
function PoolFormComponent_div_0_div_40_div_3_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngValue", null);
  }
}
function PoolFormComponent_div_0_div_40_div_3_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ecp_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngValue", ecp_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtextInterpolate1"](" ", ecp_r8.name, " ");
  }
}
function PoolFormComponent_div_0_div_40_div_3_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_40_div_3_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r9);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.addErasureCodeProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](1, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpureFunction1"](1, _c5, ctx_r4.icons.add));
  }
}
function PoolFormComponent_div_0_div_40_div_3_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "button", 148, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_40_div_3_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r10);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.deleteErasureCodeProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](2, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpureFunction1"](1, _c5, ctx_r4.icons.trash));
  }
}
function PoolFormComponent_div_0_div_40_div_3_span_14_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](0, "cd-table-key-value", 156);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("renderObjects", true)("hideKeys", _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpureFunction0"](4, _c6))("data", ctx_r4.form.getValue("erasureProfile"))("autoReload", false);
  }
}
function PoolFormComponent_div_0_div_40_div_3_span_14_ng_template_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_40_div_3_span_14_ng_template_10_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pool_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtextInterpolate1"](" ", pool_r11, " ");
  }
}
function PoolFormComponent_div_0_div_40_div_3_span_14_ng_template_10_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](1, PoolFormComponent_div_0_div_40_div_3_span_14_ng_template_10_ul_2_li_1_Template, 2, 1, "li", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngForOf", ctx_r4.ecpUsage);
  }
}
function PoolFormComponent_div_0_div_40_div_3_span_14_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](0, PoolFormComponent_div_0_div_40_div_3_span_14_ng_template_10_ng_template_0_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplateRefExtractor"])(2, PoolFormComponent_div_0_div_40_div_3_span_14_ng_template_10_ul_2_Template, 2, 1, "ul", 157);
  }
  if (rf & 2) {
    const ecpIsNotUsed_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵreference"](1);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.ecpUsage)("ngIfElse", ecpIsNotUsed_r12);
  }
}
function PoolFormComponent_div_0_div_40_div_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 149)(1, "nav", 150, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](3, 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](4, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](5, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_40_div_3_span_14_ng_template_6_Template, 1, 5, "ng-template", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](7, 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](8, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](9, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](10, PoolFormComponent_div_0_div_40_div_3_span_14_ng_template_10_Template, 3, 2, "ng-template", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](11, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ecpInfoTabs_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngbNavOutlet", ecpInfoTabs_r13);
  }
}
function PoolFormComponent_div_0_div_40_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div", 90)(1, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](2, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](3, "div", 92)(4, "div", 136)(5, "select", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵlistener"]("change", function PoolFormComponent_div_0_div_40_div_3_Template_select_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.erasureProfileChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_40_div_3_option_6_Template, 2, 0, "option", 138)(7, PoolFormComponent_div_0_div_40_div_3_option_7_Template, 2, 1, "option", 139)(8, PoolFormComponent_div_0_div_40_div_3_option_8_Template, 2, 1, "option", 139)(9, PoolFormComponent_div_0_div_40_div_3_option_9_Template, 2, 2, "option", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](10, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_40_div_3_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.data.erasureInfo = !ctx_r4.data.erasureInfo);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](11, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](12, PoolFormComponent_div_0_div_40_div_3_button_12_Template, 2, 3, "button", 143)(13, PoolFormComponent_div_0_div_40_div_3_button_13_Template, 3, 3, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](14, PoolFormComponent_div_0_div_40_div_3_span_14_Template, 12, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", !ctx_r4.ecProfiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.ecProfiles && ctx_r4.ecProfiles.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.ecProfiles && ctx_r4.ecProfiles.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngForOf", ctx_r4.ecProfiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpureFunction1"](9, _c4, ctx_r4.data.erasureInfo));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpureFunction1"](11, _c5, ctx_r4.icons.questionCircle));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", !ctx_r4.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", !ctx_r4.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.data.erasureInfo && ctx_r4.form.getValue("erasureProfile"));
  }
}
function PoolFormComponent_div_0_div_40_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_40_div_4_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_40_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div", 90)(1, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](2, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](4, PoolFormComponent_div_0_div_40_div_4_span_4_Template, 2, 0, "span", 160)(5, PoolFormComponent_div_0_div_40_div_4_ng_template_5_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const msrCrushText_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵreference"](6);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", !ctx_r4.msrCrush)("ngIfElse", msrCrushText_r14);
  }
}
function PoolFormComponent_div_0_div_40_div_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 119)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](2, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rule_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngValue", rule_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtextInterpolate1"](" ", rule_r16.rule_name, " ");
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_40_div_5_div_6_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r17);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.addCrushRule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](1, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpureFunction1"](1, _c5, ctx_r4.icons.add));
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "button", 166, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_40_div_5_div_6_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r18);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.deleteCrushRule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](2, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpureFunction1"](1, _c5, ctx_r4.icons.trash));
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](0, "cd-table-key-value", 156);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("renderObjects", false)("hideKeys", _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpureFunction0"](4, _c7))("data", ctx_r4.form.getValue("crushRule"))("autoReload", false);
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_10_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r19 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtextInterpolate1"](" ", ctx_r4.describeCrushStep(step_r19), " ");
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](1, PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_10_li_1_Template, 2, 1, "li", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngForOf", ctx_r4.form.get("crushRule").value.steps);
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_14_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pool_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtextInterpolate1"](" ", pool_r20, " ");
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_14_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](1, PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_14_ul_2_li_1_Template, 2, 1, "li", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngForOf", ctx_r4.crushUsage);
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](0, PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_14_ng_template_0_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplateRefExtractor"])(2, PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_14_ul_2_Template, 2, 1, "ul", 157);
  }
  if (rf & 2) {
    const ruleIsNotUsed_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵreference"](1);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.crushUsage)("ngIfElse", ruleIsNotUsed_r21);
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div", 167)(1, "nav", 150, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](3, 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](4, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](5, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_6_Template, 1, 5, "ng-template", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](7, 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](8, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](9, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](10, PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_10_Template, 2, 1, "ng-template", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](11, 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](12, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](13, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](14, PoolFormComponent_div_0_div_40_div_5_div_6_div_10_ng_template_14_Template, 3, 2, "ng-template", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](15, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const crushInfoTabs_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngbNavOutlet", crushInfoTabs_r22);
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_40_div_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div")(1, "div", 161)(2, "select", 162)(3, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](4, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](5, PoolFormComponent_div_0_div_40_div_5_div_6_option_5_Template, 2, 2, "option", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](6, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_40_div_5_div_6_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r15);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.data.crushInfo = !ctx_r4.data.crushInfo);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](7, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](8, PoolFormComponent_div_0_div_40_div_5_div_6_button_8_Template, 2, 3, "button", 143)(9, PoolFormComponent_div_0_div_40_div_5_div_6_button_9_Template, 3, 3, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](10, PoolFormComponent_div_0_div_40_div_5_div_6_div_10_Template, 16, 1, "div", 165)(11, PoolFormComponent_div_0_div_40_div_5_div_6_span_11_Template, 2, 0, "span", 94)(12, PoolFormComponent_div_0_div_40_div_5_div_6_span_12_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](3);
    const formDir_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngForOf", ctx_r4.current.rules);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpureFunction1"](9, _c4, ctx_r4.data.crushInfo));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpureFunction1"](11, _c5, ctx_r4.icons.questionCircle));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.isReplicated && !ctx_r4.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.isReplicated && !ctx_r4.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.data.crushInfo && ctx_r4.form.getValue("crushRule"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("crushRule", formDir_r6, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("crushRule", formDir_r6, "tooFewOsds"));
  }
}
function PoolFormComponent_div_0_div_40_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div", 90)(1, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](2, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](4, PoolFormComponent_div_0_div_40_div_5_ng_template_4_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplateRefExtractor"])(6, PoolFormComponent_div_0_div_40_div_5_div_6_Template, 13, 13, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const noRules_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵreference"](5);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.current.rules.length > 0)("ngIfElse", noRules_r23);
  }
}
function PoolFormComponent_div_0_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div")(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](2, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](3, PoolFormComponent_div_0_div_40_div_3_Template, 15, 13, "div", 103)(4, PoolFormComponent_div_0_div_40_div_4_Template, 7, 2, "div", 103)(5, PoolFormComponent_div_0_div_40_div_5_Template, 7, 2, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.isErasure);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.isErasure && !ctx_r4.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.isReplicated || ctx_r4.editing);
  }
}
function PoolFormComponent_div_0_div_41_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mode_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("value", mode_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtextInterpolate1"](" ", mode_r24, " ");
  }
}
function PoolFormComponent_div_0_div_41_div_11_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_41_div_11_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_41_div_11_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const algorithm_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("value", algorithm_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtextInterpolate1"](" ", algorithm_r25, " ");
  }
}
function PoolFormComponent_div_0_div_41_div_11_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_41_div_11_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_41_div_11_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_41_div_11_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_41_div_11_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_41_div_11_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_41_div_11_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_div_41_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div")(1, "div", 90)(2, "label", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](4, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](5, "div", 92)(6, "select", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](7, PoolFormComponent_div_0_div_41_div_11_option_7_Template, 2, 0, "option", 138)(8, PoolFormComponent_div_0_div_41_div_11_option_8_Template, 2, 0, "option", 138)(9, PoolFormComponent_div_0_div_41_div_11_option_9_Template, 2, 2, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](10, "cd-help-text")(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](12, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](13, "div", 90)(14, "label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](16, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](17, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](18, "input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](19, "cd-help-text")(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](21, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](22, PoolFormComponent_div_0_div_41_div_11_span_22_Template, 2, 0, "span", 94)(23, PoolFormComponent_div_0_div_41_div_11_span_23_Template, 2, 0, "span", 94)(24, PoolFormComponent_div_0_div_41_div_11_span_24_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](25, "div", 90)(26, "label", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](28, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](29, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](30, "input", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](31, "cd-help-text")(32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](33, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](34, PoolFormComponent_div_0_div_41_div_11_span_34_Template, 2, 0, "span", 94)(35, PoolFormComponent_div_0_div_41_div_11_span_35_Template, 2, 0, "span", 94)(36, PoolFormComponent_div_0_div_41_div_11_span_36_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](37, "div", 90)(38, "label", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](40, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](41, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](42, "input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](43, "cd-help-text")(44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](45, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](46, PoolFormComponent_div_0_div_41_div_11_span_46_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](2);
    const formDir_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", !ctx_r4.info.compression_algorithms);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.info.compression_algorithms && ctx_r4.info.compression_algorithms.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngForOf", ctx_r4.info.compression_algorithms);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("minBlobSize", formDir_r6, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("minBlobSize", formDir_r6, "maximum"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("minBlobSize", formDir_r6, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("maxBlobSize", formDir_r6, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("maxBlobSize", formDir_r6, "minimum"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("maxBlobSize", formDir_r6, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("ratio", formDir_r6, "min") || ctx_r4.form.showError("ratio", formDir_r6, "max"));
  }
}
function PoolFormComponent_div_0_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div", 170)(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](2, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](3, "div", 90)(4, "label", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](5, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](6, "div", 92)(7, "select", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](8, PoolFormComponent_div_0_div_41_option_8_Template, 2, 2, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](9, "cd-help-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtext"](10, "Policy used for compression algorithm");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](11, PoolFormComponent_div_0_div_41_div_11_Template, 47, 10, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngForOf", ctx_r4.info.compression_modes);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.hasCompressionEnabled());
  }
}
function PoolFormComponent_div_0_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](1, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
  }
}
function PoolFormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](0, "div", 85)(1, "form", 86, 0)(3, "div", 87)(4, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](5, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpipe"](7, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](8, "div", 89)(9, "div", 90)(10, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](11, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](12, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](13, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](14, PoolFormComponent_div_0_span_14_Template, 2, 0, "span", 94)(15, PoolFormComponent_div_0_span_15_Template, 2, 0, "span", 94)(16, PoolFormComponent_div_0_span_16_Template, 2, 0, "span", 94)(17, PoolFormComponent_div_0_span_17_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](18, "div", 90)(19, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](20, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](21, "div", 92)(22, "select", 96)(23, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](24, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](25, PoolFormComponent_div_0_option_25_Template, 2, 2, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](26, PoolFormComponent_div_0_span_26_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](27, PoolFormComponent_div_0_div_27_Template, 10, 4, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](28, "div", 90)(29, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](31, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](32, "cd-helper")(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](34, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](35, "div", 92)(36, "cd-select-badges", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵlistener"]("selection", function PoolFormComponent_div_0_Template_cd_select_badges_selection_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.appSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](37, PoolFormComponent_div_0_i_37_Template, 1, 3, "i", 102)(38, PoolFormComponent_div_0_span_38_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](39, PoolFormComponent_div_0_div_39_Template, 9, 0, "div", 103)(40, PoolFormComponent_div_0_div_40_Template, 6, 3, "div", 99)(41, PoolFormComponent_div_0_div_41_Template, 12, 2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](42, "div")(43, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](44, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](45, "div", 90)(46, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](48, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](49, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](50, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](51, "cd-help-text")(52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](53, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](55, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](56, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](57, PoolFormComponent_div_0_span_57_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](58, "div", 90)(59, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerStart"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](61, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](62, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](63, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](64, "cd-help-text")(65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](66, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelement"](67, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18n"](69, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](70, PoolFormComponent_div_0_span_70_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](71, "div", 109)(72, "cd-rbd-configuration-form", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵlistener"]("changes", function PoolFormComponent_div_0_Template_cd_rbd_configuration_form_changes_72_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.currentConfigurationValues = $event());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementStart"](73, "div", 111)(74, "cd-form-button-panel", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpipe"](75, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpipe"](76, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵlistener"]("submitActionEvent", function PoolFormComponent_div_0_Template_cd_form_button_panel_submitActionEvent_74_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵresetView"](ctx_r4.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const formDir_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpipeBind1"](6, 28, ctx_r4.action))(_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpipeBind1"](7, 30, ctx_r4.resource));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵi18nApply"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("name", formDir_r6, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("name", formDir_r6, "uniqueName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("name", formDir_r6, "rbdPool"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("name", formDir_r6, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngForOf", ctx_r4.data.poolTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("poolType", formDir_r6, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.isReplicated || ctx_r4.isErasure);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("customBadges", true)("customBadgeValidators", ctx_r4.data.applications.validators)("messages", ctx_r4.data.applications.messages)("data", ctx_r4.data.applications.selected)("options", ctx_r4.data.applications.available)("selectionLimit", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.data.applications.selected <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", !ctx_r4.isApplicationsSelected && ctx_r4.data.applications.selected <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.data.applications.selected.includes("rbd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.isErasure || ctx_r4.isReplicated);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.info.is_all_bluestore);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("max_bytes", formDir_r6, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("ngIf", ctx_r4.form.showError("max_objects", formDir_r6, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("hidden", ctx_r4.isErasure || ctx_r4.data.applications.selected.indexOf("rbd") === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("form", ctx_r4.form)("initializeData", ctx_r4.initializeConfigData);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("form", ctx_r4.form)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpipeBind1"](75, 32, ctx_r4.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵpipeBind1"](76, 34, ctx_r4.resource));
  }
}
class PoolFormComponent extends _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_10__.CdForm {
  dimlessBinaryPipe;
  route;
  router;
  modalService;
  poolService;
  authStorageService;
  formatter;
  taskWrapper;
  ecpService;
  crushRuleService;
  actionLabels;
  rbdMirroringService;
  crushInfoTabs;
  crushDeletionBtn;
  ecpInfoTabs;
  ecpDeletionBtn;
  permission;
  form;
  ecProfiles;
  info;
  routeParamsSubscribe;
  editing = false;
  isReplicated = false;
  isErasure = false;
  data = new _pool_form_data__WEBPACK_IMPORTED_MODULE_22__.PoolFormData();
  externalPgChange = false;
  current = {
    rules: []
  };
  initializeConfigData = new rxjs__WEBPACK_IMPORTED_MODULE_40__.ReplaySubject(1);
  currentConfigurationValues = {};
  action;
  resource;
  icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_9__.Icons;
  pgAutoscaleModes;
  crushUsage = undefined; // Will only be set if a rule is used by some pool
  ecpUsage = undefined; // Will only be set if a rule is used by some pool
  crushRuleMaxSize = 10;
  DEFAULT_RATIO = 0.875;
  isApplicationsSelected = true;
  msrCrush = false;
  modalSubscription;
  constructor(dimlessBinaryPipe, route, router, modalService, poolService, authStorageService, formatter, taskWrapper, ecpService, crushRuleService, actionLabels, rbdMirroringService) {
    super();
    this.dimlessBinaryPipe = dimlessBinaryPipe;
    this.route = route;
    this.router = router;
    this.modalService = modalService;
    this.poolService = poolService;
    this.authStorageService = authStorageService;
    this.formatter = formatter;
    this.taskWrapper = taskWrapper;
    this.ecpService = ecpService;
    this.crushRuleService = crushRuleService;
    this.actionLabels = actionLabels;
    this.rbdMirroringService = rbdMirroringService;
    this.editing = this.router.url.startsWith(`/pool/${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.EDIT}`);
    this.action = this.editing ? this.actionLabels.EDIT : this.actionLabels.CREATE;
    this.resource = "pool";
    this.authenticate();
    this.createForm();
  }
  authenticate() {
    this.permission = this.authStorageService.getPermissions().pool;
    if (!this.permission.read || !this.permission.update && this.editing || !this.permission.create && !this.editing) {
      throw new _app_core_error_error__WEBPACK_IMPORTED_MODULE_1__.DashboardNotFoundError();
    }
  }
  createForm() {
    const compressionForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_11__.CdFormGroup({
      mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl('none'),
      algorithm: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl(''),
      minBlobSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl('', {
        updateOn: 'blur'
      }),
      maxBlobSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl('', {
        updateOn: 'blur'
      }),
      ratio: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl(this.DEFAULT_RATIO, {
        updateOn: 'blur'
      })
    });
    this.form = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_11__.CdFormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_41__.Validators.pattern(/^[.A-Za-z0-9_/-]+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_41__.Validators.required, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('rbdPool', () => {
          return this.form && this.form.getValue('name').includes('/') && this.data && this.data.applications.selected.indexOf('rbd') !== -1;
        })]
      }),
      poolType: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_41__.Validators.required]
      }),
      crushRule: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl(null, {
        validators: [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('tooFewOsds', rule => this.info && rule && this.info.osd_count < 1), _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('required', rule => this.isReplicated && this.info?.crush_rules_replicated?.length > 0 && !rule)]
      }),
      size: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl('', {
        updateOn: 'blur'
      }),
      erasureProfile: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl(null),
      pgNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_41__.Validators.required]
      }),
      pgAutoscaleMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl(null),
      ecOverwrites: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl(false),
      compression: compressionForm,
      max_bytes: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl(''),
      max_objects: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl(0),
      rbdMirroring: new _angular_forms__WEBPACK_IMPORTED_MODULE_41__.UntypedFormControl(false)
    }, [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('form', () => null)]);
  }
  ngOnInit() {
    this.poolService.getInfo().subscribe(info => {
      this.initInfo(info);
      if (this.editing) {
        this.initEditMode();
      } else {
        this.setAvailableApps();
        this.loadingReady();
      }
      this.listenToChanges();
      this.setComplexValidators();
    });
    this.erasureProfileChange();
  }
  initInfo(info) {
    this.pgAutoscaleModes = info.pg_autoscale_modes;
    this.form.silentSet('pgAutoscaleMode', info.pg_autoscale_default_mode);
    this.form.silentSet('algorithm', info.bluestore_compression_algorithm);
    this.info = info;
    this.initEcp(info.erasure_code_profiles);
  }
  initEcp(ecProfiles) {
    this.setListControlStatus('erasureProfile', ecProfiles);
    this.ecProfiles = ecProfiles;
  }
  /**
   * Used to update the crush rule or erasure code profile listings.
   *
   * If only one rule or profile exists it will be selected.
   * If nothing exists null will be selected.
   * If more than one rule or profile exists the listing will be enabled,
   * otherwise disabled.
   */
  setListControlStatus(controlName, arr) {
    const control = this.form.get(controlName);
    const value = control.value;
    if (arr.length === 1 && (!value || !lodash__WEBPACK_IMPORTED_MODULE_0___default().isEqual(value, arr[0]))) {
      control.setValue(arr[0]);
    } else if (arr.length === 0 && value) {
      control.setValue(null);
    }
    if (arr.length <= 1) {
      if (control.enabled) {
        control.disable();
      }
    } else if (control.disabled) {
      control.enable();
    }
  }
  initEditMode() {
    this.disableForEdit();
    this.routeParamsSubscribe = this.route.params.subscribe(param => this.poolService.get(param.name).subscribe(pool => {
      this.data.pool = pool;
      this.initEditFormData(pool);
      this.loadingReady();
    }));
  }
  disableForEdit() {
    ['poolType', 'crushRule', 'size', 'erasureProfile', 'ecOverwrites'].forEach(controlName => this.form.get(controlName).disable());
  }
  initEditFormData(pool) {
    this.initializeConfigData.next({
      initialData: pool.configuration,
      sourceType: _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_13__.RbdConfigurationSourceField.pool
    });
    this.poolTypeChange(pool.type);
    const rules = this.info.crush_rules_replicated.concat(this.info.crush_rules_erasure);
    const dataMap = {
      name: pool.pool_name,
      poolType: pool.type,
      crushRule: rules.find(rule => rule.rule_name === pool.crush_rule),
      size: pool.size,
      erasureProfile: this.ecProfiles.find(ecp => ecp.name === pool.erasure_code_profile),
      pgAutoscaleMode: pool.pg_autoscale_mode,
      pgNum: pool.pg_num,
      ecOverwrites: pool.flags_names.includes('ec_overwrites'),
      mode: pool.options.compression_mode,
      algorithm: pool.options.compression_algorithm,
      minBlobSize: this.dimlessBinaryPipe.transform(pool.options.compression_min_blob_size),
      maxBlobSize: this.dimlessBinaryPipe.transform(pool.options.compression_max_blob_size),
      ratio: pool.options.compression_required_ratio,
      max_bytes: this.dimlessBinaryPipe.transform(pool.quota_max_bytes),
      max_objects: pool.quota_max_objects
    };
    Object.keys(dataMap).forEach(controlName => {
      const value = dataMap[controlName];
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(value) && value !== '') {
        this.form.silentSet(controlName, value);
      }
    });
    this.data.pgs = this.form.getValue('pgNum');
    this.setAvailableApps(this.data.applications.default.concat(pool.application_metadata));
    this.data.applications.selected = pool.application_metadata;
    this.rbdMirroringService.getPool(pool.pool_name).subscribe(resp => {
      this.form.get('rbdMirroring').setValue(resp.mirror_mode === 'pool');
    });
  }
  setAvailableApps(apps = this.data.applications.default) {
    this.data.applications.available = lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq(apps.sort()).map(x => new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_7__.SelectOption(false, x, this.data.APP_LABELS[x] || x));
  }
  listenToChanges() {
    this.listenToChangesDuringAddEdit();
    if (!this.editing) {
      this.listenToChangesDuringAdd();
    }
  }
  listenToChangesDuringAddEdit() {
    this.form.get('pgNum').valueChanges.subscribe(pgs => {
      const change = pgs - this.data.pgs;
      if (Math.abs(change) !== 1 || pgs === 2) {
        this.data.pgs = pgs;
        return;
      }
      this.doPgPowerJump(change);
    });
  }
  doPgPowerJump(jump) {
    const power = this.calculatePgPower() + jump;
    this.setPgs(jump === -1 ? Math.round(power) : Math.floor(power));
  }
  calculatePgPower(pgs = this.form.getValue('pgNum')) {
    return Math.log(pgs) / Math.log(2);
  }
  setPgs(power) {
    const pgs = Math.pow(2, power < 0 ? 0 : power); // Set size the nearest accurate size.
    this.data.pgs = pgs;
    this.form.silentSet('pgNum', pgs);
  }
  listenToChangesDuringAdd() {
    this.form.get('poolType').valueChanges.subscribe(poolType => {
      this.poolTypeChange(poolType);
    });
    this.form.get('crushRule').valueChanges.subscribe(rule => {
      // The crush rule can only be changed if type 'replicated' is set.
      if (this.crushDeletionBtn && this.crushDeletionBtn.isOpen()) {
        this.crushDeletionBtn.close();
      }
      if (!rule) {
        return;
      }
      this.setCorrectMaxSize(rule);
      this.crushRuleIsUsedBy(rule.rule_name);
      this.replicatedRuleChange();
      this.pgCalc();
    });
    this.form.get('size').valueChanges.subscribe(() => {
      // The size can only be changed if type 'replicated' is set.
      this.pgCalc();
    });
    this.form.get('erasureProfile').valueChanges.subscribe(profile => {
      // The ec profile can only be changed if type 'erasure' is set.
      if (this.ecpDeletionBtn && this.ecpDeletionBtn.isOpen()) {
        this.ecpDeletionBtn.close();
      }
      if (!profile) {
        return;
      }
      this.ecpIsUsedBy(profile.name);
      this.pgCalc();
    });
    this.form.get('mode').valueChanges.subscribe(() => {
      ['minBlobSize', 'maxBlobSize', 'ratio'].forEach(name => {
        this.form.get(name).updateValueAndValidity({
          emitEvent: false
        });
      });
    });
    this.form.get('minBlobSize').valueChanges.subscribe(() => {
      this.form.get('maxBlobSize').updateValueAndValidity({
        emitEvent: false
      });
    });
    this.form.get('maxBlobSize').valueChanges.subscribe(() => {
      this.form.get('minBlobSize').updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  poolTypeChange(poolType) {
    if (poolType === 'replicated') {
      this.setTypeBooleans(true, false);
    } else if (poolType === 'erasure') {
      this.setTypeBooleans(false, true);
    } else {
      this.setTypeBooleans(false, false);
    }
    if (!poolType || !this.info) {
      this.current.rules = [];
      return;
    }
    const rules = this.info['crush_rules_' + poolType] || [];
    this.current.rules = rules;
    if (this.editing) {
      return;
    }
    if (this.isReplicated) {
      this.setListControlStatus('crushRule', rules);
    }
    this.replicatedRuleChange();
    this.pgCalc();
  }
  setTypeBooleans(replicated, erasure) {
    this.isReplicated = replicated;
    this.isErasure = erasure;
  }
  replicatedRuleChange() {
    if (!this.isReplicated) {
      return;
    }
    const control = this.form.get('size');
    let size = this.form.getValue('size') || 3;
    const min = this.getMinSize();
    const max = this.getMaxSize();
    if (size < min) {
      size = min;
    } else if (size > max) {
      size = max;
    }
    if (size !== control.value) {
      this.form.silentSet('size', size);
    }
  }
  getMinSize() {
    if (!this.info || this.info.osd_count < 1) {
      return 0;
    }
    return 1;
  }
  getMaxSize() {
    const rule = this.form.getValue('crushRule');
    if (!this.info) {
      return 0;
    }
    if (!rule) {
      const osds = this.info.osd_count;
      const defaultSize = 3;
      return Math.min(osds, defaultSize);
    }
    return rule.usable_size;
  }
  pgCalc() {
    const poolType = this.form.getValue('poolType');
    if (!this.info || this.form.get('pgNum').dirty || !poolType) {
      return;
    }
    const pgMax = this.info.osd_count * 100;
    const pgs = this.isReplicated ? this.replicatedPgCalc(pgMax) : this.erasurePgCalc(pgMax);
    if (!pgs) {
      return;
    }
    const oldValue = this.data.pgs;
    this.alignPgs(pgs);
    const newValue = this.data.pgs;
    if (!this.externalPgChange) {
      this.externalPgChange = oldValue !== newValue;
    }
  }
  setCorrectMaxSize(rule = this.form.getValue('crushRule')) {
    if (!rule) {
      return;
    }
    const domains = _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_5__.CrushNodeSelectionClass.searchFailureDomains(this.info.nodes, rule.steps[0].item_name);
    const currentDomain = domains[rule.steps[1].type];
    const usable = currentDomain ? currentDomain.length : this.crushRuleMaxSize;
    rule.usable_size = Math.min(usable, this.crushRuleMaxSize);
  }
  replicatedPgCalc(pgs) {
    const sizeControl = this.form.get('size');
    const size = sizeControl.value;
    return sizeControl.valid && size > 0 ? pgs / size : 0;
  }
  erasurePgCalc(pgs) {
    const ecpControl = this.form.get('erasureProfile');
    const ecp = ecpControl.value;
    return (ecpControl.valid || ecpControl.disabled) && ecp ? pgs / (ecp.k + ecp.m) : 0;
  }
  alignPgs(pgs = this.form.getValue('pgNum')) {
    this.setPgs(Math.round(this.calculatePgPower(pgs < 1 ? 1 : pgs)));
  }
  setComplexValidators() {
    if (this.editing) {
      this.form.get('name').setValidators([this.form.get('name').validator, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('uniqueName', name => this.data.pool && this.info && this.info.pool_names.indexOf(name) !== -1 && this.info.pool_names.indexOf(name) !== this.info.pool_names.indexOf(this.data.pool.pool_name))]);
    } else {
      _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.validateIf(this.form.get('size'), () => this.isReplicated, [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('min', value => this.form.getValue('size') && value < this.getMinSize()), _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('max', value => this.form.getValue('size') && this.getMaxSize() < value)]);
      this.form.get('name').setValidators([this.form.get('name').validator, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('uniqueName', name => this.info && this.info.pool_names.indexOf(name) !== -1)]);
    }
    this.setCompressionValidators();
  }
  setCompressionValidators() {
    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.validateIf(this.form.get('minBlobSize'), () => this.hasCompressionEnabled(), [_angular_forms__WEBPACK_IMPORTED_MODULE_41__.Validators.min(0), _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('maximum', size => this.oddBlobSize(size, this.form.getValue('maxBlobSize')))]);
    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.validateIf(this.form.get('maxBlobSize'), () => this.hasCompressionEnabled(), [_angular_forms__WEBPACK_IMPORTED_MODULE_41__.Validators.min(0), _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('minimum', size => this.oddBlobSize(this.form.getValue('minBlobSize'), size))]);
    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.validateIf(this.form.get('ratio'), () => this.hasCompressionEnabled(), [_angular_forms__WEBPACK_IMPORTED_MODULE_41__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_41__.Validators.max(1)]);
  }
  oddBlobSize(minimum, maximum) {
    const min = this.formatter.toBytes(minimum);
    const max = this.formatter.toBytes(maximum);
    return Boolean(min && max && min >= max);
  }
  hasCompressionEnabled() {
    return this.form.getValue('mode') && this.form.get('mode').value.toLowerCase() !== 'none';
  }
  describeCrushStep(step) {
    return [step.op.replace('_', ' '), step.item_name || '', step.type ? step.num + ' type ' + step.type : ''].join(' ');
  }
  addErasureCodeProfile() {
    this.addModal(_erasure_code_profile_form_erasure_code_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_21__.ErasureCodeProfileFormModalComponent, name => this.reloadECPs(name));
  }
  addModal(modalComponent, reload) {
    this.hideOpenTooltips();
    const modalRef = this.modalService.show(modalComponent);
    modalRef.componentInstance.submitAction.subscribe(item => {
      reload(item.name);
    });
  }
  hideOpenTooltips() {
    const hideTooltip = btn => btn && btn.isOpen() && btn.close();
    hideTooltip(this.ecpDeletionBtn);
    hideTooltip(this.crushDeletionBtn);
  }
  reloadECPs(profileName) {
    this.reloadList({
      newItemName: profileName,
      getInfo: () => this.ecpService.list(),
      initInfo: profiles => this.initEcp(profiles),
      findNewItem: () => this.ecProfiles.find(p => p.name === profileName),
      controlName: 'erasureProfile'
    });
  }
  reloadList({
    newItemName,
    getInfo,
    initInfo,
    findNewItem,
    controlName
  }) {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
    getInfo().subscribe(items => {
      initInfo(items);
      if (!newItemName) {
        return;
      }
      const item = findNewItem();
      if (item) {
        this.form.get(controlName).setValue(item);
      }
    });
  }
  deleteErasureCodeProfile() {
    this.deletionModal({
      value: this.form.getValue('erasureProfile'),
      usage: this.ecpUsage,
      deletionBtn: this.ecpDeletionBtn,
      dataName: 'erasureInfo',
      getTabs: () => this.ecpInfoTabs,
      tabPosition: 'used-by-pools',
      nameAttribute: 'name',
      itemDescription: "erasure code profile",
      reloadFn: () => this.reloadECPs(),
      deleteFn: name => this.ecpService.delete(name),
      taskName: 'ecp/delete'
    });
  }
  deletionModal({
    value,
    usage,
    deletionBtn,
    dataName,
    getTabs,
    tabPosition,
    nameAttribute,
    itemDescription,
    reloadFn,
    deleteFn,
    taskName
  }) {
    if (!value) {
      return;
    }
    if (usage) {
      deletionBtn.animation = false;
      deletionBtn.toggle();
      this.data[dataName] = true;
      setTimeout(() => {
        const tabs = getTabs();
        if (tabs) {
          tabs.select(tabPosition);
        }
      }, 50);
      return;
    }
    const name = value[nameAttribute];
    this.modalService.show(_app_shared_components_delete_confirmation_modal_delete_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__.DeleteConfirmationModalComponent, {
      itemDescription,
      itemNames: [name],
      submitActionObservable: () => {
        const deletion = deleteFn(name);
        deletion.subscribe(() => reloadFn());
        return this.taskWrapper.wrapTaskAroundCall({
          task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_14__.FinishedTask(taskName, {
            name: name
          }),
          call: deletion
        });
      }
    });
  }
  addCrushRule() {
    this.addModal(_crush_rule_form_modal_crush_rule_form_modal_component__WEBPACK_IMPORTED_MODULE_20__.CrushRuleFormModalComponent, name => this.reloadCrushRules(name));
  }
  reloadCrushRules(ruleName) {
    this.reloadList({
      newItemName: ruleName,
      getInfo: () => this.poolService.getInfo(),
      initInfo: info => {
        this.initInfo(info);
        this.poolTypeChange('replicated');
      },
      findNewItem: () => this.info.crush_rules_replicated.find(rule => rule.rule_name === ruleName),
      controlName: 'crushRule'
    });
  }
  deleteCrushRule() {
    this.deletionModal({
      value: this.form.getValue('crushRule'),
      usage: this.crushUsage,
      deletionBtn: this.crushDeletionBtn,
      dataName: 'crushInfo',
      getTabs: () => this.crushInfoTabs,
      tabPosition: 'used-by-pools',
      nameAttribute: 'rule_name',
      itemDescription: "crush rule",
      reloadFn: () => this.reloadCrushRules(),
      deleteFn: name => this.crushRuleService.delete(name),
      taskName: 'crushRule/delete'
    });
  }
  crushRuleIsUsedBy(ruleName) {
    this.crushUsage = ruleName ? this.info.used_rules[ruleName] : undefined;
  }
  ecpIsUsedBy(profileName) {
    this.ecpUsage = profileName ? this.info.used_profiles[profileName] : undefined;
  }
  submit() {
    if (this.form.invalid) {
      this.form.setErrors({
        cdSubmitButton: true
      });
      return;
    }
    const pool = {
      pool: this.form.getValue('name')
    };
    this.assignFormFields(pool, [{
      externalFieldName: 'pool_type',
      formControlName: 'poolType'
    }, {
      externalFieldName: 'pg_autoscale_mode',
      formControlName: 'pgAutoscaleMode',
      editable: true
    }, {
      externalFieldName: 'pg_num',
      formControlName: 'pgNum',
      replaceFn: value => this.form.getValue('pgAutoscaleMode') === 'on' ? 1 : value,
      editable: true
    }, this.isReplicated ? {
      externalFieldName: 'size',
      formControlName: 'size'
    } : {
      externalFieldName: 'erasure_code_profile',
      formControlName: 'erasureProfile',
      attr: 'name'
    }, {
      externalFieldName: 'rule_name',
      formControlName: 'crushRule',
      replaceFn: value => this.isReplicated ? value && value.rule_name : undefined
    }, {
      externalFieldName: 'quota_max_bytes',
      formControlName: 'max_bytes',
      replaceFn: this.formatter.toBytes,
      editable: true,
      resetValue: this.editing ? 0 : undefined
    }, {
      externalFieldName: 'quota_max_objects',
      formControlName: 'max_objects',
      editable: true,
      resetValue: this.editing ? 0 : undefined
    }, this.data.applications.selected.includes('rbd') ? {
      externalFieldName: 'rbd_mirroring',
      formControlName: 'rbdMirroring'
    } : {
      externalFieldName: 'rbd_mirroring',
      formControlName: 'rbdMirroring',
      resetValue: undefined
    }]);
    if (this.info.is_all_bluestore) {
      this.assignFormField(pool, {
        externalFieldName: 'flags',
        formControlName: 'ecOverwrites',
        replaceFn: () => this.isErasure ? ['ec_overwrites'] : undefined
      });
      if (this.form.getValue('mode') !== 'none') {
        this.assignFormFields(pool, [{
          externalFieldName: 'compression_mode',
          formControlName: 'mode',
          editable: true,
          replaceFn: value => this.hasCompressionEnabled() && value
        }, {
          externalFieldName: 'compression_algorithm',
          formControlName: 'algorithm',
          editable: true
        }, {
          externalFieldName: 'compression_min_blob_size',
          formControlName: 'minBlobSize',
          replaceFn: this.formatter.toBytes,
          editable: true,
          resetValue: 0
        }, {
          externalFieldName: 'compression_max_blob_size',
          formControlName: 'maxBlobSize',
          replaceFn: this.formatter.toBytes,
          editable: true,
          resetValue: 0
        }, {
          externalFieldName: 'compression_required_ratio',
          formControlName: 'ratio',
          editable: true,
          resetValue: 0
        }]);
      } else if (this.editing) {
        this.assignFormFields(pool, [{
          externalFieldName: 'compression_mode',
          formControlName: 'mode',
          editable: true,
          replaceFn: () => 'unset' // Is used if no compression is set
        }, {
          externalFieldName: 'srcpool',
          formControlName: 'name',
          editable: true,
          replaceFn: () => this.data.pool.pool_name
        }]);
      }
    }
    const apps = this.data.applications.selected;
    if (apps.length > 0 || this.editing) {
      pool['application_metadata'] = apps;
      if (apps.includes('rbd')) {
        pool['rbd_mirroring'] = this.form.getValue('rbdMirroring');
      }
      this.isApplicationsSelected = true;
    } else {
      this.isApplicationsSelected = false;
    }
    // Only collect configuration data for replicated pools, as QoS cannot be configured on EC
    // pools. EC data pools inherit their settings from the corresponding replicated metadata pool.
    if (this.isReplicated && !lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(this.currentConfigurationValues)) {
      pool['configuration'] = this.currentConfigurationValues;
    }
    if (!this.isApplicationsSelected) {
      this.form.setErrors({
        cdSubmitButton: true
      });
      return;
    }
    this.triggerApiTask(pool);
  }
  /**
   * Retrieves the values for the given form field descriptions and assigns the values to the given
   * object. This method differentiates between `add` and `edit` mode and acts differently on one or
   * the other.
   */
  assignFormFields(pool, formFieldDescription) {
    formFieldDescription.forEach(item => this.assignFormField(pool, item));
  }
  /**
   * Retrieves the value for the given form field description and assigns the values to the given
   * object. This method differentiates between `add` and `edit` mode and acts differently on one or
   * the other.
   */
  assignFormField(pool, {
    externalFieldName,
    formControlName,
    attr,
    replaceFn,
    editable,
    resetValue
  }) {
    if (this.editing && (!editable || this.form.get(formControlName).pristine)) {
      return;
    }
    const value = this.form.getValue(formControlName);
    let apiValue = replaceFn ? replaceFn(value) : attr ? lodash__WEBPACK_IMPORTED_MODULE_0___default().get(value, attr) : value;
    if (!value || !apiValue) {
      if (editable && !lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(resetValue)) {
        apiValue = resetValue;
      } else {
        return;
      }
    }
    pool[externalFieldName] = apiValue;
  }
  triggerApiTask(pool) {
    const poolName = pool.hasOwnProperty('srcpool') ? pool.srcpool : pool.pool;
    this.taskWrapper.wrapTaskAroundCall({
      task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_14__.FinishedTask('pool/' + (this.editing ? _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.EDIT : _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.CREATE), {
        pool_name: poolName
      }),
      call: this.poolService[this.editing ? _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.UPDATE : _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.CREATE](pool)
    }).subscribe({
      error: resp => {
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(resp.error) && resp.error.code === '34') {
          this.form.get('pgNum').setErrors({
            '34': true
          });
        }
        this.form.setErrors({
          cdSubmitButton: true
        });
      },
      complete: () => this.router.navigate(['/pool'])
    });
  }
  appSelection() {
    this.form.get('name').updateValueAndValidity({
      emitEvent: false,
      onlySelf: true
    });
  }
  erasureProfileChange() {
    const profile = this.form.get('erasureProfile').value;
    if (profile) {
      this.msrCrush = profile['crush-num-failure-domains'] > 0 || profile['crush-osds-per-failure-domain'] > 0;
    }
  }
  static ɵfac = function PoolFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PoolFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_15__.DimlessBinaryPipe), _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_42__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_42__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_18__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_4__.PoolService), _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_16__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_17__.FormatterService), _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_19__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_3__.ErasureCodeProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_app_shared_api_crush_rule_service__WEBPACK_IMPORTED_MODULE_2__.CrushRuleService), _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdirectiveInject"](_app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_23__.RbdMirroringService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineComponent"]({
    type: PoolFormComponent,
    selectors: [["cd-pool-form"]],
    viewQuery: function PoolFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵviewQuery"](_c3, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵloadQuery"]()) && (ctx.crushInfoTabs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵloadQuery"]()) && (ctx.crushDeletionBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵloadQuery"]()) && (ctx.ecpInfoTabs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵloadQuery"]()) && (ctx.ecpDeletionBtn = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5451140586403689891$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_0 = goog.getMsg("Name...");
        i18n_0 = MSG_EXTERNAL_5451140586403689891$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_0;
      } else {
        i18n_0 = "Name...";
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6814278963931082774$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_1 = goog.getMsg("Pools should be associated with an application tag");
        i18n_1 = MSG_EXTERNAL_6814278963931082774$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_1;
      } else {
        i18n_1 = "Pools should be associated with an application tag";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2739243284262593813$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_2 = goog.getMsg("e.g., 10GiB");
        i18n_2 = MSG_EXTERNAL_2739243284262593813$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_2;
      } else {
        i18n_2 = "e.g., 10GiB";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Example: Create Pool
         * @meaning form title
         */
        const MSG_EXTERNAL_formTitle$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_3 = goog.getMsg("{$interpolation} {$interpolation_1}", {
          "interpolation": "\uFFFD0\uFFFD",
          "interpolation_1": "\uFFFD1\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ action | titlecase }}",
            "interpolation_1": "{{ resource | upperFirst }}"
          }
        });
        i18n_3 = MSG_EXTERNAL_formTitle$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_3;
      } else {
        i18n_3 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_4 = goog.getMsg("Name");
        i18n_4 = MSG_EXTERNAL_8953033926734869941$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_4;
      } else {
        i18n_4 = "Name";
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9172197321150709390$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_5 = goog.getMsg("Pool type");
        i18n_5 = MSG_EXTERNAL_9172197321150709390$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_5;
      } else {
        i18n_5 = "Pool type";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1562903615362783646$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_6 = goog.getMsg("-- Select a pool type --");
        i18n_6 = MSG_EXTERNAL_1562903615362783646$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_6;
      } else {
        i18n_6 = "-- Select a pool type --";
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6658000829978978023$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_7 = goog.getMsg("Applications");
        i18n_7 = MSG_EXTERNAL_6658000829978978023$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_7;
      } else {
        i18n_7 = "Applications";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3758994608227054054$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_8 = goog.getMsg("Pools need to be associated with an application before use");
        i18n_8 = MSG_EXTERNAL_3758994608227054054$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_8;
      } else {
        i18n_8 = "Pools need to be associated with an application before use";
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8133124082907931904$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_9 = goog.getMsg("Quotas");
        i18n_9 = MSG_EXTERNAL_8133124082907931904$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_9;
      } else {
        i18n_9 = "Quotas";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3747015173044998769$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_10 = goog.getMsg("Max bytes");
        i18n_10 = MSG_EXTERNAL_3747015173044998769$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_10;
      } else {
        i18n_10 = "Max bytes";
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1598148565161940221$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_11 = goog.getMsg("Leave it blank or specify 0 to disable this quota.");
        i18n_11 = MSG_EXTERNAL_1598148565161940221$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_11;
      } else {
        i18n_11 = "Leave it blank or specify 0 to disable this quota.";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4793948312117174353$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_12 = goog.getMsg("A valid quota should be greater than 0.");
        i18n_12 = MSG_EXTERNAL_4793948312117174353$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_12;
      } else {
        i18n_12 = "A valid quota should be greater than 0.";
      }
      let i18n_13;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8598004196729643782$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_13 = goog.getMsg("Max objects");
        i18n_13 = MSG_EXTERNAL_8598004196729643782$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_13;
      } else {
        i18n_13 = "Max objects";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1598148565161940221$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_14 = goog.getMsg("Leave it blank or specify 0 to disable this quota.");
        i18n_14 = MSG_EXTERNAL_1598148565161940221$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_14;
      } else {
        i18n_14 = "Leave it blank or specify 0 to disable this quota.";
      }
      let i18n_15;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4793948312117174353$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_15 = goog.getMsg("A valid quota should be greater than 0.");
        i18n_15 = MSG_EXTERNAL_4793948312117174353$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_15;
      } else {
        i18n_15 = "A valid quota should be greater than 0.";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_16 = goog.getMsg("This field is required!");
        i18n_16 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_16;
      } else {
        i18n_16 = "This field is required!";
      }
      let i18n_17;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8856591561953003570$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_17 = goog.getMsg("The chosen Ceph pool name is already in use.");
        i18n_17 = MSG_EXTERNAL_8856591561953003570$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_17;
      } else {
        i18n_17 = "The chosen Ceph pool name is already in use.";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4019421115201218895$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_18 = goog.getMsg("It's not possible to create an RBD pool with '/' in the name. Please change the name or remove 'rbd' from the applications list.");
        i18n_18 = MSG_EXTERNAL_4019421115201218895$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_18;
      } else {
        i18n_18 = "It's not possible to create an RBD pool with '/' in the name. Please change the name or remove 'rbd' from the applications list.";
      }
      let i18n_19;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6150797013332470255$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_19 = goog.getMsg("Pool name can only contain letters, numbers, '.', '-', '_' or '/'.");
        i18n_19 = MSG_EXTERNAL_6150797013332470255$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_19;
      } else {
        i18n_19 = "Pool name can only contain letters, numbers, '.', '-', '_' or '/'.";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_20 = goog.getMsg("This field is required!");
        i18n_20 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_20;
      } else {
        i18n_20 = "This field is required!";
      }
      let i18n_21;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8225008431655447514$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_21 = goog.getMsg("PG Autoscale");
        i18n_21 = MSG_EXTERNAL_8225008431655447514$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_21;
      } else {
        i18n_21 = "PG Autoscale";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6631156531520249661$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_22 = goog.getMsg("Calculation help");
        i18n_22 = MSG_EXTERNAL_6631156531520249661$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_22;
      } else {
        i18n_22 = "Calculation help";
      }
      let i18n_23;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3752428261896460601$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_23 = goog.getMsg("Placement groups");
        i18n_23 = MSG_EXTERNAL_3752428261896460601$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_23;
      } else {
        i18n_23 = "Placement groups";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_24 = goog.getMsg("This field is required!");
        i18n_24 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_24;
      } else {
        i18n_24 = "This field is required!";
      }
      let i18n_25;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5406317697422969407$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_25 = goog.getMsg("At least one placement group is needed!");
        i18n_25 = MSG_EXTERNAL_5406317697422969407$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_25;
      } else {
        i18n_25 = "At least one placement group is needed!";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5229921545530078803$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_26 = goog.getMsg("Your cluster can't handle this many PGs. Please recalculate the PG amount needed.");
        i18n_26 = MSG_EXTERNAL_5229921545530078803$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_26;
      } else {
        i18n_26 = "Your cluster can't handle this many PGs. Please recalculate the PG amount needed.";
      }
      let i18n_27;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1689749228990488417$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_27 = goog.getMsg("The current PGs settings were calculated for you, you should make sure the values suit your needs before submit.");
        i18n_27 = MSG_EXTERNAL_1689749228990488417$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_27;
      } else {
        i18n_27 = "The current PGs settings were calculated for you, you should make sure the values suit your needs before submit.";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_752603623252877510$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_28 = goog.getMsg("Replicated size");
        i18n_28 = MSG_EXTERNAL_752603623252877510$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_28;
      } else {
        i18n_28 = "Replicated size";
      }
      let i18n_29;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8024883227048914975$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_29 = goog.getMsg("Minimum: {$interpolation}", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ getMinSize() }}"
          }
        });
        i18n_29 = MSG_EXTERNAL_8024883227048914975$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_29;
      } else {
        i18n_29 = "Minimum: " + "\uFFFD0\uFFFD" + "";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_590459149466870284$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_30 = goog.getMsg("Maximum: {$interpolation}", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ getMaxSize() }}"
          }
        });
        i18n_30 = MSG_EXTERNAL_590459149466870284$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_30;
      } else {
        i18n_30 = "Maximum: " + "\uFFFD0\uFFFD" + "";
      }
      let i18n_31;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7377369889112759555$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_31 = goog.getMsg("The size specified is out of range. A value from {$interpolation} to {$interpolation_1} is usable.", {
          "interpolation": "\uFFFD0\uFFFD",
          "interpolation_1": "\uFFFD1\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ getMinSize() }}",
            "interpolation_1": "{{ getMaxSize() }}"
          }
        });
        i18n_31 = MSG_EXTERNAL_7377369889112759555$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_31;
      } else {
        i18n_31 = "The size specified is out of range. A value from " + "\uFFFD0\uFFFD" + " to " + "\uFFFD1\uFFFD" + " is usable.";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6448090406949650356$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_32 = goog.getMsg("A size of 1 will not create a replication of the object. The 'Replicated size' includes the object itself.");
        i18n_32 = MSG_EXTERNAL_6448090406949650356$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_32;
      } else {
        i18n_32 = "A size of 1 will not create a replication of the object. The 'Replicated size' includes the object itself.";
      }
      let i18n_33;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2870788902465061969$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_33 = goog.getMsg("Flags");
        i18n_33 = MSG_EXTERNAL_2870788902465061969$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_33;
      } else {
        i18n_33 = "Flags";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2339012409163744944$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_34 = goog.getMsg("EC Overwrites");
        i18n_34 = MSG_EXTERNAL_2339012409163744944$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_34;
      } else {
        i18n_34 = "EC Overwrites";
      }
      let i18n_35;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8660945900757367669$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_35 = goog.getMsg("Application selection is required!");
        i18n_35 = MSG_EXTERNAL_8660945900757367669$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_35;
      } else {
        i18n_35 = "Application selection is required!";
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3154623626913350957$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_36 = goog.getMsg("Mirroring");
        i18n_36 = MSG_EXTERNAL_3154623626913350957$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_36;
      } else {
        i18n_36 = "Mirroring";
      }
      let i18n_37;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6084891037005621686$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_37 = goog.getMsg("Check this option to enable Pool based mirroring on a Block(RBD) pool.");
        i18n_37 = MSG_EXTERNAL_6084891037005621686$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_37;
      } else {
        i18n_37 = "Check this option to enable Pool based mirroring on a Block(RBD) pool.";
      }
      let i18n_38;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4223321256203872325$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_38 = goog.getMsg("CRUSH");
        i18n_38 = MSG_EXTERNAL_4223321256203872325$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_38;
      } else {
        i18n_38 = "CRUSH";
      }
      let i18n_39;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6905261999855103308$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_39 = goog.getMsg("This profile can't be deleted as it is in use.");
        i18n_39 = MSG_EXTERNAL_6905261999855103308$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_39;
      } else {
        i18n_39 = "This profile can't be deleted as it is in use.";
      }
      let i18n_40;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6153130195101626553$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_40 = goog.getMsg("Erasure code profile");
        i18n_40 = MSG_EXTERNAL_6153130195101626553$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_40;
      } else {
        i18n_40 = "Erasure code profile";
      }
      let i18n_41;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_41 = goog.getMsg("Loading...");
        i18n_41 = MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_41;
      } else {
        i18n_41 = "Loading...";
      }
      let i18n_42;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5674504811107661466$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_42 = goog.getMsg("-- No erasure code profile available --");
        i18n_42 = MSG_EXTERNAL_5674504811107661466$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_42;
      } else {
        i18n_42 = "-- No erasure code profile available --";
      }
      let i18n_43;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4561644255051104925$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_43 = goog.getMsg("-- Select an erasure code profile --");
        i18n_43 = MSG_EXTERNAL_4561644255051104925$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_43;
      } else {
        i18n_43 = "-- Select an erasure code profile --";
      }
      let i18n_44;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4915431133669985304$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_44 = goog.getMsg("Profile");
        i18n_44 = MSG_EXTERNAL_4915431133669985304$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_44;
      } else {
        i18n_44 = "Profile";
      }
      let i18n_45;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6388596708833227105$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_45 = goog.getMsg("Used by pools");
        i18n_45 = MSG_EXTERNAL_6388596708833227105$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_45;
      } else {
        i18n_45 = "Used by pools";
      }
      let i18n_46;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7364943935614077636$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_46 = goog.getMsg("Profile is not in use.");
        i18n_46 = MSG_EXTERNAL_7364943935614077636$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_46;
      } else {
        i18n_46 = "Profile is not in use.";
      }
      let i18n_47;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2316779381850545017$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_47 = goog.getMsg("Crush ruleset");
        i18n_47 = MSG_EXTERNAL_2316779381850545017$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_47;
      } else {
        i18n_47 = "Crush ruleset";
      }
      let i18n_48;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_491350185559594401$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_48 = goog.getMsg("A new crush ruleset will be implicitly created.");
        i18n_48 = MSG_EXTERNAL_491350185559594401$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_48;
      } else {
        i18n_48 = "A new crush ruleset will be implicitly created.";
      }
      let i18n_49;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2290427802662977523$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_49 = goog.getMsg("A new crush MSR ruleset will be implicitly created. When crush-osds-per-failure-domain or crush-num-failure-domains is specified");
        i18n_49 = MSG_EXTERNAL_2290427802662977523$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_49;
      } else {
        i18n_49 = "A new crush MSR ruleset will be implicitly created. When crush-osds-per-failure-domain or crush-num-failure-domains is specified";
      }
      let i18n_50;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2316779381850545017$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_50 = goog.getMsg("Crush ruleset");
        i18n_50 = MSG_EXTERNAL_2316779381850545017$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_50;
      } else {
        i18n_50 = "Crush ruleset";
      }
      let i18n_51;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2479750831776663300$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_51 = goog.getMsg("There are no rules.");
        i18n_51 = MSG_EXTERNAL_2479750831776663300$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_51;
      } else {
        i18n_51 = "There are no rules.";
      }
      let i18n_52;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1472531588308219240$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_52 = goog.getMsg("Placement and\n                          replication strategies or distribution policies that allow to\n                          specify how CRUSH places data replicas.");
        i18n_52 = MSG_EXTERNAL_1472531588308219240$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_52;
      } else {
        i18n_52 = "Placement and\n                          replication strategies or distribution policies that allow to\n                          specify how CRUSH places data replicas.";
      }
      let i18n_53;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2703635065523295547$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_53 = goog.getMsg("This rule can't be deleted as it is in use.");
        i18n_53 = MSG_EXTERNAL_2703635065523295547$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_53;
      } else {
        i18n_53 = "This rule can't be deleted as it is in use.";
      }
      let i18n_54;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4463049516277766604$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_54 = goog.getMsg("-- Select a crush rule --");
        i18n_54 = MSG_EXTERNAL_4463049516277766604$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_54;
      } else {
        i18n_54 = "-- Select a crush rule --";
      }
      let i18n_55;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5675468447288802964$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_55 = goog.getMsg("Crush rule");
        i18n_55 = MSG_EXTERNAL_5675468447288802964$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_55;
      } else {
        i18n_55 = "Crush rule";
      }
      let i18n_56;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8605423809073301009$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_56 = goog.getMsg("Crush steps");
        i18n_56 = MSG_EXTERNAL_8605423809073301009$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_56;
      } else {
        i18n_56 = "Crush steps";
      }
      let i18n_57;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6388596708833227105$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_57 = goog.getMsg("Used by pools");
        i18n_57 = MSG_EXTERNAL_6388596708833227105$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_57;
      } else {
        i18n_57 = "Used by pools";
      }
      let i18n_58;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1616247679170810690$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_58 = goog.getMsg("Rule is not in use.");
        i18n_58 = MSG_EXTERNAL_1616247679170810690$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_58;
      } else {
        i18n_58 = "Rule is not in use.";
      }
      let i18n_59;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_59 = goog.getMsg("This field is required!");
        i18n_59 = MSG_EXTERNAL_751124305869330542$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_59;
      } else {
        i18n_59 = "This field is required!";
      }
      let i18n_60;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_983890247184422369$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_60 = goog.getMsg("The rule can't be used in the current cluster as it has too few OSDs to meet the minimum required OSD by this rule.");
        i18n_60 = MSG_EXTERNAL_983890247184422369$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_60;
      } else {
        i18n_60 = "The rule can't be used in the current cluster as it has too few OSDs to meet the minimum required OSD by this rule.";
      }
      let i18n_61;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3454103840680130627$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_61 = goog.getMsg("Compression");
        i18n_61 = MSG_EXTERNAL_3454103840680130627$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_61;
      } else {
        i18n_61 = "Compression";
      }
      let i18n_62;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3625019478172002657$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_62 = goog.getMsg("Mode ");
        i18n_62 = MSG_EXTERNAL_3625019478172002657$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_62;
      } else {
        i18n_62 = "Mode ";
      }
      let i18n_63;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3306182187316635998$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_63 = goog.getMsg("e.g., 128KiB");
        i18n_63 = MSG_EXTERNAL_3306182187316635998$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_63;
      } else {
        i18n_63 = "e.g., 128KiB";
      }
      let i18n_64;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7605449430433614156$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_64 = goog.getMsg("e.g., 512KiB");
        i18n_64 = MSG_EXTERNAL_7605449430433614156$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_64;
      } else {
        i18n_64 = "e.g., 512KiB";
      }
      let i18n_65;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4824444844546691624$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_65 = goog.getMsg("Algorithm");
        i18n_65 = MSG_EXTERNAL_4824444844546691624$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_65;
      } else {
        i18n_65 = "Algorithm";
      }
      let i18n_66;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1743559614206500458$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_66 = goog.getMsg("Compression algorithm used");
        i18n_66 = MSG_EXTERNAL_1743559614206500458$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_66;
      } else {
        i18n_66 = "Compression algorithm used";
      }
      let i18n_67;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6531705700837194039$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_67 = goog.getMsg("Minimum blob size");
        i18n_67 = MSG_EXTERNAL_6531705700837194039$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_67;
      } else {
        i18n_67 = "Minimum blob size";
      }
      let i18n_68;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6606371171234917008$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_68 = goog.getMsg("Chunks smaller than Minimum blob size are never compressed");
        i18n_68 = MSG_EXTERNAL_6606371171234917008$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_68;
      } else {
        i18n_68 = "Chunks smaller than Minimum blob size are never compressed";
      }
      let i18n_69;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9193074744671457730$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_69 = goog.getMsg("Maximum blob size");
        i18n_69 = MSG_EXTERNAL_9193074744671457730$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_69;
      } else {
        i18n_69 = "Maximum blob size";
      }
      let i18n_70;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8570508675064800531$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_70 = goog.getMsg("Chunks larger than `Maximum Blob Size` are broken into smaller blobs of size mentioned before being compressed.");
        i18n_70 = MSG_EXTERNAL_8570508675064800531$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_70;
      } else {
        i18n_70 = "Chunks larger than `Maximum Blob Size` are broken into smaller blobs of size mentioned before being compressed.";
      }
      let i18n_71;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1712198024026254502$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_71 = goog.getMsg("Ratio");
        i18n_71 = MSG_EXTERNAL_1712198024026254502$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_71;
      } else {
        i18n_71 = "Ratio";
      }
      let i18n_72;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2362794024575629976$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_72 = goog.getMsg("The ratio of the size of the data chunk after compression relative to the original size must be at least this small in order to store the compressed version");
        i18n_72 = MSG_EXTERNAL_2362794024575629976$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_72;
      } else {
        i18n_72 = "The ratio of the size of the data chunk after compression relative to the original size must be at least this small in order to store the compressed version";
      }
      let i18n_73;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_73 = goog.getMsg("Loading...");
        i18n_73 = MSG_EXTERNAL_3894950702316166331$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_73;
      } else {
        i18n_73 = "Loading...";
      }
      let i18n_74;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1965973164609184105$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_74 = goog.getMsg("-- No erasure compression algorithm available --");
        i18n_74 = MSG_EXTERNAL_1965973164609184105$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_74;
      } else {
        i18n_74 = "-- No erasure compression algorithm available --";
      }
      let i18n_75;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5098375923930423409$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_75 = goog.getMsg("Value should be greater than 0");
        i18n_75 = MSG_EXTERNAL_5098375923930423409$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_75;
      } else {
        i18n_75 = "Value should be greater than 0";
      }
      let i18n_76;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2571669501100650073$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_76 = goog.getMsg("Value should be less than the maximum blob size");
        i18n_76 = MSG_EXTERNAL_2571669501100650073$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_76;
      } else {
        i18n_76 = "Value should be less than the maximum blob size";
      }
      let i18n_77;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4749416028992272245$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_77 = goog.getMsg("Size must be a number or in a valid format. eg: 5 GiB");
        i18n_77 = MSG_EXTERNAL_4749416028992272245$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_77;
      } else {
        i18n_77 = "Size must be a number or in a valid format. eg: 5 GiB";
      }
      let i18n_78;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5098375923930423409$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_78 = goog.getMsg("Value should be greater than 0");
        i18n_78 = MSG_EXTERNAL_5098375923930423409$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_78;
      } else {
        i18n_78 = "Value should be greater than 0";
      }
      let i18n_79;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1889107216619939776$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_79 = goog.getMsg("Value should be greater than the minimum blob size");
        i18n_79 = MSG_EXTERNAL_1889107216619939776$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_79;
      } else {
        i18n_79 = "Value should be greater than the minimum blob size";
      }
      let i18n_80;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4749416028992272245$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_80 = goog.getMsg("Size must be a number or in a valid format. eg: 5 GiB");
        i18n_80 = MSG_EXTERNAL_4749416028992272245$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_80;
      } else {
        i18n_80 = "Size must be a number or in a valid format. eg: 5 GiB";
      }
      let i18n_81;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1115761569439758411$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_81 = goog.getMsg("Value should be between 0.0 and 1.0");
        i18n_81 = MSG_EXTERNAL_1115761569439758411$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_81;
      } else {
        i18n_81 = "Value should be between 0.0 and 1.0";
      }
      let i18n_82;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4749416028992272245$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_82 = goog.getMsg("Size must be a number or in a valid format. eg: 5 GiB");
        i18n_82 = MSG_EXTERNAL_4749416028992272245$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_82;
      } else {
        i18n_82 = "Size must be a number or in a valid format. eg: 5 GiB";
      }
      let i18n_83;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5025817128790551445$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_83 = goog.getMsg("The value should be greater or equal to 0");
        i18n_83 = MSG_EXTERNAL_5025817128790551445$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_83;
      } else {
        i18n_83 = "The value should be greater or equal to 0";
      }
      return [["formDir", "ngForm"], ["ecpDeletionBtn", "ngbTooltip"], ["ecpInfoTabs", "ngbNav"], ["ecpIsNotUsed", ""], ["msrCrushText", ""], ["noRules", ""], ["crushDeletionBtn", "ngbTooltip"], ["crushInfoTabs", "ngbNav"], ["ruleIsNotUsed", ""], i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, i18n_14, i18n_15, i18n_16, i18n_17, i18n_18, i18n_19, i18n_20, i18n_21, i18n_23, i18n_24, i18n_25, i18n_26, i18n_27, i18n_28, i18n_29, i18n_30, i18n_31, i18n_32, i18n_33, i18n_34, i18n_35, i18n_36, i18n_37, i18n_38, i18n_40, i18n_41, i18n_42, i18n_43, i18n_44, i18n_45, i18n_46, i18n_47, i18n_48, i18n_49, i18n_50, i18n_51, i18n_54, i18n_55, i18n_56, i18n_57, i18n_58, i18n_59, i18n_60, i18n_61, i18n_62, i18n_65, i18n_66, i18n_67, i18n_68, i18n_69, i18n_70, i18n_71, i18n_72, i18n_73, i18n_74, i18n_75, i18n_76, i18n_77, i18n_78, i18n_79, i18n_80, i18n_81, i18n_82, i18n_83, ["class", "cd-col-form", 4, "cdFormLoading"], [1, "cd-col-form"], ["name", "form", "novalidate", "", 3, "formGroup"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-group", "row"], ["for", "name", 1, "cd-col-form-label", "required"], [1, "cd-col-form-input"], ["id", "name", "name", "name", "type", "text", "placeholder", i18n_0, "formControlName", "name", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "poolType", 1, "cd-col-form-label", "required"], ["id", "poolType", "formControlName", "poolType", "name", "poolType", 1, "form-select"], ["ngValue", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["for", "applications", 1, "cd-col-form-label", "required"], ["id", "applications", "name", "applications", 3, "selection", "customBadges", "customBadgeValidators", "messages", "data", "options", "selectionLimit"], ["title", i18n_1, 3, "class", 4, "ngIf"], ["class", "form-group row", 4, "ngIf"], ["formGroupName", "compression", 4, "ngIf"], ["for", "max_bytes", 1, "cd-col-form-label"], ["id", "max_bytes", "name", "max_bytes", "type", "text", "formControlName", "max_bytes", "placeholder", i18n_2, "defaultUnit", "GiB", "cdDimlessBinary", "", 1, "form-control"], ["for", "max_objects", 1, "cd-col-form-label"], ["id", "max_objects", "min", "0", "name", "max_objects", "type", "number", "formControlName", "max_objects", 1, "form-control"], [3, "hidden"], [3, "changes", "form", "initializeData"], [1, "card-footer"], ["wrappingClass", "text-right", 3, "submitActionEvent", "form", "submitText"], [1, "invalid-feedback"], [3, "value"], ["for", "pgAutoscaleMode", 1, "cd-col-form-label"], ["id", "pgAutoscaleMode", "name", "pgAutoscaleMode", "formControlName", "pgAutoscaleMode", 1, "form-select"], ["for", "pgNum", 1, "cd-col-form-label", "required"], ["id", "pgNum", "name", "pgNum", "formControlName", "pgNum", "min", "1", "type", "number", "required", "", 1, "form-control", 3, "focus", "blur"], [1, "form-text", "text-muted"], ["section", "pgs", "docText", i18n_22], ["class", "form-text text-muted", 4, "ngIf"], ["for", "size", 1, "cd-col-form-label", "required"], ["id", "size", "name", "size", "type", "number", "formControlName", "size", 1, "form-control", 3, "max", "min"], ["class", "text-warning-dark", 4, "ngIf"], [1, "list-inline"], [1, "text-warning-dark"], [1, "cd-col-form-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "ec-overwrites", "formControlName", "ecOverwrites", 1, "custom-control-input"], ["for", "ec-overwrites", 1, "custom-control-label"], ["title", i18n_1], [1, "cd-col-form-offset"], ["id", "rbdMirroring", "name", "rbdMirroring", "type", "checkbox", "formControlName", "rbdMirroring", 1, "custom-control-input"], ["for", "rbdMirroring", 1, "custom-control-label"], ["for", "erasureProfile", 1, "cd-col-form-label"], [1, "input-group", "mb-1"], ["id", "erasureProfile", "name", "erasureProfile", "formControlName", "erasureProfile", 1, "form-select", 3, "change"], ["ngValue", "", 4, "ngIf"], [3, "ngValue", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "ecp-info-button", "type", "button", 1, "btn", "btn-light", 3, "click", "ngClass"], ["aria-hidden", "true", 3, "ngClass"], ["class", "btn btn-light", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-light", "type", "button", "ngbTooltip", i18n_39, "triggers", "manual", 3, "click", 4, "ngIf"], ["class", "form-text text-muted", "id", "ecp-info-block", 4, "ngIf"], [3, "ngValue"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", "ngbTooltip", i18n_39, "triggers", "manual", 1, "btn", "btn-light", 3, "click"], ["id", "ecp-info-block", 1, "form-text", "text-muted"], ["ngbNav", "", 1, "nav-tabs"], ["ngbNavItem", "ecp-info"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["ngbNavItem", "used-by-pools"], [3, "ngbNavOutlet"], [3, "renderObjects", "hideKeys", "data", "autoReload"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["for", "crushRule", 1, "cd-col-form-label"], ["class", "form-text text-muted", 4, "ngIf", "ngIfElse"], [1, "input-group"], ["id", "crushRule", "formControlName", "crushRule", "name", "crushSet", 1, "form-select"], ["id", "crush-info-button", "type", "button", "ngbTooltip", i18n_52, 1, "btn", "btn-light", 3, "click", "ngClass"], ["class", "btn btn-light", "type", "button", "ngbTooltip", i18n_53, "triggers", "manual", 3, "click", 4, "ngIf"], ["class", "form-text text-muted", "id", "crush-info-block", 4, "ngIf"], ["type", "button", "ngbTooltip", i18n_53, "triggers", "manual", 1, "btn", "btn-light", 3, "click"], ["id", "crush-info-block", 1, "form-text", "text-muted"], ["ngbNavItem", "crush-rule-info"], ["ngbNavItem", "crush-rule-steps"], ["formGroupName", "compression"], ["for", "mode", 1, "cd-col-form-label"], ["id", "mode", "name", "mode", "formControlName", "mode", 1, "form-select"], ["for", "algorithm", 1, "cd-col-form-label"], ["id", "algorithm", "name", "algorithm", "formControlName", "algorithm", 1, "form-select"], ["for", "minBlobSize", 1, "cd-col-form-label"], ["id", "minBlobSize", "name", "minBlobSize", "formControlName", "minBlobSize", "type", "text", "min", "0", "placeholder", i18n_63, "defaultUnit", "KiB", "cdDimlessBinary", "", 1, "form-control"], ["for", "maxBlobSize", 1, "cd-col-form-label"], ["id", "maxBlobSize", "type", "text", "min", "0", "formControlName", "maxBlobSize", "placeholder", i18n_64, "defaultUnit", "KiB", "cdDimlessBinary", "", 1, "form-control"], ["for", "ratio", 1, "cd-col-form-label"], ["id", "ratio", "name", "ratio", "formControlName", "ratio", "type", "number", "min", "0", "max", "1", "step", "0.1", 1, "form-control"]];
    },
    template: function PoolFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵtemplate"](0, PoolFormComponent_div_0_Template, 77, 36, "div", 84);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵproperty"]("cdFormLoading", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_43__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_43__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_43__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__.NgbNavOutlet, _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_24__.HelperComponent, _shared_components_select_badges_select_badges_component__WEBPACK_IMPORTED_MODULE_25__.SelectBadgesComponent, _shared_components_doc_doc_component__WEBPACK_IMPORTED_MODULE_26__.DocComponent, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_27__.FormButtonPanelComponent, _shared_components_help_text_help_text_component__WEBPACK_IMPORTED_MODULE_28__.HelpTextComponent, _shared_datatable_table_key_value_table_key_value_component__WEBPACK_IMPORTED_MODULE_29__.TableKeyValueComponent, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_30__.AutofocusDirective, _shared_directives_dimless_binary_directive__WEBPACK_IMPORTED_MODULE_31__.DimlessBinaryDirective, _shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_32__.FormLoadingDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_33__.FormInputDisableDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_34__.CdFormControlDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_35__.CdFormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_36__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_41__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_41__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_41__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_41__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.FormGroupName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__.NgbTooltip, _block_rbd_configuration_form_rbd_configuration_form_component__WEBPACK_IMPORTED_MODULE_37__.RbdConfigurationFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_43__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_38__.UpperFirstPipe],
    styles: [".icon-warning-color[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2VwaC9wb29sL3Bvb2wtZm9ybS9wb29sLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24td2FybmluZy1jb2xvciB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 43472:
/*!************************************************************!*\
  !*** ./src/app/ceph/pool/pool-list/pool-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PoolListComponent: () => (/* binding */ PoolListComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 58524);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 38364);
/* harmony import */ var _app_ceph_shared_pg_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/ceph/shared/pg-category.service */ 75268);
/* harmony import */ var _app_shared_api_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/api/configuration.service */ 10978);
/* harmony import */ var _app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/api/erasure-code-profile.service */ 14267);
/* harmony import */ var _app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/api/pool.service */ 59870);
/* harmony import */ var _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/classes/list-with-details.class */ 25947);
/* harmony import */ var _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/classes/table-status-view-cache */ 2243);
/* harmony import */ var _app_shared_components_delete_confirmation_modal_delete_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/components/delete-confirmation-modal/delete-confirmation-modal.component */ 84821);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 54372);
/* harmony import */ var _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 62847);
/* harmony import */ var _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/enum/cell-template.enum */ 2148);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 46045);
/* harmony import */ var _app_shared_enum_view_cache_status_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/shared/enum/view-cache-status.enum */ 29130);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 19380);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 85481);
/* harmony import */ var _app_shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/shared/pipes/dimless.pipe */ 18457);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 34220);
/* harmony import */ var _app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/app/shared/services/task-list.service */ 58510);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 50813);
/* harmony import */ var _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/app/shared/services/url-builder.service */ 2361);
/* harmony import */ var _pool__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pool */ 60958);
/* harmony import */ var _app_shared_services_modal_cds_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~/app/shared/services/modal-cds.service */ 94254);
/* harmony import */ var _app_shared_enum_delete_confirmation_modal_impact_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ~/app/shared/enum/delete-confirmation-modal-impact.enum */ 22453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 66083);
/* harmony import */ var _shared_components_usage_bar_usage_bar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/components/usage-bar/usage-bar.component */ 40837);
/* harmony import */ var _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/components/grafana/grafana.component */ 1505);
/* harmony import */ var _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/datatable/table-actions/table-actions.component */ 32295);
/* harmony import */ var _shared_datatable_directives_table_detail_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/datatable/directives/table-detail.directive */ 45843);
/* harmony import */ var _shared_directives_auth_storage_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/directives/auth-storage.directive */ 71656);
/* harmony import */ var _pool_details_pool_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../pool-details/pool-details.component */ 31428);














































const _c0 = ["poolUsageTpl"];
const _c1 = ["poolConfigurationSourceTpl"];
function PoolListComponent_ng_template_5_cd_pool_details_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "cd-pool-details", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("selection", ctx_r1.expandedRow)("permissions", ctx_r1.permissions)("cacheTiers", ctx_r1.cacheTiers);
  }
}
function PoolListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "cd-table", 11, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("fetchData", function PoolListComponent_ng_template_5_Template_cd_table_fetchData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵresetView"](ctx_r1.taskListService.fetch());
    })("setExpandedRow", function PoolListComponent_ng_template_5_Template_cd_table_setExpandedRow_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵresetView"](ctx_r1.setExpandedRow($event));
    })("updateSelection", function PoolListComponent_ng_template_5_Template_cd_table_updateSelection_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵresetView"](ctx_r1.updateSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](2, "cd-table-actions", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](3, PoolListComponent_ng_template_5_cd_pool_details_3_Template, 1, 3, "cd-pool-details", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("data", ctx_r1.pools)("columns", ctx_r1.columns)("hasDetails", true)("status", ctx_r1.tableStatus)("autoReload", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("permission", ctx_r1.permissions.pool)("selection", ctx_r1.selection)("tableActions", ctx_r1.tableActions);
  }
}
function PoolListComponent_ng_container_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "cd-grafana", 15);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("grafanaPath", "ceph-pools-overview?")("type", "metrics");
  }
}
function PoolListComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerStart"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵi18n"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](3, PoolListComponent_ng_container_6_ng_template_3_Template, 1, 2, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerEnd"]();
  }
}
function PoolListComponent_ng_template_8_cd_usage_bar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "cd-usage-bar", 17);
  }
  if (rf & 2) {
    const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]().data.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("total", row_r3.stats.bytes_used.latest + row_r3.stats.avail_raw.latest)("used", row_r3.stats.bytes_used.latest)("title", row_r3.pool_name);
  }
}
function PoolListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](0, PoolListComponent_ng_template_8_cd_usage_bar_0_Template, 1, 3, "cd-usage-bar", 16);
  }
  if (rf & 2) {
    const row_r3 = ctx.data.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", row_r3.stats == null ? null : row_r3.stats.avail_raw == null ? null : row_r3.stats.avail_raw.latest);
  }
}
const BASE_URL = 'pool';
class PoolListComponent extends _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_5__.ListWithDetails {
  poolService;
  taskWrapper;
  ecpService;
  authStorageService;
  taskListService;
  modalService;
  pgCategoryService;
  dimlessPipe;
  urlBuilder;
  configurationService;
  actionLabels;
  table;
  poolUsageTpl;
  poolConfigurationSourceTpl;
  pools;
  columns;
  selection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_13__.CdTableSelection();
  executingTasks = [];
  permissions;
  tableActions;
  tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_6__.TableStatusViewCache();
  cacheTiers = [];
  monAllowPoolDelete = false;
  ecProfileList;
  constructor(poolService, taskWrapper, ecpService, authStorageService, taskListService, modalService, pgCategoryService, dimlessPipe, urlBuilder, configurationService, actionLabels) {
    super();
    this.poolService = poolService;
    this.taskWrapper = taskWrapper;
    this.ecpService = ecpService;
    this.authStorageService = authStorageService;
    this.taskListService = taskListService;
    this.modalService = modalService;
    this.pgCategoryService = pgCategoryService;
    this.dimlessPipe = dimlessPipe;
    this.urlBuilder = urlBuilder;
    this.configurationService = configurationService;
    this.actionLabels = actionLabels;
    this.permissions = this.authStorageService.getPermissions();
    this.tableActions = [{
      permission: 'create',
      icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_11__.Icons.add,
      routerLink: () => this.urlBuilder.getCreate(),
      name: this.actionLabels.CREATE
    }, {
      permission: 'update',
      icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_11__.Icons.edit,
      routerLink: () => this.urlBuilder.getEdit(encodeURIComponent(this.selection.first().pool_name)),
      name: this.actionLabels.EDIT
    }, {
      permission: 'delete',
      icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_11__.Icons.destroy,
      click: () => this.deletePoolModal(),
      name: this.actionLabels.DELETE,
      disable: this.getDisableDesc.bind(this)
    }];
    // Note, we need read permissions to get the 'mon_allow_pool_delete'
    // configuration option.
    if (this.permissions.configOpt.read) {
      this.configurationService.get('mon_allow_pool_delete').subscribe(data => {
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().has(data, 'value')) {
          const monSection = lodash__WEBPACK_IMPORTED_MODULE_0___default().find(data.value, v => {
            return v.section === 'mon';
          }) || {
            value: false
          };
          this.monAllowPoolDelete = monSection.value === 'true' ? true : false;
        }
      });
    }
  }
  ngOnInit() {
    const compare = (prop, pool1, pool2) => lodash__WEBPACK_IMPORTED_MODULE_0___default().get(pool1, prop) > lodash__WEBPACK_IMPORTED_MODULE_0___default().get(pool2, prop) ? 1 : -1;
    this.columns = [{
      prop: 'pool_name',
      name: "Name",
      flexGrow: 2,
      cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.executing
    }, {
      prop: 'data_protection',
      name: "Data Protection",
      cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.badge,
      customTemplateConfig: {
        class: 'badge-background-gray'
      },
      flexGrow: 1.3
    }, {
      prop: 'application_metadata',
      name: "Applications",
      cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.badge,
      customTemplateConfig: {
        class: 'badge-background-primary'
      },
      flexGrow: 1.5
    }, {
      prop: 'pg_status',
      name: "PG Status",
      flexGrow: 1.2,
      cellClass: ({
        row,
        column,
        value
      }) => {
        return this.getPgStatusCellClass(row, column, value);
      }
    }, {
      prop: 'crush_rule',
      name: "Crush Ruleset",
      isHidden: true,
      flexGrow: 2
    }, {
      name: "Usage",
      prop: 'usage',
      cellTemplate: this.poolUsageTpl,
      flexGrow: 1.2
    }, {
      prop: 'stats.rd_bytes.rates',
      name: "Read bytes",
      comparator: (_valueA, _valueB, rowA, rowB) => compare('stats.rd_bytes.latest', rowA, rowB),
      cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.sparkline,
      flexGrow: 1.5
    }, {
      prop: 'stats.wr_bytes.rates',
      name: "Write bytes",
      comparator: (_valueA, _valueB, rowA, rowB) => compare('stats.wr_bytes.latest', rowA, rowB),
      cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.sparkline,
      flexGrow: 1.5
    }, {
      prop: 'stats.rd.rate',
      name: "Read ops",
      flexGrow: 1,
      pipe: this.dimlessPipe,
      cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.perSecond
    }, {
      prop: 'stats.wr.rate',
      name: "Write ops",
      flexGrow: 1,
      pipe: this.dimlessPipe,
      cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.perSecond
    }];
    this.taskListService.init(() => this.ecpService.list().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.mergeMap)(ecProfileList => {
      this.ecProfileList = ecProfileList;
      return this.poolService.getList();
    })), undefined, pools => {
      this.pools = this.transformPoolsData(pools);
      this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_6__.TableStatusViewCache();
    }, () => {
      this.table.reset(); // Disable loading indicator.
      this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_6__.TableStatusViewCache(_app_shared_enum_view_cache_status_enum__WEBPACK_IMPORTED_MODULE_12__.ViewCacheStatus.ValueException);
    }, task => task.name.startsWith(`${BASE_URL}/`), (pool, task) => task.metadata['pool_name'] === pool.pool_name, {
      default: metadata => new _pool__WEBPACK_IMPORTED_MODULE_20__.Pool(metadata['pool_name'])
    });
  }
  updateSelection(selection) {
    this.selection = selection;
  }
  deletePoolModal() {
    const name = this.selection.first().pool_name;
    this.modalService.show(_app_shared_components_delete_confirmation_modal_delete_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_7__.DeleteConfirmationModalComponent, {
      impact: _app_shared_enum_delete_confirmation_modal_impact_enum__WEBPACK_IMPORTED_MODULE_22__.DeletionImpact.high,
      itemDescription: 'Pool',
      itemNames: [name],
      submitActionObservable: () => this.taskWrapper.wrapTaskAroundCall({
        task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_14__.FinishedTask(`${BASE_URL}/${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.DELETE}`, {
          pool_name: name
        }),
        call: this.poolService.delete(name)
      })
    });
  }
  getPgStatusCellClass(_row, _column, value) {
    return {
      'text-right': true,
      [`pg-${this.pgCategoryService.getTypeByStates(value)}`]: true
    };
  }
  getErasureCodeProfile(erasureCodeProfile) {
    let ecpInfo = '';
    lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.ecProfileList, ecpKey => {
      if (ecpKey['name'] === erasureCodeProfile) {
        ecpInfo = `EC: ${ecpKey['k']}+${ecpKey['m']}`;
      }
    });
    return ecpInfo;
  }
  transformPoolsData(pools) {
    const requiredStats = ['bytes_used', 'max_avail', 'avail_raw', 'percent_used', 'rd_bytes', 'wr_bytes', 'rd', 'wr'];
    const emptyStat = {
      latest: 0,
      rate: 0,
      rates: []
    };
    lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(pools, pool => {
      pool['pg_status'] = this.transformPgStatus(pool['pg_status']);
      const stats = {};
      lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(requiredStats, stat => {
        stats[stat] = pool.stats && pool.stats[stat] ? pool.stats[stat] : emptyStat;
      });
      pool['stats'] = stats;
      pool['usage'] = stats.percent_used.latest;
      if (!pool.cdExecuting && pool.pg_num + pool.pg_placement_num !== pool.pg_num_target + pool.pg_placement_num_target) {
        pool['cdExecuting'] = 'Updating';
      }
      ['rd_bytes', 'wr_bytes'].forEach(stat => {
        pool.stats[stat].rates = pool.stats[stat].rates.map(point => point[1]);
      });
      pool.cdIsBinary = true;
      if (pool['type'] === 'erasure') {
        const erasureCodeProfile = pool['erasure_code_profile'];
        pool['data_protection'] = this.getErasureCodeProfile(erasureCodeProfile);
      }
      if (pool['type'] === 'replicated') {
        pool['data_protection'] = `replica: ×${pool['size']}`;
      }
    });
    return pools;
  }
  transformPgStatus(pgStatus) {
    const strings = [];
    lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(pgStatus, (count, state) => {
      strings.push(`${count} ${state}`);
    });
    return strings.join(', ');
  }
  getSelectionTiers() {
    if (typeof this.expandedRow !== 'undefined') {
      const cacheTierIds = this.expandedRow['tiers'];
      this.cacheTiers = this.pools.filter(pool => cacheTierIds.includes(pool.pool));
    }
  }
  getDisableDesc() {
    if (this.selection?.hasSelection) {
      if (!this.monAllowPoolDelete) {
        return "Pool deletion is disabled by the mon_allow_pool_delete configuration setting.";
      }
      return false;
    }
    return true;
  }
  setExpandedRow(expandedRow) {
    super.setExpandedRow(expandedRow);
    this.getSelectionTiers();
  }
  static ɵfac = function PoolListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PoolListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_4__.PoolService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_18__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_3__.ErasureCodeProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_16__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_17__.TaskListService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_app_shared_services_modal_cds_service__WEBPACK_IMPORTED_MODULE_21__.ModalCdsService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_app_ceph_shared_pg_category_service__WEBPACK_IMPORTED_MODULE_1__.PgCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_app_shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_15__.DimlessPipe), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_19__.URLBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_app_shared_api_configuration_service__WEBPACK_IMPORTED_MODULE_2__.ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.ActionLabelsI18n));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineComponent"]({
    type: PoolListComponent,
    selectors: [["cd-pool-list"]],
    viewQuery: function PoolListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵviewQuery"](_app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_9__.TableComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵloadQuery"]()) && (ctx.poolUsageTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵloadQuery"]()) && (ctx.poolConfigurationSourceTpl = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵProvidersFeature"]([_app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_17__.TaskListService, {
      provide: _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_19__.URLBuilderService,
      useValue: new _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_19__.URLBuilderService(BASE_URL)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵInheritDefinitionFeature"]],
    decls: 10,
    vars: 2,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2795615137353856148$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS_0 = goog.getMsg("Pools List");
        i18n_0 = MSG_EXTERNAL_2795615137353856148$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS_0;
      } else {
        i18n_0 = "Pools List";
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4352555506458562289$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS_1 = goog.getMsg("Overall Performance");
        i18n_1 = MSG_EXTERNAL_4352555506458562289$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS_1;
      } else {
        i18n_1 = "Overall Performance";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6164763932138779244$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS_2 = goog.getMsg("Ceph pools overview");
        i18n_2 = MSG_EXTERNAL_6164763932138779244$$___________________________USERS_HUANGZX_WORKSPACE_CEPH_SRC_PYBIND_MGR_DASHBOARD_FRONTEND_SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS_2;
      } else {
        i18n_2 = "Ceph pools overview";
      }
      return [["nav", "ngbNav"], ["poolUsageTpl", ""], ["table", ""], i18n_0, i18n_1, ["ngbNav", "", 1, "nav-tabs"], ["ngbNavItem", ""], ["ngbNavLink", ""], ["ngbNavContent", ""], ["ngbNavItem", "", 4, "cdScope"], [3, "ngbNavOutlet"], ["id", "pool-list", "selectionType", "single", 3, "fetchData", "setExpandedRow", "updateSelection", "data", "columns", "hasDetails", "status", "autoReload"], ["id", "pool-list-actions", 1, "table-actions", 3, "permission", "selection", "tableActions"], ["id", "pool-list-details", 3, "selection", "permissions", "cacheTiers", 4, "cdTableDetail"], ["id", "pool-list-details", 3, "selection", "permissions", "cacheTiers"], ["title", i18n_2, "uid", "z99hzWtmk", "grafanaStyle", "three", 3, "grafanaPath", "type"], ["decimals", "2", 3, "total", "used", "title", 4, "ngIf"], ["decimals", "2", 3, "total", "used", "title"]];
    },
    template: function PoolListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "nav", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerStart"](2, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](3, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵi18n"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](5, PoolListComponent_ng_template_5_Template, 4, 8, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](6, PoolListComponent_ng_container_6_Template, 4, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](8, PoolListComponent_ng_template_8_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const nav_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("cdScope", "grafana");
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngbNavOutlet", nav_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbNavOutlet, _shared_components_usage_bar_usage_bar_component__WEBPACK_IMPORTED_MODULE_23__.UsageBarComponent, _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_24__.GrafanaComponent, _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_9__.TableComponent, _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_25__.TableActionsComponent, _shared_datatable_directives_table_detail_directive__WEBPACK_IMPORTED_MODULE_26__.TableDetailDirective, _shared_directives_auth_storage_directive__WEBPACK_IMPORTED_MODULE_27__.AuthStorageDirective, _pool_details_pool_details_component__WEBPACK_IMPORTED_MODULE_28__.PoolDetailsComponent],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  cd-pool-list .pg-clean {\n  color: #008a00;\n}\n  cd-pool-list .pg-working {\n  color: #25828e;\n}\n  cd-pool-list .pg-warning {\n  color: #d48200;\n}\n  cd-pool-list .pg-unknown {\n  color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmVuZG9yL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2VwaC9wb29sL3Bvb2wtbGlzdC9wb29sLWxpc3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2RlZmF1bHRzL19ib290c3RyYXAtZGVmYXVsdHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUFBO0FBTUE7Ozs7Ozs7OztDQUFBO0FDSEU7RUFDRSxjQ29CSTtBRFBSO0FBVkU7RUFDRSxjQ3VCTTtBRFhWO0FBVEU7RUFDRSxjQ1dLO0FEQVQ7QUFSRTtFQUNFLGNDR0U7QURPTiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFZlbmRvciBzcGVjaWZpYyB2YXJpYWJsZXNcblxuRXhhbXBsZTpcbiRteS1hY2NlbnQtY29sb3I6ICNhMThmZmZcbiovXG5cbi8qIEJvb3RzdHJhcCB2YXJpYWJsZXMgdGhhdCBhcmUgYWxyZWFkeSBkZWZpbmVkIGNhbiBiZSBvdmVycmlkZGVuIHVzaW5nIGNvbmZpZ3VyYXRpb246XG5odHRwczovL3Nhc3MtbGFuZy5jb20vZG9jdW1lbnRhdGlvbi9hdC1ydWxlcy9mb3J3YXJkI2NvbmZpZ3VyaW5nLW1vZHVsZXNcblxuRXhhbXBsZTpcbkBmb3J3YXJkICcuLi9kZWZhdWx0cy9ib290c3RyYXAtZGVmYXVsdHMnIHdpdGggKFxuICAkdGhlbWUtY29sb3JzOiAoXG4gICAgJ2FjY2VudCc6ICRteS1hY2NlbnQtY29sb3JcbiAgKVxuKTtcbiovXG5AZm9yd2FyZCAnLi4vZGVmYXVsdHMvYm9vdHN0cmFwLWRlZmF1bHRzJztcbiIsIkB1c2UgJy4vc3JjL3N0eWxlcy92ZW5kb3IvdmFyaWFibGVzJyBhcyB2djtcblxuOjpuZy1kZWVwIGNkLXBvb2wtbGlzdCB7XG4gIC5wZy1jbGVhbiB7XG4gICAgY29sb3I6IHZ2LiRzdWNjZXNzO1xuICB9XG5cbiAgLnBnLXdvcmtpbmcge1xuICAgIGNvbG9yOiB2di4kcHJpbWFyeTtcbiAgfVxuXG4gIC5wZy13YXJuaW5nIHtcbiAgICBjb2xvcjogdnYuJHdhcm5pbmc7XG4gIH1cblxuICAucGctdW5rbm93biB7XG4gICAgY29sb3I6IHZ2LiRkYW5nZXI7XG4gIH1cbn1cbiIsIi8vIENvbG9yIHN5c3RlbVxuXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG5cbiRibHVlOiAjMDA3YmZmICFkZWZhdWx0O1xuJGluZGlnbzogIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcHVycGxlLWRpbTogIzZmNDJjMTgwICFkZWZhdWx0O1xuJHBpbms6ICNhOTQ0NDIgIWRlZmF1bHQ7XG4kcmVkOiAjZGMzNTQ1ICFkZWZhdWx0O1xuJHJlZC1kaW06ICNkYzM1NDU4MCAhZGVmYXVsdDtcbiRvcmFuZ2U6ICNmZDdlMTQgIWRlZmF1bHQ7XG4kb3JhbmdlLWRpbTogI2ZkN2UxNDgwICFkZWZhdWx0O1xuJHllbGxvdzogI2Q0ODIwMCAhZGVmYXVsdDtcbiRncmVlbjogIzAwOGEwMCAhZGVmYXVsdDtcbiRncmVlbi1kaW06ICMwMDhhMDA4MCAhZGVmYXVsdDtcbiR0ZWFsOiAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICMxN2EyYjggIWRlZmF1bHQ7XG4kY3lhbi1kaW06ICMxN2EyYjg4MCAhZGVmYXVsdDtcbiRiYXJsZXktd2hpdGU6ICNmY2VjYmEgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAjMjU4MjhlICFkZWZhdWx0O1xuJHByaW1hcnktNTAwOiAjMmI5OWE4ICFkZWZhdWx0O1xuJHNlY29uZGFyeTogIzM3NDI0OSAhZGVmYXVsdDtcbiRzdWNjZXNzOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogJHByaW1hcnkgIWRlZmF1bHQ7XG4kd2FybmluZzogJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAkZ3JheS04MDAgIWRlZmF1bHQ7XG5cbi8vYmFkZ2VzIGNvbG9yc1xuJGdyZWVuLTMwMDogIzZlYzY2NDtcbiRjeWFuLTMwMDogIzAwOTU5NjtcbiRwdXJwbGUtMzAwOiAjYTE4ZmZmO1xuJGxpZ2h0LWJsdWUtMzAwOiAjMzVjYWVkO1xuJGdvbGQtMzAwOiAjZjRjMTQ1O1xuJGxpZ2h0LWdyZWVuLTMwMDogI2FjZTEyZTtcblxuLy8gRXh0cmEgdGhlbWUgY29sb3JzLlxuJGFjY2VudDogJHByaW1hcnkgIWRlZmF1bHQ7XG4kd2FybmluZy1kYXJrOiAkb3JhbmdlICFkZWZhdWx0O1xuXG4kZmctY29sb3Itb3Zlci1kYXJrLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XG4kZmctaG92ZXItY29sb3Itb3Zlci1kYXJrLWJnOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgJ2FjY2VudCc6ICRhY2NlbnQsXG4gICd3YXJuaW5nLWRhcmsnOiAkd2FybmluZy1kYXJrLFxuICAncHJpbWFyeSc6ICRhY2NlbnQsXG4gICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LFxuICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxuICAnaW5mbyc6ICRpbmZvLFxuICAnd2FybmluZyc6ICR3YXJuaW5nLFxuICAnZGFuZ2VyJzogJGRhbmdlcixcbiAgJ2xpZ2h0JzogJGxpZ2h0LFxuICAnZGFyayc6ICRkYXJrXG4pICFkZWZhdWx0O1xuXG4vLyBCdXR0b24gY29sb3JzXG4kYnRuLXByaW1hcnktaG92ZXI6ICMxZjZmNzkgIWRlZmF1bHQ7XG4kYnRuLXByaW1hcnktYWN0aXZlOiAjMWU2ODcyICFkZWZhdWx0O1xuXG4vLyBCb2R5XG4kYm9keS1jb2xvci1icmlnaHQ6ICRsaWdodCAhZGVmYXVsdDtcbiRib2R5LWJnOiAkd2hpdGUgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogJGdyYXktOTAwICFkZWZhdWx0O1xuJGJvZHktYmctYWx0OiAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4vLyBIZWFsdGggY29sb3JzLlxuJGhlYWx0aC1jb2xvci1lcnJvcjogJHJlZCAhZGVmYXVsdDtcbiRoZWFsdGgtY29sb3ItaGVhbHRoeTogJGdyZWVuICFkZWZhdWx0O1xuJGhlYWx0aC1jb2xvci13YXJuaW5nOiAkeWVsbG93ICFkZWZhdWx0O1xuJGhlYWx0aC1jb2xvci13YXJuaW5nLTgwMDogIzlkNmQxMCAhZGVmYXVsdDtcblxuLy8gQ2hhcnQgY29sb3JzLlxuJGNoYXJ0LWNvbG9yLXJlZDogJHJlZCAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci15ZWxsb3c6ICNmNmQxNzMgIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3ItdHJhbnNsdWNlbnQtcmVkOiAkcmVkLWRpbSAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1ibHVlOiAkYmx1ZSAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1vcmFuZ2U6ICRvcmFuZ2UgIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3ItdHJhbnNsdWNlbnQtb3JhbmdlOiAkb3JhbmdlLWRpbSAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci10cmFuc2x1Y2VudC1ncmVlbjogJGdyZWVuLWRpbSAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci10cmFuc2x1Y2VudC1jeWFuOiAkY3lhbi1kaW0gIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3IteWVsbG93OiAkeWVsbG93ICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLWdyZWVuOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3ItZ3JheTogI2VkZWRlZCAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1jeWFuOiAkcHJpbWFyeS01MDAgIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3ItbGlnaHQtZ3JheTogI2YwZjBmMCAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1zbGlnaHQtZGFyay1ncmF5OiAjZDdkN2Q3ICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLWRhcmstZ3JheTogI2FmYWZhZiAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1wdXJwbGU6ICRwdXJwbGUgIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3ItdHJhbnNsdWNlbnQtcHVycGxlOiAkcHVycGxlLWRpbSAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1jZW50ZXItdGV4dDogIzE1MTUxNSAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1jZW50ZXItdGV4dC1kZXNjcmlwdGlvbjogIzcyNzY3YiAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci10b29sdGlwLWJhY2tncm91bmQ6ICRibGFjayAhZGVmYXVsdDtcbiRjaGFydC1kYW5nZXI6ICNjOTE5MGIgIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3Itc3Ryb25nLWJsdWU6ICMwMDc4YzggIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3ItdHJhbnNsdWNlbnQtYmx1ZTogIzAwOTZkYzgwICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLWJvcmRlcjogIzAwMDAwMDIwICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLXRyYW5zbHVjZW50LXllbGxvdzogI2VmOTIzNDcyICFkZWZhdWx0O1xuXG4kY29kZS1ibG9jay1iZzogI2Y3ZjdmOSAhZGVmYXVsdDtcblxuLy8gVHlwb2dyYXBoeVxuXG4vLyBXQVJOSU5HOiBUaGlzIHdhcyBjbGFzaGluZyB3aXRoIENhcmJvbidzIGZvbnQtZmFtaWx5XG4vLyAkZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsXG4vLyAgICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaScgIWRlZmF1bHQ7XG5cbi8vIENhcmRcblxuJGNhcmQtY2FwLWJnOiAkZ3JheS0xMDAgIWRlZmF1bHQ7XG5cbi8vIEdyaWRcblxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAzMHB4ICFkZWZhdWx0O1xuXG4vLyBUYWJsZVxuXG4kZGF0YXRhYmxlLWRpdmlkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjA5KSAhZGVmYXVsdDtcblxuLy8gTmF2c1xuXG4kbmF2LXRhYnMtbWFyZ2luLWJvdHRvbTogMXJlbSAhZGVmYXVsdDtcblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcbiR0b29sdGlwLWJnOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIE1pc2NcblxuJHNjcmVlbi1zbS1taW46IDU3NnB4ICFkZWZhdWx0O1xuJHNjcmVlbi1tZC1taW46IDc2OHB4ICFkZWZhdWx0O1xuJHNjcmVlbi1sZy1taW46IDk5MnB4ICFkZWZhdWx0O1xuJHNjcmVlbi14bC1taW46IDEyMDBweCAhZGVmYXVsdDtcbiR0cmVlLWNvbnRhaW5lci1oZWlnaHQ6IDIwMHB4ICFkZWZhdWx0O1xuXG4kc2NyZWVuLXhzLW1heDogY2FsYygjeyRzY3JlZW4tc20tbWlufSAtIDFweCkgIWRlZmF1bHQ7XG4kc2NyZWVuLXNtLW1heDogY2FsYygjeyRzY3JlZW4tbWQtbWlufSAtIDFweCkgIWRlZmF1bHQ7XG4kc2NyZWVuLW1kLW1heDogY2FsYygjeyRzY3JlZW4tbGctbWlufSAtIDFweCkgIWRlZmF1bHQ7XG4kc2NyZWVuLWxnLW1heDogY2FsYygjeyRzY3JlZW4teGwtbWlufSAtIDFweCkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItaGVpZ2h0OiA0M3B4ICFkZWZhdWx0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9566:
/*!******************************************!*\
  !*** ./src/app/ceph/pool/pool.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PoolModule: () => (/* binding */ PoolModule),
/* harmony export */   RoutedPoolModule: () => (/* binding */ RoutedPoolModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 66083);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 54372);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/shared.module */ 93887);
/* harmony import */ var _block_block_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block/block.module */ 40880);
/* harmony import */ var _shared_ceph_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ceph-shared.module */ 26481);
/* harmony import */ var _crush_rule_form_modal_crush_rule_form_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crush-rule-form-modal/crush-rule-form-modal.component */ 76540);
/* harmony import */ var _erasure_code_profile_form_erasure_code_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./erasure-code-profile-form/erasure-code-profile-form-modal.component */ 66708);
/* harmony import */ var _pool_details_pool_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pool-details/pool-details.component */ 31428);
/* harmony import */ var _pool_form_pool_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pool-form/pool-form.component */ 53916);
/* harmony import */ var _pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pool-list/pool-list.component */ 43472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 96623);















class PoolModule {
  static ɵfac = function PoolModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PoolModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: PoolModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_shared_ceph_shared_module__WEBPACK_IMPORTED_MODULE_3__.CephSharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltipModule, _block_block_module__WEBPACK_IMPORTED_MODULE_2__.BlockModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PoolModule, {
    declarations: [_pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_8__.PoolListComponent, _pool_form_pool_form_component__WEBPACK_IMPORTED_MODULE_7__.PoolFormComponent, _erasure_code_profile_form_erasure_code_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_5__.ErasureCodeProfileFormModalComponent, _crush_rule_form_modal_crush_rule_form_modal_component__WEBPACK_IMPORTED_MODULE_4__.CrushRuleFormModalComponent, _pool_details_pool_details_component__WEBPACK_IMPORTED_MODULE_6__.PoolDetailsComponent],
    imports: [_shared_ceph_shared_module__WEBPACK_IMPORTED_MODULE_3__.CephSharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltipModule, _block_block_module__WEBPACK_IMPORTED_MODULE_2__.BlockModule],
    exports: [_pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_8__.PoolListComponent, _pool_form_pool_form_component__WEBPACK_IMPORTED_MODULE_7__.PoolFormComponent]
  });
})();
const routes = [{
  path: '',
  component: _pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_8__.PoolListComponent
}, {
  path: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.CREATE,
  component: _pool_form_pool_form_component__WEBPACK_IMPORTED_MODULE_7__.PoolFormComponent,
  data: {
    breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.CREATE
  }
}, {
  path: `${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.EDIT}/:name`,
  component: _pool_form_pool_form_component__WEBPACK_IMPORTED_MODULE_7__.PoolFormComponent,
  data: {
    breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.EDIT
  }
}];
class RoutedPoolModule {
  static ɵfac = function RoutedPoolModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RoutedPoolModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: RoutedPoolModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [PoolModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](RoutedPoolModule, {
    imports: [PoolModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 60958:
/*!***********************************!*\
  !*** ./src/app/ceph/pool/pool.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pool: () => (/* binding */ Pool)
/* harmony export */ });
class Pool {
  cache_target_full_ratio_micro;
  fast_read;
  stripe_width;
  flags_names;
  tier_of;
  hit_set_grade_decay_rate;
  use_gmt_hitset;
  last_force_op_resend_preluminous;
  quota_max_bytes;
  erasure_code_profile;
  expected_num_objects;
  size;
  snap_seq;
  auid;
  cache_min_flush_age;
  hit_set_period;
  min_read_recency_for_promote;
  target_max_objects;
  pg_num;
  pg_num_target;
  pg_num_pending;
  pg_placement_num;
  pg_placement_num_target;
  pg_autoscale_mode;
  pg_status;
  type;
  pool_name;
  cache_min_evict_age;
  cache_mode;
  min_size;
  cache_target_dirty_high_ratio_micro;
  object_hash;
  application_metadata;
  write_tier;
  cache_target_dirty_ratio_micro;
  pool;
  removed_snaps;
  cdExecuting;
  executingTasks;
  crush_rule;
  tiers;
  hit_set_params;
  last_force_op_resend;
  pool_snaps;
  quota_max_objects;
  options;
  hit_set_count;
  flags;
  target_max_bytes;
  hit_set_search_last_n;
  last_change;
  min_write_recency_for_promote;
  read_tier;
  stats;
  cdIsBinary;
  configuration;
  constructor(name) {
    this.pool_name = name;
  }
}

/***/ }),

/***/ 14267:
/*!************************************************************!*\
  !*** ./src/app/shared/api/erasure-code-profile.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErasureCodeProfileService: () => (/* binding */ ErasureCodeProfileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 77008);



class ErasureCodeProfileService {
  http;
  apiPath = 'api/erasure_code_profile';
  formTooltips = {
    // Copied from /doc/rados/operations/erasure-code.*.rst
    k: "Each object is split in data-chunks parts, each stored on a different OSD.",
    m: "Compute coding chunks for each object and store them on different OSDs.\n      The number of coding chunks is also the number of OSDs that can be down without losing data.",
    plugins: {
      jerasure: {
        description: "The jerasure plugin is the most generic and flexible plugin,\n          it is also the default for Ceph erasure coded pools.",
        technique: "The more flexible technique is reed_sol_van : it is enough to set k\n          and m. The cauchy_good technique can be faster but you need to chose the packetsize\n          carefully. All of reed_sol_r6_op, liberation, blaum_roth, liber8tion are RAID6 equivalents\n          in the sense that they can only be configured with m=2.",
        packetSize: "The encoding will be done on packets of bytes size at a time.\n          Choosing the right packet size is difficult.\n          The jerasure documentation contains extensive information on this topic."
      },
      lrc: {
        description: "With the jerasure plugin, when an erasure coded object is stored on\n          multiple OSDs, recovering from the loss of one OSD requires reading from all the others.\n          For instance if jerasure is configured with k=8 and m=4, losing one OSD requires reading\n          from the eleven others to repair.\n\n          The lrc erasure code plugin creates local parity chunks to be able to recover using\n          less OSDs. For instance if lrc is configured with k=8, m=4 and l=4, it will create\n          an additional parity chunk for every four OSDs. When a single OSD is lost, it can be\n          recovered with only four OSDs instead of eleven.",
        l: "Group the coding and data chunks into sets of size locality. For instance,\n          for k=4 and m=2, when locality=3 two groups of three are created. Each set can\n          be recovered without reading chunks from another set.",
        crushLocality: "The type of the crush bucket in which each set of chunks defined\n          by l will be stored. For instance, if it is set to rack, each group of l chunks will be\n          placed in a different rack. It is used to create a CRUSH rule step such as step choose\n          rack. If it is not set, no such grouping is done."
      },
      isa: {
        description: "The isa plugin encapsulates the ISA library. It only runs on Intel processors.",
        technique: "The ISA plugin comes in two Reed Solomon forms.\n          If reed_sol_van is set, it is Vandermonde, if cauchy is set, it is Cauchy."
      },
      shec: {
        description: "The shec plugin encapsulates the multiple SHEC library.\n          It allows ceph to recover data more efficiently than Reed Solomon codes.",
        c: "The number of parity chunks each of which includes each data chunk in its\n          calculation range. The number is used as a durability estimator. For instance, if c=2,\n          2 OSDs can be down without losing data."
      },
      clay: {
        description: "CLAY (short for coupled-layer) codes are erasure codes designed to\n          bring about significant savings in terms of network bandwidth and disk IO when a failed\n          node/OSD/rack is being repaired.",
        d: "Number of OSDs requested to send data during recovery of a single chunk.\n          d needs to be chosen such that k+1 <= d <= k+m-1. The larger the d, the better\n          the savings.",
        scalar_mds: "scalar_mds specifies the plugin that is used as a building block\n          in the layered construction. It can be one of jerasure, isa, shec.",
        technique: "technique specifies the technique that will be picked\n          within the 'scalar_mds' plugin specified. Supported techniques\n          are 'reed_sol_van', 'reed_sol_r6_op', 'cauchy_orig',\n          'cauchy_good', 'liber8tion' for jerasure, 'reed_sol_van',\n          'cauchy' for isa and 'single', 'multiple' for shec."
      }
    },
    crushRoot: "The name of the crush bucket used for the first step of the CRUSH rule.\n      For instance step take default.",
    crushFailureDomain: "Ensure that no two chunks are in a bucket with the same failure\n      domain. For instance, if the failure domain is host no two chunks will be stored on the same\n      host. It is used to create a CRUSH rule step such as step chooseleaf host.",
    crushNumFailureDomains: " Number of failure domains to map. Results in a CRUSH MSR rule being created.\n    Must be specified if crush-osds-per-failure-domain is specified.",
    crushOsdsPerFailureDomain: "Maximum number of OSDs to place in each failure domain --\n     defaults to 1. Using a value greater than one will cause a CRUSH MSR rule to be created.\n      Must be specified if crush-num-failure-domains is specified.",
    crushDeviceClass: "The device class on which to place data.",
    directory: "Set the directory name from which the erasure code plugin is loaded."
  };
  constructor(http) {
    this.http = http;
  }
  list() {
    return this.http.get(this.apiPath);
  }
  create(ecp) {
    return this.http.post(this.apiPath, ecp, {
      observe: 'response'
    });
  }
  delete(name) {
    return this.http.delete(`${this.apiPath}/${name}`, {
      observe: 'response'
    });
  }
  getInfo() {
    return this.http.get(`ui-${this.apiPath}/info`);
  }
  static ɵfac = function ErasureCodeProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ErasureCodeProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ErasureCodeProfileService,
    factory: ErasureCodeProfileService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 94612:
/*!**************************************************************!*\
  !*** ./src/app/shared/classes/crush.node.selection.class.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrushNodeSelectionClass: () => (/* binding */ CrushNodeSelectionClass)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 58524);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_erasure_code_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/erasure-code-profile */ 49862);


class CrushNodeSelectionClass {
  nodes = [];
  idTree = {};
  allDevices = [];
  controls;
  buckets = [];
  failureDomains = {};
  failureDomainKeys = [];
  devices = [];
  deviceCount = 0;
  /**
   * Handles manual or automatic update of device class.
   *
   * When set true, the device class form field is automatically
   * updated with the first device in the list of devices.
   * Otherwise, user manually selects a device class.
   */
  autoDeviceUpdate = true;
  static searchFailureDomains(nodes, s) {
    return this.getFailureDomains(this.search(nodes, s));
  }
  /**
   * Filters crush map for a node and it's tree.
   * The node name as provided in crush rules attribute item_name is supported.
   * This means that '$name~$deviceType' can be used and will result in a crush map
   * that only include buckets with the specified device in use as their leaf.
   */
  static search(nodes, s) {
    const [search, deviceType] = s.split('~'); // Used inside item_name in crush rules
    const node = nodes.find(n => ['name', 'id', 'type'].some(attr => n[attr] === search));
    if (!node) {
      return [];
    }
    nodes = this.getSubNodes(node, this.createIdTreeFromNodes(nodes));
    if (deviceType) {
      nodes = this.filterNodesByDeviceType(nodes, deviceType);
    }
    return nodes;
  }
  static createIdTreeFromNodes(nodes) {
    const idTree = {};
    nodes.forEach(node => {
      idTree[node.id] = node;
    });
    return idTree;
  }
  static getSubNodes(node, idTree) {
    let subNodes = [node]; // Includes parent node
    if (!node.children) {
      return subNodes;
    }
    node.children.forEach(id => {
      const childNode = idTree[id];
      subNodes = subNodes.concat(this.getSubNodes(childNode, idTree));
    });
    return subNodes;
  }
  static filterNodesByDeviceType(nodes, deviceType) {
    let doNotInclude = nodes.filter(n => n.device_class && n.device_class !== deviceType).map(n => n.id);
    let foundNewNode;
    let childrenToRemove = doNotInclude;
    // Filters out all unwanted nodes
    do {
      foundNewNode = false;
      nodes = nodes.filter(n => !doNotInclude.includes(n.id)); // Unwanted nodes
      // Find nodes where all children were filtered
      const toRemoveNext = [];
      nodes.forEach(n => {
        if (n.children && n.children.every(id => doNotInclude.includes(id))) {
          toRemoveNext.push(n.id);
          foundNewNode = true;
        }
      });
      if (foundNewNode) {
        doNotInclude = toRemoveNext; // Reduces array length
        childrenToRemove = childrenToRemove.concat(toRemoveNext);
      }
    } while (foundNewNode);
    // Removes filtered out children in all left nodes with children
    nodes = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(nodes); // Clone objects to not change original objects
    nodes = nodes.map(n => {
      if (!n.children) {
        return n;
      }
      n.children = n.children.filter(id => !childrenToRemove.includes(id));
      return n;
    });
    return nodes;
  }
  static getFailureDomains(nodes) {
    const domains = {};
    nodes.forEach(node => {
      const type = node.type;
      if (!domains[type]) {
        domains[type] = [];
      }
      domains[type].push(node);
    });
    return domains;
  }
  initCrushNodeSelection(nodes, rootControl, failureControl, deviceControl, autoDeviceUpdate = true) {
    this.autoDeviceUpdate = autoDeviceUpdate;
    this.nodes = nodes;
    this.idTree = CrushNodeSelectionClass.createIdTreeFromNodes(nodes);
    nodes.forEach(node => {
      this.idTree[node.id] = node;
    });
    this.buckets = lodash__WEBPACK_IMPORTED_MODULE_0___default().sortBy(nodes.filter(n => n.children), 'name');
    this.controls = {
      root: rootControl,
      failure: failureControl,
      device: deviceControl
    };
    this.preSelectRoot();
    this.controls.root.valueChanges.subscribe(() => this.onRootChange());
    this.controls.failure.valueChanges.subscribe(() => this.onFailureDomainChange());
    this.controls.device.valueChanges.subscribe(() => this.onDeviceChange());
  }
  preSelectRoot() {
    const rootNode = this.nodes.find(node => node.type === 'root');
    this.silentSet(this.controls.root, rootNode);
    this.onRootChange();
  }
  silentSet(control, value) {
    control.setValue(value, {
      emitEvent: false
    });
  }
  onRootChange() {
    const nodes = CrushNodeSelectionClass.getSubNodes(this.controls.root.value, this.idTree);
    const domains = CrushNodeSelectionClass.getFailureDomains(nodes);
    Object.keys(domains).forEach(type => {
      if (domains[type].length <= 1) {
        delete domains[type];
      }
    });
    this.failureDomains = domains;
    this.failureDomainKeys = Object.keys(domains).sort();
    this.updateFailureDomain();
  }
  updateFailureDomain() {
    let failureDomain = this.getIncludedCustomValue(this.controls.failure, Object.keys(this.failureDomains));
    if (failureDomain === '') {
      failureDomain = this.setMostCommonDomain(this.controls.failure);
    }
    this.updateDevices(failureDomain);
  }
  getIncludedCustomValue(control, includedIn) {
    return control.dirty && includedIn.includes(control.value) ? control.value : '';
  }
  setMostCommonDomain(failureControl) {
    let winner = {
      n: 0,
      type: ''
    };
    Object.keys(this.failureDomains).forEach(type => {
      const n = this.failureDomains[type].length;
      if (winner.n < n) {
        winner = {
          n,
          type
        };
      }
    });
    this.silentSet(failureControl, winner.type);
    return winner.type;
  }
  onFailureDomainChange() {
    this.updateDevices();
  }
  updateDevices(failureDomain = this.controls.failure.value) {
    if (failureDomain === _models_erasure_code_profile__WEBPACK_IMPORTED_MODULE_1__.CrushFailureDomains.Host) {
      this.allDevices = this.failureDomains[failureDomain].filter(fD => fD.type).map(fD => fD.type);
      this.onDeviceChange('');
    } else {
      const subNodes = lodash__WEBPACK_IMPORTED_MODULE_0___default().flatten(this.failureDomains[failureDomain].map(node => CrushNodeSelectionClass.getSubNodes(node, this.idTree)));
      this.allDevices = subNodes.filter(n => n.device_class).map(n => n.device_class);
      this.devices = lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq(this.allDevices).sort();
      const device = this.devices.length === 1 ? this.devices[0] : this.getIncludedCustomValue(this.controls.device, this.devices);
      if (this.autoDeviceUpdate) this.silentSet(this.controls.device, device);
      this.onDeviceChange(device);
    }
  }
  onDeviceChange(deviceType = this.controls.device.value) {
    this.deviceCount = deviceType === '' ? this.allDevices.length : this.allDevices.filter(type => type === deviceType).length;
  }
}

/***/ }),

/***/ 49862:
/*!*******************************************************!*\
  !*** ./src/app/shared/models/erasure-code-profile.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrushFailureDomains: () => (/* binding */ CrushFailureDomains),
/* harmony export */   ErasureCodeProfile: () => (/* binding */ ErasureCodeProfile)
/* harmony export */ });
class ErasureCodeProfile {
  name;
  plugin;
  k;
  m;
  c;
  l;
  d;
  packetsize;
  technique;
  scalar_mds;
  'crush-root';
  'crush-locality';
  'crush-failure-domain';
  'crush-num-failure-domains';
  'crush-osds-per-failure-domain';
  'crush-device-class';
  'directory';
}
var CrushFailureDomains;
(function (CrushFailureDomains) {
  CrushFailureDomains["Osd"] = "osd";
  CrushFailureDomains["Host"] = "host";
})(CrushFailureDomains || (CrushFailureDomains = {}));

/***/ })

}]);
//# sourceMappingURL=src_app_ceph_pool_pool_module_ts.js.map