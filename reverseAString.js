// Reverse a String

// Fullstack Academy - JavaScript JumpStart


// - Description

// Create the function "reverseString" that reverses a string and returns the value of the reversed string. NOTE: Do NOT use the .reverse() method.
    //                   01234
// INPUT: reverseString("hello");
// OUTPUT: "olleh";

//*** Write the reverseString Function below ***



function reverseString(str){
  var fs = '';
  for(var i = str.length-1; i>=0; i--){
    fs += str[i];
  }
  return fs;
}
