install:
	npm install

check: type-check lint test

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage

build:
	npx tsc

type-check:
	npx tsc --noEmit
