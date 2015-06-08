var Knwl = require('./knwl');

if (typeof global.window.define == 'function' && global.window.define.amd) {
    global.window.define('Knwl', function () { return Knwl; });
} else {
    global.window.Knwl = Knwl;
}
