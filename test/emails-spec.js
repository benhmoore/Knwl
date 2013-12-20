var fs = require('fs');
eval(fs.readFileSync('../knwl.js') + '');

var x = new Knwl();
var ValidEmails = [
    "test@test.com",
    "test@test.co.uk",
    "test.test@test.com",
    "test+test@test.com",
    "sir.Test+testing@test.com",
    "test@testdeparetment.testcorp.com",
    "12341234@123.com",
    "123123123@test.com",
    "test@10.0.0.1",
    "test-man@test.com",
    "test@test-corp.com"
];

describe("email", function() {
    for (var i = ValidEmails.length - 1; i >= 0; i--) {
      var ve = ValidEmails[i];
      it("should detect the valid email of " + ve, function() {
          x.init("You can reach me on " + ve);
          var output = x.get("emails")
          expect(output[0][0]).toBe(ve);
      });
    };

    it("should detect more than one email", function() {
        x.init("You can reach me on test@test.com or test@tost.com");
        var output = x.get("emails")
        expect(output.length).toBe(2);
    });

    it("should not detect emails that don't have a user in them", function() {
        x.init("You can reach me on @test.com");
        var output = x.get("emails")
        expect(output.length).toBe(0);
    });

    it("should not detect emails that don't anything in them at all", function() {
        x.init("You can reach me on @");
        var output = x.get("emails")
        expect(output.length).toBe(0);
    });

    it("should not detect emails that have unicode in them", function() {
        x.init("You can reach me on あいうえお@example.com");
        var output = x.get("emails")
        expect(output.length).toBe(0);
    });

    it("should not detect emails that have no tld in them", function() {
        x.init("You can reach me on what@example");
        var output = x.get("emails")
        expect(output.length).toBe(0);
    });

    it("should not detect emails that start with a dot", function() {
        x.init("You can reach me on .email@example.com");
        var output = x.get("emails")
        expect(output.length).toBe(0);
    });

    it("should detect if there are two emails seperated by commas", function() {
        x.init("-David (david32@gmail.com),Wilson(example@gmail.com)");
        var output = x.get("emails")
        expect(output.length).toBe(2);
    });

});