"use strict";
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2);
var addNumbers2 = function (x, y) {
    return x + y;
};
addNumbers2(1, 2);
var total = function (input) {
    return input.reduce(function (acum, arg) { return acum + arg; });
};
total([1, 2, 3]); //si se pone un valor que no sea un numero typescript resaltara ese elemento como error
// Anonymous function
var addNumbers1 = function (x, y) {
    return x + y;
};
addNumbers1(1, 2);
// Arrow function
var addNumbers3 = function (x, y) { return x + y; };
var total2 = function (input) { return input.reduce(function (acum, arg) { return acum + arg; }); };
total2([1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14]);
// Exercise - Create functions
function displayAlert(message) {
    alert('The message is ' + message);
}
displayAlert(42);
function sum(input) {
    var total = 0;
    for (var count = 0; count < input.length; count++) {
        if (isNaN(input[count])) { //aqui 
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
sum([5]);
sum([1, 'two', 3]);
// FUN WITH Parameters
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2); // Returns 3
//addNumbers(1,);    // Returns an error
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 1
