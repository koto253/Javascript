/*
Write a function doubler(numbers) that takes 
an array of numbers and returns a new array 
where every element of the original array is 
multiplied by 2.
*/

function doubler(numbers) {
   for(let i = 0; i < numbers.length; i++) {
      numbers[i] *= 2;
   }
   return numbers;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
