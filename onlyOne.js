// // YOUR CODE BELOW
// ### Only One

// Write a function `onlyOne` that accepts three arguments of any type.

// `onlyOne` should return true only if exactly one of the three arguments are
// truthy. Otherwise, it should return false.

// Do not use the equality operators (`==` and `===`) in your solution.

// ```javascript
// onlyOne(false, false, true); // => true
// onlyOne(0, 1, 2) // => false
// ```

function onlyOne(x, y, z) {
  return ((x && !y && !z) || (!x && y && !z) || (!x && !y && z));
}
//another:
function onlyOne(x, y, z) {
  return (!!x + !!y + !!z === 1);
}

//another way:
const onlyOne=(a,b,c)=> {
    return (!!a && !b && !c) || (!a && !!b && !c) || (!a && !b && !!c)? true
    : false 
}

//even shorter:

const onlyOne=(a,b,c)=> {
    return (!!a && !b && !c) || (!a && !!b && !c) || (!a && !b && !!c);
}

//another cool solution:

const onlyOne=(a,b,c)=> !!a+!!b+!!c === 1; //converts the true/false values into 1/0, and if only one is true, which is the task,
//it will return true 
