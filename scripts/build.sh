mkdir ./dist
./node_modules/.bin/browserify browser.js > ./dist/knwl.js
./node_modules/.bin/uglifyjs ./dist/knwl.js > ./dist/knwl.min.js
