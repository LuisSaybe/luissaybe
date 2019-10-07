#!/bin/bash

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build --rm -f docker/Dockerfile -t luissaybe/ttmik .
docker push luissaybe/ttmik:latest
docker logout
