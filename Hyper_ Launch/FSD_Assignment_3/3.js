/* 3.	Given the following object, use object destructuring to extract name and age properties. Then, log these values to the console.
const person = {
name: "John",
age: 30,
occupation: "Engineer"
};

// Destructure the object here and log name and 
*/
const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
    };

let {name:a,age:b} = person;
console.log(a);
console.log(b);

    
    
