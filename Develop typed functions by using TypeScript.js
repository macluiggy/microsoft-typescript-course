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
    console.log('The message is ' + message);
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
function addNumbers4(x, y) {
    return x + y;
}
addNumbers4(1, 2); // Returns 3
//addNumbers(1,);    // Returns an error
//los argumentos opcionales tienen que ir despues de los que son requeridos, esto es debido al orden de 
//posicion que tienen en los argumentos de la funcion que los llama
function addNumbers5(x, y) {
    return y ? x + y : x;
}
addNumbers5(1, 2); // Returns 3
addNumbers5(1); // Returns 1
function addNumbers6(x, y) {
    if (y === void 0) { y = 25; }
    return x + y;
}
addNumbers6(1, 2); // Returns 3
addNumbers6(1); // Returns 26
var addAllNumbers = function (firstNumber) {
    var restOfNumbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNumbers[_i - 1] = arguments[_i];
    }
    return restOfNumbers.reduce(function (acum, arg) { return acum + arg; }, firstNumber);
};
console.log(addAllNumbers(1, 2, 3));
//lo de abajo permite poner varios parametros dentros de un objeto, sin tener que lidiar con el problema
//de que si son opcionales o no, ya que aqui el orden en el que se pone ? para que sean opcionales no importa
//y este se hace en la interface o el typo, lo unico es que el numbre tiene que ser el mismo que se le da en
//la interface para que reconozca cual es cual, sin importar el orden en que se ponga
function displayMessage(_a) {
    var text = _a.text, sender = _a.sender;
    console.log("Message from " + sender + ": " + text);
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
// Exercise - Fun with parameters
var addThreeNumbers = function (x, y, z) { return z ? x + y + z : x + y; };
console.log(addThreeNumbers(1, 3)); //retorna NaN oprque la operacion es invalida
console.log(addThreeNumbers(1, 2, 3, 4)); //retorna 6 aunque se pasen mas argumentos de los necesarios, debido a que esto es hecho por javascript y si se pasan los argumentos necesarions como de parametros a javascript no le importa los que sobran, pero typescript si muestra el error
var subtractThreeNumbers = function (x, y, z) {
    if (z === void 0) { z = 100; }
    return x - y - z;
};
subtractThreeNumbers(10, 20); // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15); // returns -25
var addNumbers7 = function (x, y) { return x + y; };
var substractNumbers7 = function (x, y) { return x - y; };
//console.log(addNumbers7(1,2));
//console.log(substractNumbers7(2,1));
var doCalculation = function (operation) {
    return operation === 'add' ? addNumbers7 : substractNumbers7;
};
var subsxd = doCalculation('add');
console.log(subsxd(1, 2));
console.log(doCalculation('subtract')(2, 2));
