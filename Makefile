#---- COMMANDS ----#

s: ##@Docker (start) Start the webserver on http://localhost:8000
	docker-compose up

start: ##@Docker (start) Start the webserver on http://localhost:8000
	docker-compose up --build

start-d: ##@Docker (start) Start the webserver on http://localhost:8000, in the background
	docker-compose up -d

down:
	docker-compose down