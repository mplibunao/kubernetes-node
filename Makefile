.DEFAULT_GOAL := help

CYAN := \033[36m
NO_COLOR := \033[0m
SPACING := -20s

help:
	@echo
	@echo "Tips:"
	@echo "${CYAN}.e (exec) ${NO_COLOR}- allows you to run a one-off commands w/o turning off the server using docker-compose exec"
	@echo "${CYAN}./run.sh cmd <container-name> <commands> ${NO_COLOR} - Use when you need to run commands w/ multiple args or flags (uses docker-compose exec)"
	@echo "Makefile targets:"
	@grep -E '^[a-zA-Z_-].*?: .*?## .*$$' Makefile | sed 's#\\:#:#g' | awk 'BEGIN {FS = ": .*?## "}; {printf "${CYAN}  %${SPACING}${NO_COLOR} %s\n", $$1, $$2}'
	@echo


setup: ## Initial setup
	docker-compose run --rm web yarn
	docker-compose up
