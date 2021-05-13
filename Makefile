DOCKER := docker
DOCKER_COMPOSE := docker-compose
PWD ?= $(shell pwd)

default: run

build:
	@$(DOCKER_COMPOSE) build
.PHONY: build

run: build
	@$(DOCKER_COMPOSE) up
.PHONY: run

clean:
	@$(DOCKER_COMPOSE) down
.PHONY: clean

lock:
	@$(DOCKER) run --rm -v $(PWD):/usr/src/app -w /usr/src/app ruby:2.5 bundle install
.PHONY: lock
