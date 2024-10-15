// 1.	Write a function that demonstrates variable hoisting with var. Declare a variable using var after it is logged to the console, and explain the output.
// function hoistingExample() {
// console.log(a); // What will this print?
// var a = 10;
// }
// hoistingExample();

function hoistingExample() {
    console.log(a); // undefined
    var a = 10;
    }
    hoistingExample();
    
// Explanation : 
// In JavaScript, variable hoisting refers to the 
// behavior where variable declarations 
// (not the initialization) are moved to the top 
// of their scope during the compilation phase. 
// However, only the declaration is hoisted, not the value assignment.