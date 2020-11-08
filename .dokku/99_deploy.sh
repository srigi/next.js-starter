#!/usr/bin/env bash

__DIR__="$(cd "$(dirname "$BASH_SOURCE")" >/dev/null 2>&1 && pwd)"
source ${__DIR__}/_common.sh
source ${__DIR__}/.env
source ${__DIR__}/../.env.local

if [[ -z $1 ]]; then
	echo -e "${COLOR_RED}You must specify Dokku host alias in second argument!${NC}"
	exit 1
fi

DOKKU_HOSTS=$(compgen -A variable | grep DOKKU_HOST_)
DOKKU_HOST_ALIASES=()

for DOKKU_HOST in ${DOKKU_HOSTS}; do
	DOKKU_HOST_ALIASES+=(${DOKKU_HOST/DOKKU_HOST_/})
done
if [[ " ${DOKKU_HOST_ALIASES[*]} " != *" $1 "* ]]; then
    echo -e "${COLOR_RED}Provided Dokku host alias \"$1\" is not present in you .env file!${NC}"
    exit 1
fi

DOKKU_HOST_VAR=DOKKU_HOST_$1
DOKKU_HOST=${!DOKKU_HOST_VAR}

printf "${COLOR_YELLOW}Setting-up${NC} ENV vars for Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC} at Dokku host ${COLOR_GREEN}${DOKKU_HOST}${NC}... "
ssh ${DOKKU_HOST} dokku config:set ${DOKKU_APP_NAME} \
	DATABASE_URL=.data/main.sqlite3 \
	NEXT_PUBLIC_SENTRY_DSN=${NEXT_PUBLIC_SENTRY_DSN} \
	NEXT_TELEMETRY_DISABLED=1 \
	SENTRY_ORG=${SENTRY_ORG} \
	SENTRY_PROJECT=${SENTRY_PROJECT} \
	SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN}
echo "OK!"

printf "${COLOR_YELLOW}Deploying${NC} Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC} at Dokku host ${COLOR_GREEN}${DOKKU_HOST}${NC}... "
GIT_CURRENT_BRANCH=`git rev-parse --abbrev-ref HEAD`
git push -f dokku@${DOKKU_HOST} ${GIT_CURRENT_BRANCH}:master
echo "OK!"
