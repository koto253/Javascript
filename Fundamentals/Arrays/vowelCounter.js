/*
Write a function, countVowels(word), 
that takes in a string word and returns 
the number of vowels in the word.
Vowels are the letters "a", "e", "i", "o", "u".
*/

function countVowels(word) {
   let count = 0
     // your code here...
     for(let i = 0; i < word.length; i++){
         if(word[i] === 'a' || word[i] === 'e' || word[i] === 'o' || word[i] === 'i' || word[i] === 'u') {
             count += 1;
         } 
     }
     return count;
   }
   
   console.log(countVowels("bootcamp")); // => 3
   console.log(countVowels("apple")); // => 2
   console.log(countVowels("pizza")); // => 2