/* 5.	Write a function that merges two arrays [1, 2, 3] and [4, 5, 6] using the spread operator. Then, log the new array. Add the number 7 to the end of the merged array using the spread operator as well.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Merge arrays and add 7 using the spread operator
*/

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3=[]
function mergeTwoArray(){
    arr3.push(...arr1,...arr2,7);
    console.log(arr3)
}
mergeTwoArray();

