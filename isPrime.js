function isPrime(n){
   let prime = Math.floor(Math.sqrt(n));
   // console.log(prime)
   for(let i = 2; i <= prime; i++){
       if(n % i === 0) {
           return false
       }
   }
   return true
}
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true