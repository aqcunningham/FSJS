// YOUR CODE BELOW
// ### Is Truthy

// Write a function `isTruthy` that accepts a single argument of any type.

// `isTruthy` should return true if that argument is 'truthy'.

// If the value is 'falsey', log out one of the messages below, corresponding to
// the type of the value tested.

// ```
// 'The boolean value false is falsey'
// 'The null value is falsey'
// 'undefined is falsey'
// 'The number 0 is falsey (the only falsey number)'
// 'The empty string is falsaey (the only falsey string)'
// ```

// ```javascript
// isTruthy('I yearn for truth'); // => true
// isTruthy(null); // => The null value is falsey
//```

const isTruthy=(n)=>{
    return (n === false) ? 'The boolean value false is falsey'
    : (n === null) ? 'The null value is falsey'
    : (n === undefined) ? 'undefined is falsey'
    : (n === 0) ? 'The number 0 is falsey (the only falsey number)'
    : (n === '') ? 'The empty string is falsey (the only falsey string)'
    : true
}


//another solution from the course:



const isTruthy=(n)=>{
   if (n) return true;
   switch (n){
     case false:
       return 'The boolean value false is falsey';
    case null:
      return 'The null value is falsey';
    case undefined:
      return 'undefined is falsey';
    case 0:
      return 'The number 0 is falsey (the only falsey number)'
    case'':
      return 'The empty string is falsey (the only falsey string)'
    default:
    return 'Nan is falsey'
}
}

isTruthy(NaN)
