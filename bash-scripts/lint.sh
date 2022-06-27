#!/usr/bin/env sh
# . "$(dirname -- "$0")/_/husky.sh"

npm run eslint
if [ $? != 0 ]; then
    printf "\n\n\n"
      echo "************** web-client lint failed **************"
    printf "\n\n\n"
      exit 1
fi

# npm run cover
# if [ $? != 0 ]; then
#     printf "\n\n\n"
#     echo "************** web-client eslint failed **************"
#     printf "\n\n\n"
#     exit 1
# fi

exit 0
