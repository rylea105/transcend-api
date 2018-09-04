#!/bin/bash

access=$1
secret=$2

export AWS_ACCESS_KEY_ID="$access"
export AWS_SECRET_ACCESS_KEY="$secret"

#sudo ssh-keygen -t rsa -f /root/ec2-keys/webServer_rsa -q -P "webServer"
#sudo openssl rsa -in /root/ec2-keys/webServer_rsa -outform pem > /root/ec2-keys/webServer_rsa.pem
#sudo chmod 755 /root/ec2-keys/webServer_rsa.pem

#ansible-playbook /root/transcend-api/ansible/ec2_register_key.yml

ansible-playbook /root/transcend-api/ansible/initial_fullstack.yml --private-key=/etc/ssh/ssh_host_rsa_key

export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
