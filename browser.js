var knwl = require('./knwl');

if (typeof global.window.define == 'function' && global.window.define.amd) {
    global.window.define('knwl', function () { return knwl; });
} else {
    global.window.knwl = knwl;
}
