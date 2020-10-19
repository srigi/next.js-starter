#!/usr/bin/env bash

FILE=.env.local
VAR_NAME=GIT_REV

function update_git_commit_sha {
	COMMIT_ID=`git rev-parse --short=9 HEAD`

	sed -i '' "s/^\(${VAR_NAME}\)=.*/\1=$COMMIT_ID/" ${FILE}
}
