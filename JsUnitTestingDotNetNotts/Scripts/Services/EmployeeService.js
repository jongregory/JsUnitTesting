console.log('Employee Services');

var employeeService = (function() {
    'use strict';

    //private array
    var employeeRepository = new Array(100);

    //private functions
    function getIndexById(id) {
        for (var i = 0; i < employeeRepository.length; i++) {

            if ( (employeeRepository[i] !== undefined) && (employeeRepository[i].id === id)) {
                return i;
            }
        }
        return -1;
    }

    function longSaveOperation(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }


    //public functions
    return {
        getById: function (id) {
            var index = getIndexById(id);
            return employeeRepository[index];
        },
        add: function (employee) {
            console.log('employee service add');
            employeeRepository.push(employee);
        },
        update: function (employee) {
            var index = getIndexById(employee.id);
            employeeRepository[index] = employee;
            longSaveOperation(1000);
        },
        remove: function (id) {
            var index = getIndexById(id);
            employeeRepository[index]  = undefined;
        },
        list: function () {
            for (var i = 0; i < employeeRepository.length; i++) {
                console.log(employeeRepository[i]);
            }                      
        }
    };
})();