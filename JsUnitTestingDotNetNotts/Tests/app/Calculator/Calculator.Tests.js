/// <reference path="../../../Scripts/mochaspecs/assertions/expect.js" />
/// <reference path="../../../Scripts/mochaspecs/bdd/mocha.js" />
/// <reference path="../../../Scripts/mochaspecs/bdd/sinon.js" />
/// <reference path="../../../Scripts/mochaspecs/bdd/sinon.js" />
/// <reference path="../../../Scripts/app/Calculator/Calculator.js" />


/*

Template TDD style unit tests 

Please see the MIKI for more information on getting started

    http://miki/miki/doku.php?id=javascript_unit_testing

*/

//TDD Style tests

mocha.setup('tdd');

/* Methods Available
suite() - Test Suite
test() - Test Method
suiteSetup() - runs before the test suite
suiteTeardown() - runs after the test suite
setup() - runs before each test
teardown() - runs after each test
*/

suite("Calculator Test Suite (Simple Test)", function() {

    suiteSetup(function() {
    });

    setup(function() {
    });

    test("Add_TwoPlusTwo_EqualFour", function() {

        //Arrange

        var calculator = new Calculator();

        //Act

        var result = calculator.add(2, 2);

        //Assert

        expect(result).to.equal(4);

    });

    teardown(function() {
    });

    suiteTeardown(function() {
    });

});