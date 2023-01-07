/*
   Reserve an Array of integers
   Example
      A = [1,2,3]
      return [3,2,1]
*/

function reverseArray(a) {
   // Write your code here
   let result = [];
   for (let i = a.length - 1; i >= 0; i--) {
       result.push(a[i]);
   }
   return result;
}

console.log(reverseArray([1,2,3]));