interface Vehicle {
  //la interfaz sirve para describir el tipo de dato que tendra cada elemento de la clase, ya sea para las propiedades, los parametros del constructor (que sus valores serian los argumentos al instanciar una clase), los accesors y los metodos, en este caso solo se estan definiendo los parametros del construcor y los metodos
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}
class Car1 implements Vehicle {
  //Properties, esta se usa para especificar el typo de la propiedad, se usa _ para diferenciarlos de los parametros que se usan en el construcor, aunque no son necesarios y puede tener el mismo nombre que los parametros
  private static numberOfCars: number = 0;
  _make: string;
  private _color: string;
  private _doors: number;
  // Constructor, aqui se colocan los parametros que provienen de los argumentos al instanciar la clase
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be a multiple of 2");
    }
    Car1.numberOfCars++; //cada vez que se "construya" (instantiace) un nuevo carro, aumenta el numeros de carros a 1
  }
  // Accessors
  get make() {
    return this._make;
  }
  set make(make) {
    this._make = make;
  }
  get color() {
    return `The color of the car is ${this._color}`;
  }
  set color(color) {
    this._color = color;
  }
  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be a multiple of 2");
    }
  }
  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  protected worker(): string {
    return this._make;
  }
  // static
  public static getNumberOfCars(): number {
    return Car1.numberOfCars;
  }
}

console.log(Car1.getNumberOfCars()); //dara 0 ya que aun no se ha instanciado ningun carro

let myCar1 = new Car1("Cool Car Company", "blue", 2);
console.log(myCar1);

// myCar1.worker() //esto dara error ya que este solo es accecible dentro de la clase
//console.log(myCar1.color);//este en cambio devuelve el valor que retorna el getter color
// se podria usar/utilizar getColor como nombre del getter para evitar confuciones
//console.log(myCar1._color);//devuelve el color del carro

let myCar2 = new Car1("Galaxy Motors", "red", 3 + 1);
//console.log(myCar2.color);//este en cambio devuelve el valor que retorna el getter color
// se podria usar/utilizar getColor como nombre del getter para evitar confuciones
//console.log(myCar2._color);//devuelve el color del carro, este caso no se muestra el error ya que se tiene que declarar un validacion en el construtor
//myCar2.doors = 5 //en este caso si se muestra el error, ya que aqui se llama a el setter, que es el que contiene la validacion, para que la validacion se haga desde el principio se debe hacer en el construtor

let myCar3 = new Car1("Galaxy motors", "gray");
// console.log(myCar3.doors); //este retorna 4 al ser el valor por defecto
// console.log(myCar3.accelerate(35));
// console.log(myCar3.brake());
// console.log(myCar3.turn('right'));
//console.log(myCar3.worker());
console.log(Car1.getNumberOfCars()); //dara 3 ya que hasta esta linea de codigo ya se han instanciado 3 carros

class ElectricCar1 extends Car1 {
  // Properties unique to ElectricCar
  private _range: number;
  // Constructor
  constructor(make: string, color: string, range: number, doors: number = 2) {
    super(make, color, doors); //a diferencia del contructor de la linea anterior a esta, el orden aqui  importa, en el super es como si se estuviera instanciando una clase, en este caso de la clase padre, super es como si tomara argumentos, no parametros, los cuales provienen de los parametros del constructor de la clase actual, de esta forma hara que para el arg en la posicion x sea el valor de la propiedad this._prop que se encuentra el la posicion x
    this._range = range;
  }

  // Accessors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }
  // Methods
  charge() {
    console.log(`${this.worker()} is charging...`);
  }
  brake(): string {
    //dado que en la clase padre Car se retorna un string es este metodo, aqui tambien lo debe hacer
    return `${this.worker()}  is braking with the regenerative braking system.`;
  }
}

var car = new ElectricCar1("marca chevere", "yellow", 4, 4);
//console.log(Car.getNumberOfCars());
let spark = new ElectricCar1("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar1("Electric Car Co.", "black", 263);
console.log(eCar);
// console.log(eCar.doors);         // returns the default, 2
// spark.charge();                  // returns "Spark Motors is charging"
// console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"

// REPASADO 2 VECES

// creamos una casa
interface House {
  doors: number;
  windows: number;
  bathrooms: number;
  showDoors(): string; //
}
class House implements House {
  _doors: number;
  _windows: number;
  _bathrooms: number;
  constructor(doors: number, windows: number, bathrooms: number) {
    this._doors = doors;
    this._windows = windows;
    this._bathrooms = bathrooms;
  }
  get getDoors(): number {
    return this._doors;
  }
  showDoors(): string {
    return `there are ${this.getDoors} doors`;
  }
}

var house = new House(4, 6, 2);
console.log(house.showDoors());

class smartHouse extends House {

  constructor(doors: number, windows: number, bathrooms: number) {
    super(doors, windows, bathrooms)
  }
}
