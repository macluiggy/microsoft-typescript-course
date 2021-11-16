// para los generics no es buena idea hacer operaciones que tengan el mismo typo que el generic, ya que como su nombre lo indica es una generico, no se save el typo hasta que le demos un valor entonces una funcion como la siguiente seria un ejemplo de este inconveniente
// function indentity<T, U>(value: T, message: U): T {
//     let result: T = value + value; //error
//     console.log(message);
//     return result
    
// }
type ValidTypes = string | number;

// aqui se le dice a T que los unicos tipos que puede aceptar son de tipo string y number, esto sirve para que cuando se ponga el argumento en la funcion, typescript detecte cualquier valor que no sea un string o un number, de esta manera mostrara el error de que el valor no satisface los tipos de el generic
function identity<T extends ValidTypes, U> (value: T, message: U) : T {
    let result: T = value + value;    // Error
    console.log(message);
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