/* 
This design pattern focuses on ways to create new objects.
In JavaScript there are three ways to create new object.
*/

//Object.create() method takes a prototype argument, where you can specify the proto for the newly created object.
const a = Object.create(null);
const b = {};
const c = new Object();



/*
Now there are also many ways to assign properties to a JavaScript object
*/

//Dot Property
a.property = "Hello World";

// Square notation
b["property"] = "Hello World";

// Using defineProperty method
Object.defineProperty(c, "property", {
    value: "Hello World",
    writable: false,
});


