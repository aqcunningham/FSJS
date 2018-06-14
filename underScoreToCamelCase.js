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
       var cpLet = str.charAt((str.indexOf('_')+1)).toUpperCase(); // saves the first underscore and converts into upperCase, which is not suitable for strings with several underscores.
       var fs = str.replace(/_\w/g, cpLet);
          //(vowels.indexOf(str[ind].toLowerCase())) !== -1)
     } else return str;
   
   return fs;
}


// another propper solution:


const underToCamel = (str) => {

  var under = false; //initually assume that we didn't find the underscope
  var finalStr = ''; //here we store the final str

  for (let i = 0; i < str.length; i++){
    if (str[i] === '_') under = true;
    else { //two scenerios for this else: if under = false || true
      if (under) //depends on a previous iterataion
      //let's say we just 'met' underscore and our under turned into true, then the next i needs to turn into capital
      {finalStr += str[i].toUpperCase();
      under = false;} //by turning under to false, we 'close' the option to capitalize
      else finalStr += str[i];
    }
  }
  return finalStr;
}

underToCamel('user_name_what_is')
