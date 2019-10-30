var assert = chai.assert,
    expect = chai.expect;

suite("Testing calcDate", function() {
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 13),14)).to.equal("31/10/2019");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 13),1000)).to.equal("14/9/2023");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 13),0)).to.equal("13/10/2019");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 31),-14)).to.equal("11/10/2019");
    });  
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 31),-1000)).to.equal("24/11/2015");
    }); 
});

suite("Testing getDays", function() {
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 13),new Date(2019, 10, 31))).to.equal(14);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 31),new Date(2019, 10, 14))).to.equal(-13);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 13),new Date(2023, 9, 14))).to.equal(1000);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 31),new Date(2015, 11, 25))).to.equal(-1000);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 31),new Date(2019, 10, 31))).to.equal(0);
    });
});
