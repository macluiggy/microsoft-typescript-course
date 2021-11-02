function addNumbers(x: number, y: number) {
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

let e: undefined = undefined;

let flag: boolean;
let yes = true;
let no = false;
let x: number;
let y = 0;
let z: number = 123.456;
//let big: bigint = 100n;

let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);

//usin enums
enum ContractStatus {
  Permanent,
  Temp,
  Apprentice
}
let employeeStatus: ContractStatus = ContractStatus.Temp
console.log(ContractStatus[employeeStatus])