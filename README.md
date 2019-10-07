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

### install SSL certs

https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-centos-7
