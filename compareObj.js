// ### Compare Objects

// Define a function, `compareObjects`, that accepts two objects as arguments.

// `compareObjects` should return true if both objects have exactly the same
// key/value pairs. Otherwise, `compareObjects` should return false. Assume the
// objects are not nested.

// ```javascript
// compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

// compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
// ```

// YOUR CODE BELOW

const compareObjects = (a,b) => {
    
    const akeys = (Object.keys(a)); 
    const bkeys = (Object.keys(b)); 

    if (akeys.length !== bkeys.length) return false;

    for (let i = 0; i < akeys.length; i++){
        const curk = akeys[i]; 
        
      if (akeys[curk] !== bkeys[curk]) return false; //somewhere here is a mistake
    }
      return true;
}
