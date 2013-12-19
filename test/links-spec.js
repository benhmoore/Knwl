var fs = require('fs');
eval(fs.readFileSync('../knwl.js')+'');

var x = new Knwl();

describe("email", function () {
  it("should detect normal links", function () {
    x.init("Follow me on twitter at http://twitter.com/twitter");
    var output = x.get("links")
    expect(output[0][0]).toBe("http://twitter.com/twitter");
  });

  it("should detect normal links with URL encoded stuff", function () {
    x.init("Follow me on twitter at http://twitter.com/%20twitter");
    var output = x.get("links")
    expect(output[0][0]).toBe("http://twitter.com/%20twitter");
  });

  it("should detect normal links that are not .com", function () {
    x.init("Follow me on twitter at http://twitter.co.uk/twitter");
    var output = x.get("links")
    expect(output[0][0]).toBe("http://twitter.co.uk/twitter");
  });

  it("should detect HTTPS links", function () {
    x.init("Follow me on twitter at https://twitter.com/twitter");
    var output = x.get("links")
    expect(output[0][0]).toBe("https://twitter.com/twitter");
  });

  it("should detect ftp links", function () {
    x.init("Follow me on twitter at ftp://ftp.debian.org/debian/");
    var output = x.get("links")
    expect(output[0][0]).toBe("ftp://ftp.debian.org/debian/");
  });

  it("should detect ftp links with creds in", function () {
    x.init("Follow me on twitter at ftp://test:test@ftp.debian.org/debian/");
    var output = x.get("links")
    expect(output[0][0]).toBe("ftp://test:test@ftp.debian.org/debian/");
  });

  it("should not detect very strange URI's", function () {
    x.init("Take a look at this link goqsdttg://www.facebook.com");
    var output = x.get("links")
    expect(output.length).toBe(0);
  });

});