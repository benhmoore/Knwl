var Knwl = require('../knwl');
var knwl = new Knwl();


describe("times", function () {
  it("should detect hour", function () {
    knwl.init(" 12:54 AM, ");
    var output = knwl.get("times")[0];
    expect(output.hour).toBe("12");
  });

  it("should detect minute", function () {
    knwl.init(" 12:54 AM, ");
    var output = knwl.get("times")[0];
    expect(output.minute).toBe("54");
  });

  it("should detect AM period", function () {
    knwl.init(" 12:54 AM, ");
    var output = knwl.get("times")[0];
    expect(output.daynight).toBe("AM");
  });

  it("should detect PM period", function () {
    knwl.init(" 12:54 pm, ");
    var output = knwl.get("times")[0];
    expect(output.daynight).toBe("PM");
  });

  it("should detect hour without minute", function () {
    knwl.init(" 12am, ");
    var output = knwl.get("times")[0];
    expect(output.hour).toBe(12);
  });

  it("should detect hour with more times", function () {
    knwl.init(" 12:35 AM and 11:54 pm ");
    var outputs = knwl.get("times");
    expect(outputs[0].hour).toBe("12");
    expect(outputs[1].hour).toBe("11");
  });

});
