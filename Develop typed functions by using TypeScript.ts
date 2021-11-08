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

 // Exercise - Create functions
 function displayAlert(message: string|number): void {
    console.log('The message is ' + message);
}
displayAlert(42)

function sum(input: Array<number | string> | (number|string)[]): number {
    let total =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){//aqui 
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
sum([5])
sum([1, 'two', 3])

// FUN WITH Parameters
function addNumbers4 (x: number, y: number): number {
    return x + y;
 }
 
 addNumbers4(1, 2,); // Returns 3
 //addNumbers(1,);    // Returns an error

 //los argumentos opcionales tienen que ir despues de los que son requeridos, esto es debido al orden de 
 //posicion que tienen en los argumentos de la funcion que los llama
 function addNumbers5 (x: number, y?: number): number {
    return y ? x + y : x;
 }
 
 addNumbers5(1, 2); // Returns 3
 addNumbers5(1);    // Returns 1

 function addNumbers6 (x: number, y = 25): number {
    return x + y;
 }
 
 addNumbers6(1, 2);  // Returns 3
 addNumbers6(1);     // Returns 26

 let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number =>
                        restOfNumbers.reduce((acum, arg) => acum + arg, firstNumber)

console.log(addAllNumbers(1,2,3))