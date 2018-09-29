#!/bin/bash

access=$1
secret=$2
cicd=$3
code=$4
monitor=$5
region=$6
keypair=$7
instanceType=$8
image=$9
group=${10}
subnetId=${11}

echo $cicd
echo $code
echo $monitor

export AWS_ACCESS_KEY_ID="$access"
export AWS_SECRET_ACCESS_KEY="$secret"

#ansible-playbook /root/transcend-api/ansible/create_key-pair.yml
#ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/root/project.pem -e "cicd=$cicd code=$code monitor=$monitor region=$region keypair=$keypair instance_type=$instanceType image=$image group=$group subnet_id=$subnetId"

if [ $cicd == "jenkins" ]
than
ansible-playbook /root/transcend-api/ansible/create_key-pair.yml
ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/root/project.pem -e "cicd=$cicd region=$region keypair=$keypair instance_type=$instanceType image=$image group=$group subnet_id=$subnetId"
fi

if [ $code == "gitlab" ]
than
ansible-playbook /root/transcend-api/ansible/create_key-pair.yml
ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/root/project.pem -e "code=$code region=$region keypair=$keypair instance_type=$instanceType image=$image group=$group subnet_id=$subnetId"
fi

if [ $code == "gitlab" ]
than
ansible-playbook /root/transcend-api/ansible/create_key-pair.yml
ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/root/project.pem -e "monitor=$monitor region=$region keypair=$keypair instance_type=$instanceType image=$image group=$group subnet_id=$subnetId"
fi

export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""