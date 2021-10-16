#!/bin/bash

COMPOSE="/usr/local/bin/docker-compose --no-ansi"
DOCKER="/usr/bin/docker"
COMPOSE_FLAGS="-f docker-compose.production.yml"

cd /home/mp/kubernetes-node/
$COMPOSE run $COMPOSE_FLAGS certbot renew --dry-run && $COMPOSE $COMPOSE_FLAGS kill -s SIGHUP webserver
$DOCKER system prune -af
