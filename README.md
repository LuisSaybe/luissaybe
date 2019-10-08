### build image

```sh
npm -g install yarn
yarn
docker build --rm -f docker/Dockerfile -t luissaybe/ttmik .
```

### watch for changes

```sh
yarn watch
```

### clean and run project

```sh
docker-compose down
docker-compose rm
docker-compose up
```

### run in prod

```sh
docker run -dit --name ttmik --rm -p 80:80 -p 443:443 luissaybe/ttmik nginx -c /root/project/docker/nginx.conf
```

### get SSL certs

[tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-certbot-standalone-mode-to-retrieve-let-s-encrypt-ssl-certificates-on-ubuntu-1804)
