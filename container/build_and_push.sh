#!/usr/bin/env bash

# This script shows how to build the Docker image and push it to ECR to be ready for use
# by SageMaker.

chmod +x decision_trees/train
chmod +x decision_trees/serve

aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 197459982091.dkr.ecr.ap-southeast-1.amazonaws.com

docker build -t testmodel .

docker tag testmodel:latest 197459982091.dkr.ecr.ap-southeast-1.amazonaws.com/testmodel:latest

docker push 197459982091.dkr.ecr.ap-southeast-1.amazonaws.com/testmodel:latest
