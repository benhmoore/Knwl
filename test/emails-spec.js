var fs = require('fs');
eval(fs.readFileSync('../knwl.js')+'');

var x = new Knwl();

describe("email", function () {
  it("should detect standard emails", function () {
    x.init("You can reach me on test@test.com");
    var output = x.get("emails")
    expect(output[0][0]).toBe("test@test.com");
  });

  it("should detect standard emails with out .com", function () {
    x.init("You can reach me on test@test.co.uk");
    var output = x.get("emails")
    expect(output[0][0]).toBe("test@test.co.uk");
  });

  it("should detect emails with dots in them", function () {
    x.init("You can reach me on test.test@test.co.uk");
    var output = x.get("emails")
    expect(output[0][0]).toBe("test.test@test.co.uk");
  });

  it("should detect emails with plus in them", function () {
    x.init("You can reach me on test+test@test.co.uk");
    var output = x.get("emails")
    expect(output[0][0]).toBe("test+test@test.co.uk");
  });

  it("should not detect emails with IP's as host names", function () {
    x.init("You can reach me on test@192.168.0.1");
    var output = x.get("emails")
    expect(output.length).toBe(0);
  });

  it("should detect more than one email", function () {
    x.init("You can reach me on test@test.com or test@tost.com");
    var output = x.get("emails")
    expect(output.length).toBe(2);
  });

  it("should detect emails with a subdomain in them", function () {
    x.init("You can reach me on email@subdomain.example.com");
    var output = x.get("emails")
    expect(output[0][0]).toBe("email@subdomain.example.com");
  });

  it("should detect emails with a numbers in them", function () {
    x.init("You can reach me on 1234567890@example.com");
    var output = x.get("emails")
    expect(output[0][0]).toBe("1234567890@example.com");
  });

  it("should detect emails with a dash in them", function () {
    x.init("You can reach me on email@example-one.com");
    var output = x.get("emails")
    expect(output[0][0]).toBe("email@example-one.com");
  });

  it("should not detect emails that don't have a user in them", function () {
    x.init("You can reach me on @test.com");
    var output = x.get("emails")
    expect(output.length).toBe(0);
  });

  it("should not detect emails that don't anything in them at all", function () {
    x.init("You can reach me on @");
    var output = x.get("emails")
    expect(output.length).toBe(0);
  });

  it("should not detect emails that have unicode in them", function () {
    x.init("You can reach me on あいうえお@example.com");
    var output = x.get("emails")
    expect(output.length).toBe(0);
  });

  it("should not detect emails that have no tld in them", function () {
    x.init("You can reach me on what@example");
    var output = x.get("emails")
    expect(output.length).toBe(0);
  });

  it("should not detect emails that start with a dot", function () {
    x.init("You can reach me on .email@example.com");
    var output = x.get("emails")
    expect(output.length).toBe(0);
  });

});