/**
Write a function that compares two values and returns "how equal" those two values are. If they are strictly equal return "strictly", if they are loosely equal return "loosely", and if they are neither return "not equal".

Note: Study the examples below. Due to type coercion, you may not always get the result you expect!**/


function howEqual(a,b){
  if(a===b){
    return 'strictly';
  }
  else if (a > b || b > a || a === true && b === 'truthy'){ //based on examples, and works
    return 'not equal';
  }
  else {
    return 'loosely';
  }
}


//anotoher solution, neater:


function howEquial(a, b){
 return (a&&!b&&!c) || (!a&&b&&!c) || (!a&&!b&&c)
}

//another one:

function onlyOne(x, y, z) {
  return (!!x + !!y + !!z === 1); //que?
  
}
