#!/bin/bash

access=$1
secret=$2

export AWS_ACCESS_KEY_ID="$access"
export AWS_SECRET_ACCESS_KEY="$secret"

ansible-playbook -vvv initial_ec2.yml --private-key=~/ec2-keys/webServer_rsa.pem

export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
