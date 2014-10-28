/// <reference path="../../../Scripts/mochaspecs/assertions/expect.js" />
/// <reference path="../../../Scripts/mochaspecs/bdd/mocha.js" />
/// <reference path="../../../Scripts/mochaspecs/bdd/sinon.js" />
/// <reference path="../../../Scripts/mochaspecs/bdd/sinon.js" />
/// <reference path="../../../Scripts/app/views/Employee/Main.js" />
/// <reference path="../../../Scripts/app/logic/EmployeeLogic.js" />
/// <reference path="../../../Scripts/app/Model/Employee.js" />


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

suite("Employee Logic Test Suite (Handling Async Calls)", function() {

    suiteSetup(function() {
    });

    setup(function() {
    });


    //Callback to done passed in and called after long running method, tells Mocha to wait
    //Done is just naming convention

    test('update_existingEmployee_EmployeeServiceReturnsValue1', function(done) {

        //Arrange


        //Act

        var result = employeeLogic.update(99, 'Jon', '37', '1');

        done();

        //Assert

        expect(result).to.equal(1);


    });

    teardown(function() {
    });

    suiteTeardown(function() {
    });

});