/*
Module pattern was originally defined as a way to provide both public and private encapsulation of classes.
*/

const testModule = (function () {
    // Hiddlen variable from outer global scope. Shielded with the help of Closure in this case.
    let counter = 0;
    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            counter = 0;
        }
    }
}
)();