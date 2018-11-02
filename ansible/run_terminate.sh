#!/bin/bash

instanceId=$1

ansible-playbook /root/transcend-api/ansible/terminate.yml -e "instanceId=$instanceId"