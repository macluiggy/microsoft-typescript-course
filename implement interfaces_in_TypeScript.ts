// Overview of interfaces in TypeScript
interface Employee2 {
    firstName: string;
    lastName: string;
    fullName(): string;
}
let employee: Employee2 = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName: function(): string {
        return this.firstName + " " + this.lastName;
    }
}

employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
console.log(employee.fullName())

interface ValueReturned {
    name: string,
    age: number
}

function userData(age: number, name: string): ValueReturned {
    return { age, name }
}

console.log(userData(182828, 'elver'))