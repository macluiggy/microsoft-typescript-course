"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(4, 6));
//let a;
function hello() {
    let a;
    return a;
}
/*let x: number;
let y = 1;
x = 1; y = 3
let z: any;
      z = 2
      z = 'hello'*/
let e = undefined;
let flag;
let yes = true;
let no = false;
let x;
let y = 0;
let z = 123.456;
//let big: bigint = 100n;
let firstName = "Mateo";
let sentence = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);
//usin enums
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
// aqui lo que dice es que el valor de la variable debe de ser de las que estan dentro del enum
// ContractStatus
let employeeStatus = ContractStatus["Temp"];
console.log(ContractStatus);
console.log(employeeStatus); //este mostrara el valor numerico que corresponde a la posicion
console.log(ContractStatus[employeeStatus]); //mientras que este mostrara el valor del string correspondiente a la posicion
//esto seria mas o menos igual a usar un array, en donde cuando queremos el valor de un elemento del mismo usamos la sintaxis
// arr[i] donde i es el numero donde se encuentra, y si queremos el valor de donde se encuentra usamos la sintaxis
//arr.indexOf(val) donde val es el valor de un elemento del array, este devolvera un numero que representa su posicion
/*let randomValue: any = 10;
randomValue = 'Mateo';   // OK
console.log(randomValue.toUpperCase())
randomValue = true;      // OK
console.log(randomValue.toUpperCase())
*/
//lo de arriba no va a dar errores de typescript ya que se una any, en cambio unknown es lo mismo que any pero este
// si muestra errores, pero tampoco se podra interactuar con la variable, incluso si su typo de valor corresponde con el mentodo
// que se quiere usar
let randomValue = 10;
randomValue = true;
randomValue = "Mateo";
//console.log(randomValue.name);  // Error: Object is of type unknown
//randomValue();                  // Error: Object is of type unknown
// usando el termino as le dice a typescript que confie en el criterio del programador
// esto es como si le dijera: "este valor esta como un string, confia en mi, soy programador :D"
randomValue.toUpperCase(); // Error: Object is of type unknown
// UNIONS
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
//multiType = "twenty";   //* Invalid
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x.concat(y);
    }
    throw new Error("Parameters must be numbers or strings");
}
console.log(add("one", "two")); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true, //si eliminamos cualquiera de las tres, dara un error, debido a que ya que se uso
    //la interseccion, newManager tiene que tener las 3 propiedades dadas, 2 por Employee y 1 por Manager
};
let myResult;
myResult = "pass";
myResult = "incomplete";
//myResult = 'failure' // Invalid
myResult = 20;
let diceRoll;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
function isOdd(x) {
    const newLocal = x / 2;
    console.log(typeof parseInt(newLocal));
    return x / 2 === 0 ? "number must not be zero" : parseInt(newLocal) === x / 2;
}
console.log(isOdd(2));
console.log(isOdd(3));
console.log(isOdd(0));
