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

suite("Employee Logic Test Suite (Mock a Service)", function() {

    suiteSetup(function() {
    });

    setup(function() {
    });

    test("add_newEmployee_EmployeeServiceInvoked", function() {

        //Arrange

        var mockEmployeeService = sinon.mock(employeeService);

        var expectation = mockEmployeeService.expects("add").once().withArgs(new Employee(99, 'Jon', '37', '1'));

        //Act

        employeeLogic.add(99, 'Jon', '37', '1');

        //Assert

        expectation.verify();
    });

    teardown(function() {
    });

    suiteTeardown(function() {
    });

});