function factorial(n) {
   if(n === 1) return 1;
   return n * factorial(n -1)
}

console.log(factorial(4)) // : --> 4! = 4 * 3 * 2 * 1
console.log(factorial(1)) // : 1