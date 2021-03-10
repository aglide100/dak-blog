#!/bin/bash
set -eu
# receive env form outside
export PrimaryDomain

envsubst '${PrimaryDomain}' < /proxy.conf.template > /etc/nginx/sites-available/proxy.conf

# if [[ -n "$USERNAME" ]] && [[ -n "$USERPWD" ]]
# then
# 	if [[ -n "$USERNAME2" ]] && [[ -n "$USERPWD2" ]]
# 	then
# 		htpasswd -bc /etc/nginx/user.htpasswd  $USERNAME $USERPWD
# 		htpasswd -b /etc/nginx/user.htpasswd $USERNAME2 $USERPWD2
# 		echo Done.
# 	else 
# 		htpasswd -bc /etc/nginx/user.htpasswd  $USERNAME $USERPWD
# 		echo Done.
# 	fi
# else
#     echo no auth file
# fi

exec "$@"