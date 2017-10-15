# The Internship Manager

## Requirements

1. Docker and Docker-compose
  1. For docker installation use [official guide](https://docker.github.io/engine/installation/)  
  2. For docker-compose installation use [official guide](https://docs.docker.com/compose/install/)  

2. Overriding templates
  1. Copy files `.env.node.example` to `.env.node` and `.env.mongodb.example` to `.env.mongodb` and change it if need
  2. Copy docker-compose.development.yml and rename it to docker-compose.override.yml. It's need to use ports for docker containers.  

## Startup application

For first start you should build containers:

```bash
  docker-compose build
```

For startup the application use command:

```bash
  docker-compose up -d
```

For stop the application use command:

```bash
  docker-compose stop
```