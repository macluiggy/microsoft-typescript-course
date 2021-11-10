// Overview of interfaces in TypeScript
interface Employee2 {
    firstName: string;
    lastName: string;
    fullName(): string;
}
let employee: Employee2 = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName: function (): string {
        return this.firstName + " " + this.lastName;
    },
};

//employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
console.log(employee.fullName());

interface ValueReturned {
    name: string;
    age: number;
}

function userData(age: number, name: string): ValueReturned {
    return { age, name };
}

console.log(userData(182828, "elver"));
//la diferencia entre el type alias y las interfaces, es que type se usa para definir el tipo de datos
//ya sea uno o varios como en un objeto, mientras que las interfaces se usan para definir la forma que
//tienen los datos, por ejemplo, de un objeto
type Hola = {
    hello: string;
};
interface Mia {
    mine: number;
}
//en ambos casos se pueden acceder a los typos como si fueran objetos con la sintaxis obj[key] = typo
let hola: Hola["hello"];
let mine: Mia["mine"];
function holaUser(hola: Hola["hello"], mia: Mia["mine"]) {
    return mia + hola;
}

//type Saluda = Mia['mine'] & Hola['hello']
type Saluda = Mia & Hola;

let compa: Saluda = {
    hello: "perro",
    mine: 344,
};

interface elmsOfArrays {
    arr1: number[];
    arr2: Array<string>;
    arr3: boolean[];
}
type elmsOfArrays2 = {
    arr1: number[];
    arr2: Array<string>;
};

let elmsOfArrays: elmsOfArrays = {
    arr1: [1, 2, 4, 8],
    arr2: ["que mas", "hello"],
    arr3: [0 > 0, 4 < 3, !"", true, false],
};
let elmsOfArrays2: elmsOfArrays2 = {
    arr1: [1, 2, 4, 8],
    arr2: ["que mas", "hello"],
};

interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string,
}
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry',
    nuts?: boolean,
    whippedCream?: boolean,
    instructions?: string,
}
let iceCream: IceCream = {
    flavor: 'vanilla',
    scoops: 2,
}
let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: false
}
console.log(iceCream.flavor);
function tooManyScoops({scoops}: Sundae) {
   if (scoops >= 4) {
      return scoops + ' is too many scoops!';
   } else {
      return 'Your order will be ready soon!';
   }
}
let dessert: Sundae = {flavor: 'vanilla', scoops: 5, sauce: 'caramel'}
console.log(tooManyScoops(dessert));

