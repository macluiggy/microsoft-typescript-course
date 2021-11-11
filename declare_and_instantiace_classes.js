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
    return Car;
}());
var myCar1 = new Car('Cool Car Company', 'blue', 2);
//console.log(myCar1.color);//este en cambio devuelve el valor que retorna el getter color
// se podria usar/utilizar getColor como nombre del getter para evitar confuciones
//console.log(myCar1._color);//devuelve el color del carro
var myCar2 = new Car('Galaxy Motors', 'red', 3 + 1);
//console.log(myCar2.color);//este en cambio devuelve el valor que retorna el getter color
// se podria usar/utilizar getColor como nombre del getter para evitar confuciones
//console.log(myCar2._color);//devuelve el color del carro, este caso no se muestra el error ya que se tiene que declarar un validacion en el construtor
//myCar2.doors = 5 //en este caso si se muestra el error, ya que aqui se llama a el setter, que es el que contiene la validacion, para que la validacion se haga desde el principio se debe hacer en el construtor
var myCar3 = new Car('Galaxy motors', 'gray');
console.log(myCar3.doors); //este retorna 4 al ser el valor por defecto
console.log(myCar3.accelerate(35));
console.log(myCar3.brake());
console.log(myCar3.turn('right'));
