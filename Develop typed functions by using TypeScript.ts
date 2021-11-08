function addNumbers (x: number, y: number): number {
    return x + y;
 }
 addNumbers(1, 2);

 let addNumbers2 = function (x: number, y: number): number {
    return x + y;
 }
 addNumbers2(1, 2);

 let total = function(input: (number)[]): number {
     return input.reduce((acum, arg) => acum + arg)
 }
 total([1,2,3]) //si se pone un valor que no sea un numero typescript resaltara ese elemento como error

// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
    return x + y;
 }
 addNumbers1(1,2)
 // Arrow function
 let addNumbers3 = (x: number, y: number): number => x + y;

 let total2 = (input: number[]): number => input.reduce((acum, arg) => acum + arg)
 total2([1,3,5,7,8,9,10,11,12,13,14])