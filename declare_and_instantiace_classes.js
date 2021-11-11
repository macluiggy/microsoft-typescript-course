var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    // Constructor, aqui se colocan los parametros que provienen de los argumentos al instanciar la clase
    function Car(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        this._make = make;
        this._color = color;
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error("Doors must be a multiple of 2");
        }
        Car.numberOfCars++; //cada vez que se "construya" (instantiace) un nuevo carro, aumenta el numeros de carros a 1
    }
    Object.defineProperty(Car.prototype, "make", {
        // Accessors
        get: function () {
            return this._make;
        },
        set: function (make) {
            this._make = make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return "The color of the car is " + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            if (doors % 2 === 0) {
                this._doors = doors;
            }
            else {
                throw new Error("Doors must be a multiple of 2");
            }
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    Car.prototype.accelerate = function (speed) {
        return this.worker() + " is accelerating to " + speed + " MPH.";
    };
    Car.prototype.brake = function () {
        return this.worker() + " is braking with the standard braking system";
    };
    Car.prototype.turn = function (direction) {
        return this.worker() + " is turning " + direction;
    };
    Car.prototype.worker = function () {
        return this._make;
    };
    // static
    Car.getNumberOfCars = function () {
        return Car.numberOfCars;
    };
    //Properties, esta se usa para especificar el typo de la propiedad, se usa _ para diferenciarlos de los parametros que se usan en el construcor, aunque no son necesarios y puede tener el mismo nombre que los parametros
    Car.numberOfCars = 0;
    return Car;
}());
console.log(Car.getNumberOfCars()); //dara 0 ya que aun no se ha instanciado ningun carro
var myCar1 = new Car('Cool Car Company', 'blue', 2);
console.log(myCar1);
// myCar1.worker() //esto dara error ya que este solo es accecible dentro de la clase
//console.log(myCar1.color);//este en cambio devuelve el valor que retorna el getter color
// se podria usar/utilizar getColor como nombre del getter para evitar confuciones
//console.log(myCar1._color);//devuelve el color del carro
var myCar2 = new Car('Galaxy Motors', 'red', 3 + 1);
//console.log(myCar2.color);//este en cambio devuelve el valor que retorna el getter color
// se podria usar/utilizar getColor como nombre del getter para evitar confuciones
//console.log(myCar2._color);//devuelve el color del carro, este caso no se muestra el error ya que se tiene que declarar un validacion en el construtor
//myCar2.doors = 5 //en este caso si se muestra el error, ya que aqui se llama a el setter, que es el que contiene la validacion, para que la validacion se haga desde el principio se debe hacer en el construtor
var myCar3 = new Car('Galaxy motors', 'gray');
// console.log(myCar3.doors); //este retorna 4 al ser el valor por defecto
// console.log(myCar3.accelerate(35));
// console.log(myCar3.brake());
// console.log(myCar3.turn('right'));
//console.log(myCar3.worker());
console.log(Car.getNumberOfCars()); //dara 3 ya que hasta esta linea de codigo ya se han instanciado 3 carros
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    // Constructor
    function ElectricCar(make, color, range, doors) {
        if (doors === void 0) { doors = 2; }
        var _this = _super.call(this, make, color, doors) || this;
        _this._range = range;
        return _this;
    }
    Object.defineProperty(ElectricCar.prototype, "range", {
        // Accessors
        get: function () {
            return this._range;
        },
        set: function (range) {
            this._range = range;
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    ElectricCar.prototype.charge = function () {
        console.log(this.worker() + " is charging...");
    };
    ElectricCar.prototype.brake = function () {
        return this.worker() + "  is braking with the regenerative braking system.";
    };
    return ElectricCar;
}(Car));
var car = new ElectricCar('marca chevere', 'yellow', 4, 4);
//console.log(Car.getNumberOfCars());
var spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
var eCar = new ElectricCar('Electric Car Co.', 'black', 263);
// console.log(eCar.doors);         // returns the default, 2
// spark.charge();                  // returns "Spark Motors is charging"
// console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"
