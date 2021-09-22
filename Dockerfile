#
# Copyright 2019 ForgeRock AS. All Rights Reserved
#
FROM nginxinc/nginx-unprivileged:1.18-alpine

COPY build/ /opt/www

COPY nginx.conf /etc/nginx/conf.d/default.conf

ARG REVISION=HEAD
LABEL revision=$REVISION
