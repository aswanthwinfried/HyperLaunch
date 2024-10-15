/* 4.	Write a program that takes an array of numbers [1, 2, 3, 4, 5] and uses array destructuring to extract the first two elements into separate variables. Then, log the sum of those two elements.
const numbers = [1, 2, 3, 4, 5];
// Destructure the array to extract the first two elements
*/

const numbers=[1,2,3,4,5];
let [a,b] = numbers;
console.log(a+b);