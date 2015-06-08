var Knwl = require('../knwl');
var knwl = new Knwl();


describe("dates", function () {
  it("should detect worded dates", function () {
    knwl.init(" the 28th of december.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(12);
  });

  it("should detect worded dates the whole date", function () {
    // This is respecting the american's strange date habit of
    // putting the month at the beggining.
    knwl.init(" the 28th of december.");
    var output = knwl.get("dates")[0];
    expect(output.month + "/" + output.day).toBe("12/28");
  });

  it("should detect worded jan", function () {
    knwl.init(" the 28th of jan.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(1);
  });

  it("should detect worded january", function () {
    knwl.init(" the 28th of january.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(1);
  });

  it("should detect worded feb", function () {
    knwl.init(" the 28th of feb.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(2);
  });

  it("should detect worded february", function () {
    knwl.init(" the 28th of february.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(2);
  });


  it("should detect worded march", function () {
    knwl.init(" the 28th of march.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(3);
  });


  it("should detect worded mar", function () {
    knwl.init(" the 28th of mar.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(3);
  });


  it("should detect worded april", function () {
    knwl.init(" the 28th of april.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(4);
  });


  it("should detect worded apr", function () {
    knwl.init(" the 28th of apr.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(4);
  });


  it("should detect worded may", function () {
    knwl.init(" the 28th of may.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(5);
  });


  it("should detect worded june", function () {
    knwl.init(" the 28th of june.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(6);
  });


  it("should detect worded jun", function () {
    knwl.init(" the 28th of jun.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(6);
  });


  it("should detect worded july", function () {
    knwl.init(" the 28th of july.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(7);
  });

  it("should detect worded jul", function () {
    knwl.init(" the 28th of jul.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(7);
  });

  it("should detect worded august", function () {
    knwl.init(" the 28th of august.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(8);
  });

  it("should detect worded aug", function () {
    knwl.init(" the 28th of aug.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(8);
  });

  it("should detect worded september", function () {
    knwl.init(" the 28th of september.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(9);
  });

  it("should detect worded sept", function () {
    knwl.init(" the 28th of sept.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(9);
  });

  it("should detect worded october", function () {
    knwl.init(" the 28th of october.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(10);
  });

  it("should detect worded oct", function () {
    knwl.init(" the 28th of oct.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(10);
  });

  it("should detect worded november", function () {
    knwl.init(" the 28th of november.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(11);
  });

  it("should detect worded nov", function () {
    knwl.init(" the 28th of nov.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(11);
  });

  it("should detect worded december", function () {
    knwl.init(" the 28th of december.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(12);
  });

  it("should detect worded dec", function () {
    knwl.init(" the 28th of dec.");
    var output = knwl.get("dates")[0];
    expect(output.month).toBe(12);
  });

  it("should detect dates formatted like 2013-12-15", function () {
    knwl.init("I will see you on 2013-12-15");
    var output = knwl.get("dates")[0];
    expect(output.month + "/" + output.day + "/" + output.year).toBe("12/15/2013");
  });

  it("should detect dates formatted like 2014-12-15", function () {
    knwl.init("I will see you on 2014-12-15");
    var output = knwl.get("dates")[0];
    expect(output.month + "/" + output.day + "/" + output.year).toBe("12/15/2014");
  });


});
