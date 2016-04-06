var Knwl = require('../knwl');
var germanKnwl = new Knwl('DE');
germanKnwl.register('internationalPhones', require('../experimental_plugins/internationalPhones.js'))

// Test international Phone Number Detection
describe("Country phone number detection", function () {

    it("should detect a german mobile number ", function () {
        germanKnwl.init("My phone number is +49 160 1234 524");
        var output = germanKnwl.get("internationalPhones");
        expect(output.length).toBe(1);
    });

    it("should detect a number that is from Ghana", function () {
        germanKnwl.init("My phone number is +233302665095");
        var output = germanKnwl.get("internationalPhones");
        expect(output.length).toBe(1);
    });

    it("should detect multilpe different numbers", function () {
        germanKnwl.init("My phone number is +233302665095. His number is +49 160 1234 524");
        var output = germanKnwl.get("internationalPhones");
        expect(output.length).toBe(2);
    });

    it("should detect phone numbers from USA", function () {
        germanKnwl.init("The phone number of my friend from the USA is is +1-541-754-3010 ");
        var output = germanKnwl.get("internationalPhones");
        expect(output.length).toBe(1);
    });

    it("should detect a german mobile number ", function () {
        germanKnwl.init("My phone number is 0160 1234 524");
        var output = germanKnwl.get("internationalPhones");
        expect(output.length).toBe(1);
    });

var usKnwl = new Knwl('US');
usKnwl.register('internationalPhones', require('../experimental_plugins/internationalPhones.js'))

    it("should detect a us mobile number ", function () {
        usKnwl.init("My phone number is (541) 754-3010  ");
        var output = usKnwl.get("internationalPhones");
        expect(output.length).toBe(1);
    });
});
