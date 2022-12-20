function eitherStringIncluded(sentence, word1, word2) {
   // your code here...
   let condition1 = sentence.includes(word1);
   let condition2 = sentence.includes(word2);
   
   if(condition1 || condition2){
       return true;
   } 
   return false;
   
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false