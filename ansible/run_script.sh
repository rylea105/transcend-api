#!/bin/bash

#access=$1
#secret=$2
ci=$1

#export AWS_ACCESS_KEY_ID="$access"
#export AWS_SECRET_ACCESS_KEY="$secret"

ansible-playbook /root/transcend-api/ansible/create_key-pair.yml

ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/root/project.pem -e cicd=$ci

#export AWS_ACCESS_KEY_ID=""
#export AWS_SECRET_ACCESS_KEY=""