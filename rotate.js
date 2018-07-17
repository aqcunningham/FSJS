/*
Rotate Challenge - Fullstack JavaScript JumpStart


Rotate an array to the right by a certain number of "steps". 

For example, the array to rotate is: [1,2,3,4,5,6,7] and 
will be rotated 3 "steps".  The final array will look like: [5,6,7,1,2,3,4].  

Notice the position of each index is shifted to the right by 3 places.

*/

function rotate(arr, n){
  while (n >0){
    
  pp = arr.pop(); // popps out the last value of arr
  arr.unshift(pp); // adds popped value to the beginning of the arr
  n--;
  }
  return arr;
}

//solution w neg numbers:

const rotateArray = (arr, n) => {

    const cond = n > 0 ? 'right' : 'left'; //ternary operator
    
      for (let i = 0; i < Math.abs(n); i++){ //here the abs n is counter || up to max n, so if n is too big,
         // Math.abs(n) % arr.length; a quicker version
        if (cond === 'right') arr.unshift(arr.pop());
        if (cond === 'left') arr.push(arr.shift());
      }
        return arr;
    }


//another, similar, but shorter:

const rotateArray = (arr, n) => {
  
  for (let i = 0; i < Math.abs(n); i++){
      
      if (n > 0) arr.unshift(arr.pop());
      else arr.push(arr.shift());
  }
return arr;
}
