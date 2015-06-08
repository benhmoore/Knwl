var Knwl = require('../knwl');
var knwl = new Knwl();

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

var InvalidEmails = [
    ".@test.com",
    "@",
    "what",
    "",
    "@test.com",
    "test@test",
    "あいうえお@example.com"
];

describe("email", function() {
    for (var i = ValidEmails.length - 1; i >= 0; i--) {
        var ve = ValidEmails[i];
        it("should detect the valid email of " + ve, function() {
            knwl.init("You can reach me on " + ve);
            var output = knwl.get("emails");
            expect(output[0].address).toBe(ve);
        });
    };

    for (var i = ValidEmails.length - 1; i >= 0; i--) {
        var ve = ValidEmails[i];

        var testEmail = function(email){
            it("should detect the valid email of " + email + " that ends in a full stop", function() {
                knwl.init("You can reach me on " + email + ".");
                var output = knwl.get("emails");
                expect(output[0].address).toBe(email);
            });
        };
        testEmail(ve);
    };

    for (var i = InvalidEmails.length - 1; i >= 0; i--) {
        var ie = InvalidEmails[i];
        it("should not detect the email of " + ie, function() {
            knwl.init("You can reach me on " + ie);
            var output = knwl.get("emails")
            expect(output.length).toBe(0);
        });
    };

    var mailchain = ""
    for (var i = ValidEmails.length - 1; i >= 0; i--) {
        mailchain = mailchain + " " + ValidEmails[i];
    };

    it("Testing all valid emails in one string", function() {
        knwl.init("You can reach me on " + mailchain);
        var output = knwl.get("emails")
        expect(output.length).toBe(ValidEmails.length);
    });

    it("Testing all valid emails in one string comma seperated", function() {
        knwl.init("You can reach me on " + ValidEmails.join());
        var output = knwl.get("emails")
        expect(output.length).toBe(ValidEmails.length);
    });

    it("should detect if there are two emails seperated by commas", function() {
        knwl.init("-David (david32@gmail.com),Wilson(example@gmail.com)");
        var output = knwl.get("emails")
        expect(output.length).toBe(2);
    });

});
