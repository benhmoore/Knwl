var Knwl = require('../knwl');
var knwl = new Knwl();
knwl.register('ratios', require('../experimental_plugins/ratios'));

// Test Ratio Detection
describe("ratio detection", function () {
    it("should detect percent", function () {
        knwl.init("We have a 89% chance of success.");
        var output = knwl.get("ratios");
        expect(output[0].value).toBe("89%");
    });
    it("should detect a fraction", function () {
        knwl.init("Thirty percent of us are 5/6 intelligent.");
        var output = knwl.get("ratios");
        expect(output[0].value).toBe("5/6");
    });
    it("should detect a fraction denoted with a colon", function () {
        knwl.init("Le professeur disait que on mange 3:4 de le fromage.");
        var output = knwl.get("ratios");
        expect(output[0].value).toBe("3:4");
    });
    it("should detect a percentile that is mutated into a German adjective", function () {
        knwl.init("Nationalismus ist ein 100%ig hirnrissiges Konzept.");
        var output = knwl.get("ratios");
        expect(output[0].value).toBe("100%");
    });
});
