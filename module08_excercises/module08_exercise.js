var AllGreetings;
(function (AllGreetings) {
    var Greetings;
    (function (Greetings) {
        function returnGreeting(greeting) {
            console.log("The message from namespace Greetings is " + greeting + ".");
        }
        Greetings.returnGreeting = returnGreeting;
    })(Greetings = AllGreetings.Greetings || (AllGreetings.Greetings = {}));
    var GreetingsWithLength;
    (function (GreetingsWithLength) {
        function returnGreeting(greeting) {
            var greetingLength = getLength(greeting);
            console.log("The message from namespace GreetingsWithLength is " + greeting + ". It is " + greetingLength + " characters long.");
        }
        GreetingsWithLength.returnGreeting = returnGreeting;
        function getLength(message) {
            return message.length;
        }
        GreetingsWithLength.getLength = getLength;
    })(GreetingsWithLength = AllGreetings.GreetingsWithLength || (AllGreetings.GreetingsWithLength = {}));
})(AllGreetings || (AllGreetings = {}));
//para poder llamar a las funciones fuera de los namespaces hay que usar export en las mismas
// returnGreeting("Hello"); // Returns error
var returnGreeting = AllGreetings.Greetings.returnGreeting;
returnGreeting("Bonjour"); // OK
var greet = AllGreetings.GreetingsWithLength;
greet.returnGreeting("Hola"); // OK
