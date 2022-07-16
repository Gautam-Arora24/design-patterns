/*
A Singleton only allows for a single instantiation, but many instances of the same object.
he Singleton restricts clients from creating multiple objects, after the first object created,
it will return instances of itself. 

Singleton pattern is useful when only one object is needed to coordinate patterns across the system.
*/

const mySingleton = (function () {
    // Used to check whether the instance of the mySingleton function has been created or not.
    var instantiated;

    // Some private members and functions.
    const privateVariable = 'something private';

    function showPrivate() {
        console.log(privateVariable);
    }

    // Init function to initialize the data members to the object.
    function init() {
        return {
            publicMethod: function () {
                showPrivate();
            },
            publicVar: "This is something available to the public"
        }
    }

    return {
        getInstanceOf: function () {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    }
})();


mySingleton.getInstanceOf().publicMethod();