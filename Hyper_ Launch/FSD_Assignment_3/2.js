/* 2.	Create an if block that declares a variable using both let and const. Try accessing those variables outside the block. Write a program that explains the difference in block scope between let and const.

function scopeExample() {
if (true) {
let a = 5;
const b = 10;
}
console.log(a); // What happens here?
console.log(b); // What happens here?
}
scopeExample();
*/

function scopeExample() {
    if (true) {
    let a = 5;
    const b = 10;
    }
    console.log(a); // Error a is not defined
    console.log(b); //ReferenceError: b is not defined
    }
    scopeExample();