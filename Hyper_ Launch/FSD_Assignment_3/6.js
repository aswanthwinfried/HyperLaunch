/* Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope
 during the compilation phase, before the code is executed. This allows you to use functions and variables before they are declared in the code.

var: Variables declared with var are hoisted and initialized with undefined. You can use the variable before the declaration, but it will return undefined until the assignment happens.

let and const: Variables declared with let and const are hoisted but not initialized. They are in a "temporal dead zone" from the start of the block until the declaration is encountered. Trying to access them before declaration will result in a ReferenceError.

Example:   */

console.log(a); 
var a = 5;

console.log(b); 
let b = 10;

console.log(c); 
const c = 15;