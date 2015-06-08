var Knwl = require('../knwl');
var knwl = new Knwl();

// Test Phone Number Detection
describe("phone number detection", function () {
    it("should NOT accept phones without area code", function () {
        knwl.init("My phone number is 555-5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(0);
    });

    it("should NOT accept phones numbers with 8 digits", function () {
        knwl.init("My phone number is 5-5555555");
        var output = knwl.get("phones");
        expect(output.length).toBe(0);
    });

    it("should accept area code + phone numbers seperated no space", function () {
        knwl.init("My phone number is 5555555555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should accept area code + phone numbers seperated by hyphen", function () {
        knwl.init("My phone number is 555-555-5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should accept area code + phone numbers seperated by space", function () {
        knwl.init("My phone number is 555 555-5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should NOT accept area code + phone numbers seperated completely by space", function () {
        knwl.init("My phone number is 555 555 5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(0);
    });

    it("should accept area code wrapped in () + phone numbers seperated by space", function () {
        knwl.init("My phone number is (555) 555-5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should accept area code wrapped in () + phone numbers no space", function () {
        knwl.init("My phone number is (555)555-5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should accept area code wrapped in () + phone numbers seperated by hyphen", function () {
        knwl.init("My phone number is (555)-555-5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should accept area code + phone numbers seperated by space with no hyphens", function () {
        knwl.init("My phone number is 555 5555555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should accept area code wrapped in () + phone numbers seperated by space with no hyphens", function () {
        knwl.init("My phone number is (555) 5555555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should accept country code + area code + phone numbers seperated by hyphen", function () {
        knwl.init("My phone number is 5-555-555-5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should accept country code + area code + phone numbers seperated by space", function () {
        knwl.init("My phone number is 5 555 555-5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should accept country code + (area code) + phone numbers seperated by space", function () {
        knwl.init("My phone number is 5 (555) 555-5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should accept (country code) + (area code) + phone numbers no space", function () {
        knwl.init("My phone number is (5)(555)555-5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

    it("should accept +country code + (area code) + phone numbers seperated by space", function () {
        knwl.init("My phone number is +5 (555) 555-5555");
        var output = knwl.get("phones");
        expect(output.length).toBe(1);
    });

});

// Test the Phone Number Formatting
describe("phone number formatting", function() {
    it("should turn ########## into (###) ###-####", function() {
        knwl.init("My phone number is 5555555555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("(555) 555-5555");
    });

    it("should turn ###-###-#### into (###) ###-####", function () {
        knwl.init("My phone number is 555-555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("(555) 555-5555");
    });

    it("should turn ### ###-#### into (###) ###-####", function () {
        knwl.init("My phone number is 555 555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("(555) 555-5555");
    });

    it("should turn (###) ###-#### into (###) ###-####", function () {
        knwl.init("My phone number is (555) 555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("(555) 555-5555");
    });

    it("should turn (###)###-#### into (###) ###-####", function () {
        knwl.init("My phone number is (555)555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("(555) 555-5555");
    });

    it("should turn (###)-###-#### into (###) ###-####", function () {
        knwl.init("My phone number is (555)-555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("(555) 555-5555");
    });

    it("should turn ### ####### into (###) ###-####", function () {
        knwl.init("My phone number is 555 5555555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("(555) 555-5555");
    });

    it("should turn #-###-###-#### into +# (###) ###-####", function () {
        knwl.init("My phone number is 5-555-555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("+5 (555) 555-5555");
    });

    it("should turn # ### ###-#### into +# (###) ###-####", function () {
        knwl.init("My phone number is 5 555 555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("+5 (555) 555-5555");
    });

    it("should turn # (###) ###-#### into +# (###) ###-####", function () {
        knwl.init("My phone number is 5 (555) 555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("+5 (555) 555-5555");
    });

    it("should NOT recnognize country code wrapped in brackets", function () {
        knwl.init("My phone number is (5) 555-555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("(555) 555-5555");
    });

    it("should turn +# (###) ###-#### into +# (###) ###-####", function () {
        knwl.init("My phone number is +5 (555) 555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("+5 (555) 555-5555");
    });

    it("should turn ##-###-###-#### into +## (###) ###-####", function () {
        knwl.init("My phone number is 55-555-555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("+55 (555) 555-5555");
    });

    it("should turn ###-###-###-#### into +### (###) ###-####", function () {
        knwl.init("My phone number is 555-555-555-5555");
        var output = knwl.get("phones");
        expect(output[0].phone).toBe("+555 (555) 555-5555");
    });
});
