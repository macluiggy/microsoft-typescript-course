"use strict";
function isOdd(x) {
    const newLocal = x / 2;
    console.log(typeof newLocal);
    return x / 2 === 0 ? "number must not be zero" : Math.floor(newLocal) === x / 2;
}
