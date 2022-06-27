#!/usr/bin/env sh
# . "$(dirname -- "$0")/_/husky.sh"

npm run cover
if [ $? != 0 ]; then
    printf "\n\n\n"
    echo "************** web-client testing failed **************"
    printf "\n\n\n"
    exit 1
fi

exit 0
