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

const palindrome =(str) =>{
    let newStr = '';
    for(let i = str.length-1; i>=0; i--){
        newStr+=str[i];
    }
    if (str === newStr) return true;
    else return false;
}

//with recursion:

const isPalindrome = (str) => {
    if (str.length <= 0) return true;

    const first = str[0].toLowerCase();
    const last = str[str.length-1].toLowerCase();

    if (first === last) return (isPalindrome(str.slice(1, -1)));
    else return false;
