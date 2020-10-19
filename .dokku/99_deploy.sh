#!/usr/bin/env bash

__DIR__="$(cd "$(dirname "$BASH_SOURCE")" >/dev/null 2>&1 && pwd)"

source ${__DIR__}/_common.sh
source ${__DIR__}/.env
source ${__DIR__}/../.env.local

printf "${COLOR_YELLOW}Setting-up${NC} ENV vars for Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC}... "
ssh ${DOKKU_HOST} dokku config:set ${DOKKU_APP_NAME} \
	NEXT_PUBLIC_SENTRY_DSN=${NEXT_PUBLIC_SENTRY_DSN} \
	NEXT_TELEMETRY_DISABLED=1 \
	SENTRY_ORG=${SENTRY_ORG} \
	SENTRY_PROJECT=${SENTRY_PROJECT} \
	SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN}
echo "OK!"

printf "${COLOR_YELLOW}Deploying${NC} Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC}... "
git push dokku master
echo "OK!"
