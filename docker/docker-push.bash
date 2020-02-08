#!/bin/bash

if [ $TRAVIS_BRANCH == "master" ]
then
    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
    docker build --rm -f docker/Dockerfile -t luissaybe/luissaybe .
    docker push luissaybe/luissaybe:latest
    docker logout
fi
