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

infra-init:
	@$(DOCKER) run --rm -it \
		-v $(PWD)/terraform:/home/terraform \
		-w /home/terraform \
		-v $(GOOGLE_APPLICATION_CREDENTIALS):/home/sa.json \
		-e GOOGLE_APPLICATION_CREDENTIALS=/home/sa.json \
		hashicorp/terraform:light \
		init
.PHONY: infra-init

infra-plan:
	@$(DOCKER) run --rm -it \
		-v $(PWD)/terraform:/home/terraform \
		-w /home/terraform \
		-v $(GOOGLE_APPLICATION_CREDENTIALS):/home/sa.json \
		-e GOOGLE_APPLICATION_CREDENTIALS=/home/sa.json \
		hashicorp/terraform:light \
		plan"
.PHONY: infra-plan

infra-apply:
	@$(DOCKER) run --rm -it \
		-v $(PWD)/terraform:/home/terraform \
		-w /home/terraform \
		-v $(GOOGLE_APPLICATION_CREDENTIALS):/home/sa.json \
		-e GOOGLE_APPLICATION_CREDENTIALS=/home/sa.json \
		hashicorp/terraform:light \
		apply"
.PHONY: infra-apply

infra-destroy:
	@$(DOCKER) run --rm -it \
		-v $(PWD)/terraform:/home/terraform \
		-w /home/terraform \
		-v $(GOOGLE_APPLICATION_CREDENTIALS):/home/sa.json \
		-e GOOGLE_APPLICATION_CREDENTIALS=/home/sa.json \
		hashicorp/terraform:light \
		destroy
.PHONY: infra-destroy
