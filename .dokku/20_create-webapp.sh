#!/usr/bin/env bash

__DIR__="$(cd "$(dirname "$BASH_SOURCE")" >/dev/null 2>&1 && pwd)"
source ${__DIR__}/_common.sh
source ${__DIR__}/.env

DOKKU_HOSTS=$(compgen -A variable | grep DOKKU_HOST_)

for DOKKU_HOST in ${DOKKU_HOSTS}; do
	printf "${COLOR_YELLOW}Creating${NC} Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC} at Dokku host ${COLOR_GREEN}${!DOKKU_HOST}${NC}... "
	ssh ${!DOKKU_HOST} dokku apps:create ${DOKKU_APP_NAME} 2>/dev/null
	echo "OK!"
done

for DOKKU_HOST in ${DOKKU_HOSTS}; do
	printf "${COLOR_YELLOW}Setting-up${NC} Git remote ${COLOR_BLUE}dokku@${!DOKKU_HOST}${NC}... "
	git remote add dokku@${!DOKKU_HOST} dokku@${!DOKKU_HOST}:${DOKKU_APP_NAME} 2>/dev/null
	echo "OK!"
done

for DOKKU_HOST in ${DOKKU_HOSTS}; do
	printf "${COLOR_YELLOW}Configuring${NC} port-mapping for Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC} at Dokku host ${COLOR_GREEN}${!DOKKU_HOST}${NC}... "
	ssh ${!DOKKU_HOST} dokku proxy:ports-set ${DOKKU_APP_NAME} http:80:3000
	echo "OK!"
done

for DOKKU_HOST in ${DOKKU_HOSTS}; do
	printf "${COLOR_YELLOW}Linking${NC} Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC} to Postgres database ${COLOR_BLUE}${DOKKU_APP_NAME}${NC} at Dokku host ${COLOR_GREEN}${!DOKKU_HOST}${NC}... "
	ssh ${!DOKKU_HOST} dokku postgres:link ${DOKKU_APP_NAME} ${DOKKU_APP_NAME}
	echo "OK!"
done
