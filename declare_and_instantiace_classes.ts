class Car {
    //Properties, esta se usa para especificar el typo de la propiedad, se usa _ para diferenciarlos de los parametros que se usan en el construcor, aunque no son necesarios
    _make: string;
    _color: string;
    _doors: number;
    // Constructor, aqui se colocan los parametros que provienen de los argumentos al instanciar la clase
    constructor(make: string, color: string, doors = 4 ) {
        this._make = make;
        this._color = color;
        if (doors%2 === 0) {
            this._doors =doors
        } else {
            throw new Error("Doors must be a multiple of 2")
        }
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
        return this._doors
    }
    set doors(doors) {
        if (doors%2 === 0) {
            this._doors =doors
        } else {
            throw new Error("Doors must be a multiple of 2")
        }
    }
    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    worker(): string {
        return this._make
    }
}

let myCar1 = new Car('Cool Car Company', 'blue', 2)
//console.log(myCar1.color);//este en cambio devuelve el valor que retorna el getter color
// se podria usar/utilizar getColor como nombre del getter para evitar confuciones
//console.log(myCar1._color);//devuelve el color del carro

let myCar2 = new Car('Galaxy Motors', 'red', 3+1);
//console.log(myCar2.color);//este en cambio devuelve el valor que retorna el getter color
// se podria usar/utilizar getColor como nombre del getter para evitar confuciones
//console.log(myCar2._color);//devuelve el color del carro, este caso no se muestra el error ya que se tiene que declarar un validacion en el construtor
//myCar2.doors = 5 //en este caso si se muestra el error, ya que aqui se llama a el setter, que es el que contiene la validacion, para que la validacion se haga desde el principio se debe hacer en el construtor

let myCar3 = new Car('Galaxy motors', 'gray')
console.log(myCar3.doors); //este retorna 4 al ser el valor por defecto
console.log(myCar3.accelerate(35));
console.log(myCar3.brake());
console.log(myCar3.turn('right'));
