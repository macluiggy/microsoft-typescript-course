define("greetings_module", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.returnGreeting = void 0;
    function returnGreeting(greeting) {
        console.log("The message from Greetings_module is " + greeting + ".");
    }
    exports.returnGreeting = returnGreeting;
});
define("greetings-utilities_modules", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.returnGreeting = void 0;
    function returnGreeting(greeting) {
        var greetingLength = getLength(greeting);
        console.log("The message from GreetingsLength_module is " + greeting + ". It is " + greetingLength + " characters long.");
    }
    exports.returnGreeting = returnGreeting;
    function getLength(message) {
        return message.length;
    }
});
define("main", ["require", "exports", "greetings_module", "greetings_module", "greetings-utilities_modules"], function (require, exports, greetings_module_1, allGreetingFunctions, greetings_utilities_modules_1) {
    "use strict";
    exports.__esModule = true;
    (0, greetings_module_1.returnGreeting)('Hola!'); // Displays 'The message from Greetings_module is Hola!'
    allGreetingFunctions.returnGreeting('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
    (0, greetings_utilities_modules_1.returnGreeting)('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
});
