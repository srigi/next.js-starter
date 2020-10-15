#!/usr/bin/env bash

CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
COLOR_RED='\033[1;31m'
COLOR_GREEN='\033[1;32m'
COLOR_BLUE='\033[1;34m'
COLOR_YELLOW='\033[1;33m'
NC='\033[0m' # No Color

source "${CWD}/.env"

printf "${COLOR_YELLOW}Deploying${NC} Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC}... "
git push dokku master
echo "OK!"

printf "${COLOR_YELLOW}Configuring${NC} port-mapping for Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC}... "
ssh ${DOKKU_HOST} dokku proxy:ports-set ${DOKKU_APP_NAME} http:80:3000
echo "OK!"
