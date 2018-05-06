#!/usr/bin/env bash

access=$1
secret=$2

export AWS_ACCESS_KEY_ID="$access"
export AWS_SECRET_ACCESS_KEY="$secret"

ansible-playbook ec2_webServer.yml

export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
