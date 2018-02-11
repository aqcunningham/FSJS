/*

Palindrome Challenge - JavaScript JumpStart

Have the function **palindrome(str)** take the str parameter being passed, and return the boolean `true` if the argument is a palindrome (meaning that the string is the same forward as it is backward).  Otherwise, return the boolean `false`. 

Punctuation and numbers will not be part of the string.


- INPUT: palindrome("racecar");
- OUTPUT: true


- INPUT: palindrome("animal");
- OUTPUT: false

*/

// Write Code Below

function palindrome(str){
   var strf = '';
   for(var i = str.length -1; i>=0; i--){
     strf+=str[i]; 
   }
     if (strf === str){
       return true;
     }
     else{
       return false;
     }
   }

