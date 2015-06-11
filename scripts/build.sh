mkdir ./dist
./node_modules/.bin/browserify ./knwl.js --standalone Knwl > ./dist/knwl.js
./node_modules/.bin/uglifyjs ./dist/knwl.js > ./dist/knwl.min.js
