/* 
Fullstack Academy - JavaScript JumpStart

Challenge - under_score to camelCase

Write a function to convert a variable name from under_score format to camelCase.
Make sure you support an unlimited number of underscores in the input!
*/

// Examples:

// underToCamel("first_name"); // should return firstName
// underToCamel("income_tax"); // should return incomeTax

// Write Code Below

//this solution only works for a sting with a single underscore:

function underToCamel(str){
     if (str.indexOf('_') > -1) {
       var cpLet = str.charAt((str.indexOf('_')+1)).toUpperCase(); //
       var fs = str.replace(/_\w/g, cpLet);
          //(vowels.indexOf(str[ind].toLowerCase())) !== -1)
     }
   
   return fs;
}


//a decision, that I didnt completely understand:
/*

function underToCamel(str){
  var fd = false;
  var ns = '';
  for (var i = 0; i < str.length; i++){
   if (str[i] === "_")  {
     fd = true;
   }
   else {
     if (fd){
       ns +=str[i].toUpperCase(); //how does it know it's the next char after '_'?
       fd = false;
     }
     else {
       ns += str[i];
     }
   }
  }
  return ns;
  }
  */
