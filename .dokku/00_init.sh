#!/usr/bin/env bash

__DIR__="$(cd "$(dirname "$BASH_SOURCE")" >/dev/null 2>&1 && pwd)"

source ${__DIR__}/_common.sh
source ${__DIR__}/.env

printf "${COLOR_YELLOW}Creating${NC} Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC}... "
ssh ${DOKKU_HOST} dokku apps:create ${DOKKU_APP_NAME} 2>/dev/null
echo "OK!"

printf "${COLOR_YELLOW}Setting-up${NC} Git remote ${COLOR_BLUE}dokku${NC}... "
git remote add dokku dokku@${DOKKU_HOST}:${DOKKU_APP_NAME} 2>/dev/null
echo "OK!"

printf "${COLOR_YELLOW}Configuring${NC} port-mapping for Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC}... "
ssh ${DOKKU_HOST} dokku proxy:ports-set ${DOKKU_APP_NAME} http:80:3000
echo "OK!"
