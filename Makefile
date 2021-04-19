install: # install dependencies
	npm install
brain-games: # start brain games
	node bin/brain-games.js
publish: # publish the package
	npm publish --dry-run
lint: # check code by ESLint
	npx eslint .
