<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## Description

This is a project developed on course [Nest](https://github.com/nestjs/nest): Desarrollo backend escalable con Node by `Fernado Herrera`

## Installation

```bash
# clone the repository
$ git clone https://github.com/AlexMarquesAlves/03-nest-pokedex.git
# open cloned project dir
$ cd 03-nest-pokedex
# install dependencies
$ yarn install
```

## Setting up database

```bash
# upload database
$ docker-compose up -d
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```



## Used Stack

* [MongoDB](https://www.mongodb.com/)
* [Nest](https://github.com/nestjs/nest)

## License

Nest Pokedex is [MIT licensed](LICENSE).
