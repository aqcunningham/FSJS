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
