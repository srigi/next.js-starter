#!/usr/bin/env bash

__DIR__="$(cd "$(dirname "$BASH_SOURCE")" >/dev/null 2>&1 && pwd)"
source ${__DIR__}/_common.sh
source ${__DIR__}/../.env
source ${__DIR__}/../.env.local
source ${__DIR__}/.env

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
GIT_DEFAULT_BRANCH='master'
GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ $GIT_BRANCH != $GIT_DEFAULT_BRANCH ]]; then
	printf " ${COLOR_YELLOW}You are not on default branch!${NC} Do you want to deploy current branch ${COLOR_BLUE}${GIT_BRANCH}${NC}? [y/N]: ";
	read INP
	if [[ ${INP} != 'y' && $INP != 'Y' ]]; then
		exit 1
	fi
fi

printf "Update ${COLOR_YELLOW}ENV vars${NC} of Dokku app? [y/N]: "
read INP
if [[ ${INP} == 'y' || $INP == 'Y' ]]; then
	printf "${COLOR_YELLOW}Configuring${NC} ENV vars for Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC} at Dokku host ${COLOR_GREEN}${DOKKU_HOST}${NC}... "
	ssh ${DOKKU_HOST} dokku config:set ${DOKKU_APP_NAME} \
		NEXT_TELEMETRY_DISABLED=1 \
		DATABASE_ENGINE=${DATABASE_ENGINE} \
		NEXT_PUBLIC_SENTRY_DSN=${NEXT_PUBLIC_SENTRY_DSN} \
		SENTRY_ORG=${SENTRY_ORG} \
		SENTRY_PROJECT=${SENTRY_PROJECT} \
		SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN}
	echo "OK!"
	echo "done... waiting 10s"
	sleep 10
fi

printf "${COLOR_YELLOW}Deploying${NC} Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC} at Dokku host ${COLOR_GREEN}${DOKKU_HOST}${NC}... "
git push -f dokku@${DOKKU_HOST} ${GIT_BRANCH}:master
echo "OK!"
