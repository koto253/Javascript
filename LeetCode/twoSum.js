/*
/Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number. 
Let these two numbers be numbers[index1] and numbers[index2] 
where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, 
index1 and index2, 
added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. 
You may not use the same element twice.

Your solution must use only constant extra space.

sorted in non-decreasing order --> from lowest to highest

check:
function
input
output


Constraints:

2 <= numbers.length <= 3 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.

values increase  ---> 

{2, 7, 11, 15}
 0   1   2   3

 l           r 

 right to left 

 2 + 15 = 17
 2 + 11 = 13
 2 + 7 = 9 === target
 [i + 1, j + 1]
 [0 + 1, 1 + 1]
 [1, 2]
          <--------- values decrease

*/

function twoSum(numbers, target) {
   let i = 0;
   let j = numbers.length -1;

   while ( i !== j){
       if (numbers[i] + numbers[j] > target) {
        j--;
       } else if (numbers[i] + numbers[j] < target) {
        i++;
       } else {
       return [i + 1, j +1 ];
       } 
   }
   // for(let i = 0; i < j; ){
   //     if (numbers[i] + numbers[j] > target) {
   //      j--;
   //     } else if (numbers[i] + numbers[j] < target) {
   //      i++;
   //     } else {
   //     return [i + 1, j +1 ];
   //     } 
       
   // }
};

console.log(twoSum([2,7,11, 15], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1,0], -1))
