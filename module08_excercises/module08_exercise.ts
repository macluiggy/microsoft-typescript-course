namespace AllGreetings {
  export namespace Greetings {
    export function returnGreeting(greeting: string) {
      console.log(`The message from namespace Greetings is ${greeting}.`);
    }
  }
  export namespace GreetingsWithLength {
    export function returnGreeting(greeting: string) {
      let greetingLength = getLength(greeting);
      console.log(
        `The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`
      );
    }
    export function getLength(message: string): number {
      return message.length;
    }
  }
}
//para poder llamar a las funciones fuera de los namespaces hay que usar export en las mismas
// returnGreeting("Hello"); // Returns error
let {returnGreeting} = AllGreetings.Greetings
returnGreeting("Bonjour"); // OK

import greet = AllGreetings.GreetingsWithLength
greet.returnGreeting("Hola"); // OK
