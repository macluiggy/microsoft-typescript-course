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
let returnBoolean = identity<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

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
console.log(getPets(pets2, "3"));     // Error

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
let returnString3 = processor('Hello!', 100);
// si no se le asigna la interfaz de forma explicita a la variable, typescript inferira los valores de esta
let test = processIdentity(2, 'jj')