/*
Constructors are used to create specific type of objects. They both prepare objects for use and 
it also accepts parameters for the constructor.
In JavaScript, you can create constructor using function like syntax though after ES6, class keyword was 
introduced in the language.
*/

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function () {
        return this.model + "has travelled" + this.miles + "miles";
    }
}

/*
The problem with above function is that toString() method is redefined for each object.
To overcome this problem we can use Constructors with prototypes by making the toString() 
method avaialable to the prototype of the function.

Using the below technique, the toString() method will be shared to all the objects.
*/

Car.prototype.toString = function () {
    return this.model + "has travelled" + this.miles + "miles";
}


// Creating a new object.
var civic = new Car("Honda Civic", 2004, 8000);
