var fs = require('fs');
eval(fs.readFileSync('../knwl.js') + '');

var x = new Knwl();

describe("hashtags", function() {
    it("should detect hashtags formatted like 'I love #'", function() {
        x.init("I love #hashtags");
        var output = x.get("hashtags");
        expect(output[0][0]).toBe("#hashtags");
    });

    it("should detect hashtags formatted like 'I love #.'", function() {
        x.init("I love #hashtags.");
        var output = x.get("hashtags");
        expect(output[0][0]).toBe("#hashtags");
    });

    it("should detect hashtags formatted like 'I love #!'", function() {
        x.init("I love #hashtags!");
        var output = x.get("hashtags");
        expect(output[0][0]).toBe("#hashtags");
    });

    it("should detect hashtags formatted like 'Do I love #?'", function() {
        x.init("Do I love #hashtags?");
        var output = x.get("hashtags");
        expect(output[0][0]).toBe("#hashtags");
    });

    it("should detect hashtags formatted like '(# )'", function() {
        x.init("(#hashtags)");
        var output = x.get("hashtags");
        expect(output[0][0]).toBe("#hashtags");
    });

    it("shouldn't detect hashtags formatted like '#. '", function() {
        x.init("#. swag");
        var output = x.get("hashtags");
        expect(output.length).toBe(0);
    });
});