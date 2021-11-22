/// <reference path="interfaces.ts" />
/// lo de arriba sirve para relacionar el namespace de ese archivo con este archivo
var Functions;
(function (Functions) {
    function functionName() {
    }
    Functions.functionName = functionName;
})(Functions || (Functions = {}));
/// <reference path='./interfaces.ts' />
/// <reference path='./functions.ts' />
var x = Functions.functionName();
