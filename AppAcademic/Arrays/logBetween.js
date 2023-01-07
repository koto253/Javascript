/*
Define a function logBetween(lowNum, highNum) 
that will print every number from lowNum to highNum, inclusive. 
Inclusive means that the range includes lowNum and highNum.

Hint: this function only needs to print using console.log 
it does not need to return.
*/

function logBetween(lowNum, highNum) {
   for(let i = lowNum; i < highNum; i++) {
      console.log(i);
   }
}

logBetween(2, 22); // prints out: 