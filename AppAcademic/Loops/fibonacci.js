/*
The fibonacci sequence is a sequence of numbers whose 
first and second elements are 1. To generate further 
elements of the sequence we take the sum of the previous 
two elements. For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8. 
Write a function fibonacci that takes in a number length and returns the fibonacci 
sequence up to the given length.
*/

function fibonacci(length) {
   if (length === 0) {
       return [];
   } else if (length === 1) {
       return [1];
   }

   // let seq = [1,1];

   // while (seq.length < length) {
   //     let last = seq[seq.length - 1];
   //     let secondToLast = seq[seq.length - 2];
   //     let nextEle = last + secondToLast;
   //     seq.push(nextEle);
   // }
   
   let fibo = [1,1];
   for(; fibo.length < length; ){
       let last = fibo[fibo.length - 1];
       let second = fibo[fibo.length - 2];
       let result = last + second;
       fibo.push(result);
   }
   // return seq;
   return fibo;
}


console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]