var employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
//employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
console.log(employee.fullName());
function userData(age, name) {
    return { age: age, name: name };
}
console.log(userData(182828, "elver"));
//en ambos casos se pueden acceder a los typos como si fueran objetos con la sintaxis obj[key] = typo
var hola;
var mine;
function holaUser(hola, mia) {
    return mia + hola;
}
var compa = {
    hello: "perro",
    mine: 344
};
var elmsOfArrays = {
    arr1: [1, 2, 4, 8],
    arr2: ["que mas", "hello"],
    arr3: [0 > 0, 4 < 3, !"", true, false]
};
var elmsOfArrays2 = {
    arr1: [1, 2, 4, 8],
    arr2: ["que mas", "hello"]
};
var iceCream = {
    flavor: 'vanilla',
    scoops: 2
};
console.log(iceCream.flavor);
