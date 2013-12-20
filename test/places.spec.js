var fs = require('fs');
eval(fs.readFileSync('../knwl.js')+'');

var x = new Knwl();

describe("places", function () {
  it("should detect places formatted like 'See you in .'", function () {
    x.init("I will see you in Tesco");
    var output = x.get("places")
    expect(output[0][0]).toBe("Tesco");
  });

  it("should detect places formatted like 'See you in .' with a full stop", function () {
    x.init("I will see you in Tesco.");
    var output = x.get("places")
    expect(output[0][0]).toBe("Tesco");
  });

  it("should detect places formatted like 'at .' ", function () {
    x.init("They live at Los Angeles");
    var output = x.get("places")
    expect(output[0][0]).toBe("Los Angeles");
  });

  it("should detect places formatted like 'at .' with a full stop", function () {
    x.init("They live at Los Angeles.");
    var output = x.get("places")
    expect(output[0][0]).toBe("Los Angeles");
  });

  it("should detect places formatted like 'near .'", function () {
    x.init("They live near Tesco");
    var output = x.get("places")
    expect(output[0][0]).toBe("Tesco");
  });

  it("should detect places formatted like 'near .' with a full stop", function () {
    x.init("They live near Tesco.");
    var output = x.get("places")
    expect(output[0][0]).toBe("Tesco");
  });

});