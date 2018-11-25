#!/bin/bash

access=$1
secret=$2
region=$3
keypair=$4
instanceType=$5
image=$6
group=$7
subnetId=$8
software=$9
count=${10}

echo $access
echo $secret
echo $region
echo $keypair
echo $instanceType
echo $image
echo $group
echo $subnetId
echo $software
echo $count


export AWS_ACCESS_KEY_ID=$access
export AWS_SECRET_ACCESS_KEY=$secret

ansible-playbook /root/transcend-api/ansible/create_key-pair.yml --extra-vars "keypair=$keypair"

ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/root/project.pem --extra-key "software=$software region=$region keypair=$keypair instance_type=$instanceType image=$image group=$group subnet_id=$subnetId count=$count"

export AWS_ACCESS_KEY_ID="access"
export AWS_SECRET_ACCESS_KEY="secret"