DOCKER := docker
PWD ?= $(shell pwd)

default: run

run:
	@$(DOCKER) compose up
.PHONY: run

clean:
	@$(DOCKER_COMPOSE) compose down
.PHONY: clean

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
