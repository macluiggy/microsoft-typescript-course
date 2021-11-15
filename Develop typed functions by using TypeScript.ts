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

interface Message {
    text: string;
    sender: string;
 }
 
 //lo de abajo permite poner varios parametros dentros de un objeto, sin tener que lidiar con el problema
 //de que si son opcionales o no, ya que aqui el orden en el que se pone ? para que sean opcionales no importa
 //y este se hace en la interface o el typo, lo unico es que el numbre tiene que ser el mismo que se le da en
 //la interface para que reconozca cual es cual, sin importar el orden en que se ponga
 function displayMessage({text, sender='default value'}: Message) {
     console.log(`Message from ${sender}: ${text}`);
 }
 
 displayMessage({sender: 'Christopher', text: 'hello, world'});

 // Exercise - Fun with parameters
 let addThreeNumbers = (x: number, y: number, z?: number): number => z ? x + y + z : x + y;
console.log( addThreeNumbers(1,3,)); //retornaria NaN si no se pone una condicion oprque la operacion seria invalida
console.log(addThreeNumbers(1,2,3,4)); //retorna 6 aunque se pasen mas argumentos de los necesarios, debido a que esto es hecho por javascript y si se pasan los argumentos necesarions como de parametros a javascript no le importa los que sobran, pero typescript si muestra el error

let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;
subtractThreeNumbers(10, 20);       // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15);   // returns -25

//   Exercise - Define function types

//type calculator = (x: number, y: number) => number
//se puede notar que en la inerface el cambio es ligero, vemos que no se usa el arrow y en vez se usa los dos puntos
interface Calculator {
    (x: number, y: number): number;
}
// type hola = {
//     (x: string) : string
// }
let addNumbers7: Calculator = (x: number, y: number): number => x + y
let substractNumbers7: Calculator = (x: number, y: number): number => x -y;
//console.log(addNumbers7(1,2));
//console.log(substractNumbers7(2,1));

let doCalculation = (operation: 'add' | 'subtract'): Calculator =>
                        operation === 'add' ? addNumbers7 : substractNumbers7
let subsxd = doCalculation('add')
console.log(subsxd(1,2));
console.log(doCalculation('subtract')(2,2));

// las siguientes funciones se consideran iguales
interface Saluda {
    (name: string, msg: string): string;
}
type Saluda2 = (a: string, b: string) => string
//se pueden usar cualquiera de los dos, ya sea la interface o el type, los nombres de los parametros no
//tienen necesariamente que ser iguales a los de el type o interface solo el typo tiene que ser iguales, pero
//los typos se pueden descartar si la variable se le asigna el type o la interface
let saluda: Saluda | Saluda2 = (name: string, msg: string): string => `Message from ${name}: ${msg}`
let saluda2: Saluda | Saluda2 = (nombre: string, mensaje: string): string => `Message from ${nombre}: ${mensaje}`
let saluda3: Saluda | Saluda2 = (namexd, msgxd) => `Message from ${namexd}: ${msgxd}`

//REPASADO 1 VECES