var Knwl = require('../knwl');
var knwl = new Knwl();
knwl.register('money', require('../experimental_plugins/money'));

// Test money detection
describe("money detection", function () {
    it ("should detect euros in verbal expression", function () {
        knwl.init("You owe me 300 Euros");
        var output = knwl.get("money");
        expect(output[0].value).toBe("EUR 300");
    });
    it ("Should detect dollar in iso notation", function () {
        knwl.init("HEY HOW ARE YOUR USD 199,79");
        var output = knwl.get("money");
        expect(output[0].value).toBe("USD 199,79");
    });
});
