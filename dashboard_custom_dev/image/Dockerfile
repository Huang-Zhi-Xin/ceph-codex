ARG BASE_IMAGE=quay.io/ceph/ceph:v20.2.0
FROM ${BASE_IMAGE}

LABEL org.opencontainers.image.title="KX Storage Dashboard"
LABEL org.opencontainers.image.description="Customized Ceph Dashboard frontend for KX Storage"
LABEL org.opencontainers.image.vendor="KX Storage"

RUN rm -rf /usr/share/ceph/mgr/dashboard/frontend/dist/*

COPY dist/ /usr/share/ceph/mgr/dashboard/frontend/dist/
COPY package.json /usr/share/ceph/mgr/dashboard/frontend/package.json
