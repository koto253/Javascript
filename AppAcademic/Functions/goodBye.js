/*
Write a function goodbye(name) that takes in a 
string name and returns a string saying bye to 
that name. See the examples below.
*/

function goodbye(name) {
   // your code here...
   return `Bye ${name}`;
 }
 
 console.log(goodbye("Ismael")); // => "Bye Ismael."
 console.log(goodbye("Aissatou")); // => "Bye Aissatou."
 console.log(goodbye("Didi")); // => "Bye Didi."

 /*
 Practice typing the syntax for functions. 
 Write 10 functions with different messages 
 and console.log them. Focus on using proper 
 style and indentation. Be sure to test your 
 code by running it after each repetition.
 */

 function sayHello(name) {
   let msg = "Hello, " + name + ". How are you?";
   return msg;
 }
 
 console.log(sayHello("world"));