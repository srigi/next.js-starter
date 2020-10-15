#!/usr/bin/env bash

CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
COLOR_RED='\033[1;31m'
COLOR_GREEN='\033[1;32m'
COLOR_BLUE='\033[1;34m'
COLOR_YELLOW='\033[1;33m'
NC='\033[0m' # No Color

source "${CWD}/.env"

printf "${COLOR_YELLOW}Creating${NC} Dokku app ${COLOR_BLUE}${DOKKU_APP_NAME}${NC}... "
ssh ${DOKKU_HOST} dokku apps:create ${DOKKU_APP_NAME} 2>/dev/null
echo "OK!"

printf "${COLOR_YELLOW}Setting-up${NC} Git remote ${COLOR_BLUE}dokku${NC}... "
git remote add dokku dokku@${DOKKU_HOST}:${DOKKU_APP_NAME} 2>/dev/null
echo "OK!"
