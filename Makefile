.PHONY: start-local
start-local:
	npm run build && npm run start

.PHONY: start-docker-compose-local
start-docker-compose-local:
	docker-compose up --build -d
