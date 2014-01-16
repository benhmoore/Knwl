var fs = require('fs');
eval(fs.readFileSync('../knwl.js') + '');

var x = new Knwl();

describe("aliases", function() {
    it("should detect aliases formatted like 'I love @'", function() {
        x.init("I love @aliases");
        var output = x.get("aliases");
        expect(output[0][0]).toBe("@aliases");
    });

    it("should detect aliases formatted like 'I love @.'", function() {
        x.init("I love @aliases.");
        var output = x.get("aliases");
        expect(output[0][0]).toBe("@aliases");
    });

    it("should detect aliases formatted like 'I love @!'", function() {
        x.init("I love @aliases!");
        var output = x.get("aliases");
        expect(output[0][0]).toBe("@aliases");
    });

    it("should detect aliases formatted like 'Do I love @?'", function() {
        x.init("Do I love @aliases?");
        var output = x.get("aliases");
        expect(output[0][0]).toBe("@aliases");
    });

    it("should detect aliases formatted like '(@ )'", function() {
        x.init("(@aliases)");
        var output = x.get("aliases");
        expect(output[0][0]).toBe("@aliases");
    });

    it("shouldn't detect aliases formatted like '@. '", function() {
        x.init("@. swag");
        var output = x.get("aliases");
        expect(output.length).toBe(0);
    });
});