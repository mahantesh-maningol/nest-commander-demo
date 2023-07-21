## Description

This is a demo repo which helps to implement nest-commander with existing nestjs application. It had cronjob yml file which is used to execute command through kubernetes cronjob.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod

# command
$ yarn cron:cronjob
```

## Kubernetes commands

```bash
# deploy cronjob file
$ kubectl apply -f cronjob.yml

# check pod status
$ kubectl get pods --watch
```
