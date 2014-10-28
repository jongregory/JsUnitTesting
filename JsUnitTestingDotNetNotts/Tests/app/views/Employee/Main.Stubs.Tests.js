
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

suite("Employee_Main Test Suite (Spy and Stub to Mock JQuery Selectors)", function() {

    suiteSetup(function() {
    });

    setup(function () {
       
    });

    test("addEmployee_Invoked_EmployeeLogicAddCalledWithCorrectParameters", function() {

        //Arrange

        spy = sinon.spy(employeeLogic, "add");

        // I am stubbing out JQuery!!!
        $ = sinon.stub();


        //#### Input ID ####

        //Stub the val method
        var valStubId = sinon.stub({
            val: function () { }
        });

        //Set the Return
        valStubId.val.returns(99);

        //Set the specific selector
        $.withArgs('#inputID').returns(valStubId);

        //#### Input Name ####

        //Stub the val method
        var valStubName = sinon.stub({
            val: function () { }
        });

        //Set the Return
        valStubName.val.returns('Jon');

        //Set the specific selector
        $.withArgs('#inputName').returns(valStubName);

        //#### Input Age ####

        //Stub the val method
        var valStubAge = sinon.stub({
            val: function () { }
        });

        //Set the Return
        valStubAge.val.returns('37');

        //Set the specific selector
        $.withArgs('#inputAge').returns(valStubAge);

        //#### Input Role ####

        //Stub the val method
        var valStubRole = sinon.stub({
            val: function () { }
        });

        //Set the Return
        valStubRole.val.returns('1');

        //Set the specific selector
        $.withArgs('#selectRole').returns(valStubRole);


        //Act
        addEmployee();


        //Assert

        //Handy Debug
        var call = spy.getCall(0);
        console.log(call.args);

        expect(spy.calledWith(99, 'Jon', '37', '1')).to.be.ok();
    });

    teardown(function () {
        spy.restore();
    });

    suiteTeardown(function() {
    });

});