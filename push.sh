#!/bin/bash

echo "building docker image"
DOCKER_BUILDKIT=1 docker build -t mplibunao/kubernetes-node .

echo "pushing image to dockerhub"
docker push mplibunao/kubernetes-node
