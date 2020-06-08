#---- COMMANDS ----#

up: ##@Docker (start) Start the webserver on http://localhost:8000
	docker-compose up

up-b: ##@Docker (start) Start the webserver on http://localhost:8000
	docker-compose up --build

up-d: ##@Docker (start) Start the webserver on http://localhost:8000, in the background
	docker-compose up -d

down:
	docker-compose down

makemigrations: ##@Docker Set up migration files
	docker-compose run backend python backend/EventPayment/manage.py makemigrations
	@echo "Migrations completed successfully"

# Run the makemigrations command on every app in the /apps folder
force-makemigrations: ##@Docker Forcibly perform makemigrations on the separate apps
	$(foreach app,$(filter-out __pycache__ common, $(APPDIR)),docker-compose run backend python backend/EventPayment/manage.py makemigrations ($(app) &))
	@echo "Migrations completed successfully"

migrate: ##@Docker Perform migrations to database
	docker-compose run backend python backend/EventPayment/manage.py migrate
	@echo "Migrate completed successfully"

load-data: ##@Docker Perform migrations to database
	docker-compose run backend python backend/EventPayment/manage.py loaddata backend/EventPayment/fixtures.json
	@echo "Data loaded successfully"

dev-clean-install: ##@TestEnv Delete the old database and re-apply testdata
	docker-compose down -v
	docker-compose build
	make force-makemigrations
	make migrate
	make load-data
	make up