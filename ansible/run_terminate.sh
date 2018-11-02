#!/bin/bash

instanceId=$1
access=$2
secret=$3

export AWS_ACCESS_KEY_ID="$access"
export AWS_SECRET_ACCESS_KEY="$secret"

ansible-playbook /root/transcend-api/ansible/terminate.yml -e "instanceId=$instanceId"

export AWS_ACCESS_KEY_ID="access"
export AWS_SECRET_ACCESS_KEY="secret"