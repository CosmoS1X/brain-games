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

run:
	node dist/bin/brain-games.js

publish:
	npm publish --dry-run
