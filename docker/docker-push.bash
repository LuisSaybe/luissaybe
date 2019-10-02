#!/bin/bash

if [ $TRAVIS_BRANCH == "master" ]
then
  envsubst < server/settings-production.js >  server/settings.js
  envsubst < web/settings-production.js >  web/settings.js
fi

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t luissaybe/ttmik .
docker push luissaybe/ttmik:latest
docker logout
