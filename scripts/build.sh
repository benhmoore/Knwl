./node_modules/.bin/browserify knwl.js -o ./dist/knwl.js
./node_modules/.bin/uglifyjs -o ./dist/knwl.min.js ./dist/knwl.js
