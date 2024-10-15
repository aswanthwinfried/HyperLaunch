/* 6.	Create a prototype-based inheritance chain where animal is a prototype
    of dog. Add properties like animal.eats = true and dog.barks = true. 
    Print the eats property from the dog object to demonstrate inheritance.
*/


let animal = {
    eats : true
}

let dog = {
    barks : true
}

Object.setPrototypeOf(dog,animal);

console.log(dog.eats);
console.log(dog.barks);
