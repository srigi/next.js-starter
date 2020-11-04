#!/usr/bin/env bash

__DIR__="$(cd "$(dirname "$BASH_SOURCE")" >/dev/null 2>&1 && pwd)"
source ${__DIR__}/_common.sh
source ${__DIR__}/.env

DOKKU_HOSTS=$(compgen -A variable | grep DOKKU_HOST_)

for DOKKU_HOST in ${DOKKU_HOSTS}; do
	printf "${COLOR_YELLOW}Install${NC} Dokku plugin ${COLOR_BLUE}Postgres${NC} at Dokku host ${COLOR_GREEN}${!DOKKU_HOST}${NC}... "
	ssh ${!DOKKU_HOST} dokku plugin:install https://github.com/dokku/dokku-postgres.git postgres 2>/dev/null
	echo "OK!"
done

for DOKKU_HOST in ${DOKKU_HOSTS}; do
	printf "${COLOR_YELLOW}Create${NC} Postgres database ${COLOR_BLUE}${DOKKU_APP_NAME}${NC} at Dokku host ${COLOR_GREEN}${!DOKKU_HOST}${NC}... "
	ssh ${!DOKKU_HOST} dokku postgres:create ${DOKKU_APP_NAME}
	echo "OK!"
done
