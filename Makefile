.PHONY: test build setup

build:
	uglifyjs -o ./knwl.min.js ./knwl.js

test:
	cd test; jasmine-node --verbose .

setup:
	npm install -g jasmine-node
	npm install -g uglify-js
