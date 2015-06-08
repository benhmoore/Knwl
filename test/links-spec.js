var Knwl = require('../knwl');
var knwl = new Knwl();

//Test Link Detection
describe("link", function () {
  it("should detect normal links", function () {
    knwl.init("Follow me on twitter at http://twitter.com/twitter");
    var output = knwl.get("links");
    expect(output[0].link).toBe("http://twitter.com/twitter");
  });

  it("should detect normal links with URL encoded stuff", function () {
    knwl.init("Follow me on twitter at http://twitter.com/%20twitter");
    var output = knwl.get("links");
    expect(output[0].link).toBe("http://twitter.com/%20twitter");
  });

  it("should detect normal links that are not .com", function () {
    knwl.init("Follow me on twitter at http://twitter.co.uk/twitter");
    var output = knwl.get("links");
    expect(output[0].link).toBe("http://twitter.co.uk/twitter");
  });

  it("should detect normal links with a port, a get-value and a hash", function () {
    knwl.init("Check this out! http://coolevent.com:80/test?a=b#url");
    var output = knwl.get("links");
    expect(output[0].link).toBe("http://coolevent.com:80/test?a=b#url");
  });

  it("should detect HTTPS links", function () {
    knwl.init("Follow me on twitter at https://twitter.com/twitter");
    var output = knwl.get("links");
    expect(output[0].link).toBe("https://twitter.com/twitter");
  });

  it("should detect ftp links", function () {
    knwl.init("Follow me on twitter at ftp://ftp.debian.org/debian/");
    var output = knwl.get("links");
    expect(output[0].link).toBe("ftp://ftp.debian.org/debian/");
  });

  it("should detect ftp links with creds in", function () {
    knwl.init("Follow me on twitter at ftp://test:test@ftp.debian.org/debian/");
    var output = knwl.get("links");
    expect(output[0].link).toBe("ftp://test:test@ftp.debian.org/debian/");
  });

  it("should not detect very strange URI's", function () {
    knwl.init("Take a look at this link goqsdttg://www.facebook.com");
    var output = knwl.get("links");
    expect(output.length).toBe(0);
  });

});
