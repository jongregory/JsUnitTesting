/// <reference path="../../Services/EmployeeService.js" />
/// <reference path="~/Scripts/app/Model/Employee.js" />

var employeeLogic = (function (service) {
    'use strict';
    return {
        add: function (id,name,age,role) {
            var employee = new Employee(id,name, age, role);
            service.add(employee);
        },
        update: function (id,name,age,role) {
            var employee = new Employee(id,name, age, role);
            service.update(employee);
        }
    };
})(employeeService);