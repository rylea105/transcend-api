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

echo $access
echo $secret

export AWS_ACCESS_KEY_ID="$access"
export AWS_SECRET_ACCESS_KEY="$secret"

#ansible-playbook /root/transcend-api/ansible/create_key-pair.yml
#ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/root/project.pem -e "cicd=$cicd code=$code monitor=$monitor region=$region keypair=$keypair instance_type=$instanceType image=$image group=$group subnet_id=$subnetId"

# if [ $software == "jenkins" ]
# then
# ansible-playbook /root/transcend-api/ansible/create_key-pair.yml
# ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/root/project.pem -e "cicd=$cicd region=$region keypair=$keypair instance_type=$instanceType image=$image group=$group subnet_id=$subnetId"
# fi

# if [ $software == "gitlab" ]
# then
# ansible-playbook /root/transcend-api/ansible/create_key-pair.yml
# ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/root/project.pem -e "code=$code region=$region keypair=$keypair instance_type=$instanceType image=$image group=$group subnet_id=$subnetId"
# fi

# if [ $software == "zabbix" ]
# then
# ansible-playbook /root/transcend-api/ansible/create_key-pair.yml
# ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/root/project.pem -e "monitor=$monitor region=$region keypair=$keypair instance_type=$instanceType image=$image group=$group subnet_id=$subnetId"
# fi

echo $software

ansible-playbook /root/transcend-api/ansible/create_key-pair.yml
ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/root/project.pem -e "software=$software region=$region keypair=$keypair instance_type=$instanceType image=$image group=$group subnet_id=$subnetId"

export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""

echo $access
echo $secret