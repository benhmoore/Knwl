var fs = require('fs');
eval(fs.readFileSync('../knwl.js')+'');

var x = new Knwl();

describe("dates", function () {
  it("should detect worded dates", function () {
    x.init(" the 28th of december.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(12);
  });

  it("should detect worded dates the whole date", function () {
    // This is respecting the american's strange date habit of
    // putting the month at the beggining.
    x.init(" the 28th of december.");
    var output = x.get("dates")[0]
    expect(output[0] + "/" +output[1]).toBe("12/28");
  });

  it("should detect worded jan", function () {
    x.init(" the 28th of jan.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(1);
  });

  it("should detect worded january", function () {
    x.init(" the 28th of jan.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(1);
  });

  it("should detect worded feb", function () {
    x.init(" the 28th of feb.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(2);
  });

  it("should detect worded february", function () {
    x.init(" the 28th of february.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(2);
  });

  
  it("should detect worded march", function () {
    x.init(" the 28th of march.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(3);
  });

  
  it("should detect worded mar", function () {
    x.init(" the 28th of mar.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(3);
  });

  
  it("should detect worded april", function () {
    x.init(" the 28th of april.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(4);
  });

  
  it("should detect worded apr", function () {
    x.init(" the 28th of apr.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(4);
  });

  
  it("should detect worded may", function () {
    x.init(" the 28th of may.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(5);
  });


  it("should detect worded june", function () {
    x.init(" the 28th of june.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(6);
  });

  
  it("should detect worded july", function () {
    x.init(" the 28th of july.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(7);
  });

  
  it("should detect worded august", function () {
    x.init(" the 28th of august.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(8);
  });

  it("should detect worded aug", function () {
    x.init(" the 28th of aug.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(8);
  });
  
  it("should detect worded september", function () {
    x.init(" the 28th of september.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(9);
  });

  it("should detect worded sept", function () {
    x.init(" the 28th of sept.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(9);
  });

  it("should detect worded october", function () {
    x.init(" the 28th of october.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(10);
  });

  it("should detect worded oct", function () {
    x.init(" the 28th of oct.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(10);
  });

  it("should detect worded november", function () {
    x.init(" the 28th of november.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(11);
  });

  it("should detect worded nov", function () {
    x.init(" the 28th of nov.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(11);
  });

  it("should detect worded december", function () {
    x.init(" the 28th of december.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(12);
  });

  it("should detect worded dec", function () {
    x.init(" the 28th of dec.");
    var output = x.get("dates")[0]
    expect(output[0]).toBe(12);
  });

  it("should detect dates formatted like 2013-12-15", function () {
    x.init("I will see you on 2013-12-15");
    var output = x.get("dates")[0]
    expect(output[0] + "/" + output[1] + "/" + output[2]).toBe("12/15/2013");
  });

  it("should detect dates formatted like 2014-12-15", function () {
    x.init("I will see you on 2014-12-15");
    var output = x.get("dates")[0]
    expect(output[0] + "/" + output[1] + "/" + output[2]).toBe("12/15/2014");
  });


});
