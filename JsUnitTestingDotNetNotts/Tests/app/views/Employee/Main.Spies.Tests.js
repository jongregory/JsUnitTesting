/// <reference path="../../../../Scripts/mochaspecs/assertions/expect.js" />
/// <reference path="../../../../Scripts/mochaspecs/bdd/mocha.js" />
/// <reference path="../../../../Scripts/app/views/Employee/Main.js" />
/// <reference path="../../../../Scripts/mochaspecs/bdd/sinon.js" />
/// <reference path="../../../../Scripts/app/logic/EmployeeLogic.js" />
/// <reference path="../../../../Scripts/microboot/jquery.js" />
/// <reference path="../../../../Scripts/app/Model/Employee.js" />

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

suite("Employee_Main Test Suite (Spy Example)", function() {

    suiteSetup(function() {
    });

    setup(function () {
       
    });

    test("addEmployee_Invoked_EmployeeLogicAddCalled", function() {

        //Arrange
        spy = sinon.spy(employeeLogic, "add");

        //Act
        addEmployee();

        //Assert
        expect(spy.called).to.be.ok();
    });

    teardown(function () {
        spy.restore();
    });

    suiteTeardown(function() {
    });

});