#!/bin/bash

access=$1
secret=$2
cicd=$3
region=$4
keypair=$5
instanceType=$6
image=$7
group=$8
subnetId=$9
code=$10
monitor=$11


export AWS_ACCESS_KEY_ID="$access"
export AWS_SECRET_ACCESS_KEY="$secret"

ansible-playbook /root/transcend-api/ansible/create_key-pair.yml

ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml \
--private-key=/root/project.pem \
-e cicd=$cicd code=$code monitor=$monitor region=$region keypair=$keypair instance_type=$instanceType \
image=$image group=$group subnet_id=$subnetId

export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""