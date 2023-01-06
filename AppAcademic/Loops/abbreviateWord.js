/*
   Write a function abbreviate(word) that takes in a string arg. 
   The function should return a new string where all of its vowels are removed.
*/

// your code here
function abbreviate(word) {
   let newWord = '';
   
   for (let i = 0; i < word.length; i++) {
       let char = word[i].toLowerCase();
       if(!(char === 'a' || char === 'e' || char === 'i' || char === 'u' || char === 'o')) {
           newWord += char
           
       }
   }
   return newWord;
} 

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'