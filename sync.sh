#!/bin/bash

rsync -a --exclude=node_modules --delete ../kubernetes-node k8lab:/home/mp
