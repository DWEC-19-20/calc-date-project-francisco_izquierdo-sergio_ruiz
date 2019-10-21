var assert = chai.assert,
    expect = chai.expect;

suite("Testing calcDate", function() {
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 13),14)).to.equal("31/10/2019");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 13),1000)).to.equal("11/8/2023");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 13),0)).to.equal("13/10/2019");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 31),-14)).to.equal("11/10/2019");
    });  
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 31),-1000)).to.equal("31/12/2015");
    }); 
});

suite("Testing getDays", function() {
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 9, 13),new Date(2019, 10, 31))).to.equal(14);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 9, 31),new Date(2019, 9, 13))).to.equal(-14);
    });
});
