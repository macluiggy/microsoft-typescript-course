// para los generics no es buena idea hacer operaciones que tengan el mismo typo que el generic, ya que como su nombre lo indica es una generico, no se save el typo hasta que le demos un valor entonces una funcion como la siguiente seria un ejemplo de este inconveniente
// function indentity<T, U>(value: T, message: U): T {
//     let result: T = value + value; //error
//     console.log(message);
//     return result
    
// }
type ValidTypes = string | number;

// aqui se le dice a T que los unicos tipos que puede aceptar son de tipo string y number, esto sirve para que cuando se ponga el argumento en la funcion, typescript detecte cualquier valor que no sea un string o un number, de esta manera mostrara el error de que el valor no satisface los tipos de el generic
function identity<T extends ValidTypes, U> (value: T, message: U) {
    let result: ValidTypes = ''    // el resultado solo puede ser un numero o un string
    let typeValue: string = typeof value // devuelve el tipo para usarlo en el console.log
    //console.log(message);
    //aqui typscript hara la prueba a ver si pasa la condicion, ya sea que sea un numero o un string, de esta manera se evita el error resaltado en value + value, es importante que cada uno tenga su condicional, para que se tomen de manera independiente
    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }
    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result
}

//aqui se le pone el valor de cada generico, esto serian como los argumentos de una funcion a sus parametros, ponerlos es opcional, ya que al poner el arguemento de la funcion, typescript automaticamente detecta el tipo de valor para ese argumento
let returnNumber = identity<number, string>(100, 'Hello!');      // OK
let returnString = identity<string, string>('100', 'Hola!');     // OK
//let returnBoolean = identity<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

// aqui se va a extender tambien el typo, pero en este caso se usa keyof, este lo que hace es tomar los valores de las key de un objeto y este produce una union de string o numeros literales(string or numericc literal union), lo que quiere decir que los tipos de K solo pueden ser los valores que tienen las keys de T
function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key]
}
// function getPets1(pet: any, key: string) {
//     return pet[key]
// }
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}

console.log(getPets(pets1, "fish"));  // Returns 6
//console.log(getPets(pets2, "3"));     // Error

// Exercise - Implement generics with interfaces and classes
interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumber2: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnString2: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}
function processIdentityTest(obj: Identity<number, string>): string {
    let { value, message } = obj;
    return `The string is: ${message}, and the number is ${value}`
}

//esta interfaz se puede aplicar a cualquier funcion que tenga una estrucura similar
interface ProcessIdentity<T, U> {
    (value: T, message: U): T
}
//creamos una funcion con la misma estructura que la interfaz ProcessIdentity
function processIdentity<T, U> (value: T, message: U): T {
    console.log(message);
    return value
}
//definimos una variable que guardara la funcion processIdentity, y le asignamos la interfaz ProcessIdentity con los tipos number y string, entonces podremos llamar a la funcion que se guardo en la variable, esta debera tener los tipos que se definieron en la misma, ya que la interfaz es una funcion, se debe aplicar de esta forma
let processor: ProcessIdentity<number, string> = processIdentity;//esto es una funcion, pero processIdentity(12, 'jjj') representa un valor de tipo number, por eso no se puede aplicar la interfaz de esta forma
let returnNumber3 = processor(100, 'Hello!');
//let returnString3 = processor('Hello!', 100); //error
// si no se le asigna la interfaz de forma explicita a la variable, typescript inferira los valores de esta
let test = processIdentity(2, 'jj')


// Declare a generic interface as a class type
interface ProcessIdentity2<T, U> {
    value: T;
    message: U;
    process(): T;
}
// en processIdentity2<X, Y> los valores X, Y representan parametros, mientras que en ProcessIdentity, estos mismos ya representan valores que son los "argumentos" de esta interfaz, osea que estos typos se definen en los argumentos que se pasan cuando se instancia la clase processIdentity2
class processIdentity2<X, Y> implements ProcessIdentity2<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}
let processor2 = new processIdentity2<number, string>(100, 'Hello!');
console.log(processor2.process());
//processor.value = '100';       // Type check error

// Define a generic class
//tambien se puede definir la clase sin necesidad de una interfaz
//esta clase es exactamente igual a la version 2 la unica diferencia es que esta no implementa la interfaz
class processIdentity3<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processor3 = new processIdentity3<number, string>(100, 'Hello!');
console.log(processor3.getIdentity());


// Implement generics with custom types and classes
class Car {
    make: string = 'Generic Car';
    doors: number = 4;
}
// en estas clases extendidas no es necesario indicar el typo para las propiedades que tienen el mismo nombre que la clase de la cual se extiende, esto es debido a que se esta sobreescribiendo el valor de la propiedad de la clase original, asi que toma el mismo tipo de este, si lo que se quiere es cambiar el typo de la clase de los hijos, se debe cambiar el typo de la propiedad del padre, asi se cambiara la propiedad para todos sus "hijos"
class ElectricCar extends Car {
    make = 'Electric Car';
    doors = 4
}
class Truck extends Car {
    make = 'Truck';
    doors = 2
}
// para que typescrip sepa de dondo provienen las propiedades que se ponen en el console.log se tiene que extender de la clase que contien esas propiedades, en este caso es Car, pero dado que todas tienen las propiedades, se puede usar cualquiera de las clases, es como lo que se hace con las clases, se extiende para que las mismas propiedades se tengan en la clase extendida, es como si se dijera: "de esta clase T (ElectricCar o Truck) extiende los typos de la clase Car", esto sirve para contraer los posibles typos a solo el de la clase Car
function accelerate<T extends Car/* | ElectricCar | Truck */> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);
var car = new Car;

// interface Animal {
//     legs: number,
// }
// interface Human extends Animal {
//     smart: boolean,
// }