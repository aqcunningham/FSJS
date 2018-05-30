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

// // YOUR CODE BELOW### Backward String

// Write a function, backwardString, that receives a string. It should log every
// letter in the string, from the last character to the first. Use recursion.

// NOTE: As with the last problem, the tests will check how many times console.log
// is called.

// ```javascript
// backwardString('happy');
// // y
// // p
// // p
// // a
// // h
// ```

const backwardString = (str)=>{
    console.log(str[str.length-1]); //first, we print out the last letter;
    if (str.length>1) backwardString(str.slice(0,-1)); //if we have a string (str.length>1), 
    //then we call again the same function, but croppped from the back str.slice(0,-1) and do it all again
}
