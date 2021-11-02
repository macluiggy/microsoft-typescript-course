"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(4, 6));
let a;
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
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(ContractStatus[employeeStatus]);
