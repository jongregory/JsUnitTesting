/// <reference path="../../../../Scripts/microboot/jquery.js" />

$(document).ready(function () {

    $('#saveButton').on('click', function () {
        addEmployee();
    });
    
});

function addEmployee() {

    var id = $('#inputID').val();
    var name = $('#inputName').val();
    var age = $('#inputAge').val();
    var role = $('#selectRole').val();

    employeeLogic.add(id, name, age, role);
}