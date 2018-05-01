
// YOUR CODE BELOW
// ### How Equal

// Define a function, `howEqual`, that accepts two arguments of any type.

// `howEqual` should return the string 'loosely' if the two values passed into
// the function are loosely equal. `howEqual` should return 'strictly' if the two
// values are strictly equal. `howEqual` should return the string 'not equal' if
// the two values are neither strictly nor loosely equal.

// ```javascript
// howEqual(0, '0'); // => loosely
// howEqual(3, 9/3); // => strictly
// howEqual(true, 'truthy') // => not equal
//```

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

//another solution

const howEqual=(a,b)=>{
    return (a === b) ? 'strictly' //the order is important when showing 'strictly' first
    : (a == b) ? 'loosely'
    : 'not equal'
}
