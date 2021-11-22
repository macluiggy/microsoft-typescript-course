export function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The message from GreetingsLength_module is " + greeting + ". It is " + greetingLength + " characters long.");
}
function getLength(message) {
    return message.length;
}
