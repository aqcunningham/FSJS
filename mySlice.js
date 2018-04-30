/**Write a function mySlice that mirrors the behavior of JavaScript's Array.prototype.slice() array method.

The slice() method returns a copy of a portion of an array into a new array object selected from arguments begin to end (end not included). The original array will not be modified. However, unlike the built in method, mySlice will accept the array to operate on as its first parameter, rather than being invoked as a method on that array. Try and mirror the behavior of the native .slice() method exactly.

A few things to keep in mind: the begin and end arguments are optional, end can be a negative number, and mySlice should not modify the original array!

Note: Do not use the native .slice() method in your own implementation!

Examples
INPUT: mySlice([1,2,1]);
OUTPUT: [1, 2, 1]
INPUT: mySlice([1,2,1], 1);
OUTPUT: [2, 1]
INPUT: mySlice([1,2,3,4], 2, 3); from arr[2] to arr[3]
OUTPUT: [3]
INPUT: mySlice([1,2,3,4], 0, -1);
OUTPUT: [1, 2, 3]
strart = n
end = m
**/

function mySlice(arr, n, m){
  var newarr = [];
  //var i = 0;
 // if (Array.isArray(arr[i])){
    //for(arr.length; n>m; arr[n]++ ){
    if(n === undefined){
      n = 0;
      //for (n;)
      //newarr.push(arr);
    }
    if (n < 0){
      n = arr.length + n;
    }
    if (m === undefined){
      m = arr.length;
    }
    if (m<0){
      m = arr.length +m;
    }
    for (var i = n; i<m; i++){
      newarr.push(arr[i]);
    }
    //
  
  return newarr;
  
}

mySlice([1,2,3,4], -1, 3);

//mySlice with strings:


const mySlice = (originalString, startIdx, endIdx)=>{
    let x = '';
      if (startIdx === undefined && endIdx === undefined){
        x = originalString;
      }
      else if (startIdx>=0 && endIdx === undefined){
        for( let i = startIdx; i<originalString.length; i++){
          x+=originalString[i];
        }
      
      }
      else if (endIdx>=startIdx){
        for (let j = startIdx; j<endIdx; j++){
          x+=originalString[j];
        }

      }
      return x;
      }

//another way of the same code ffrom above:

const mySlice = (originalString, startIdx, endIdx)=>{
    let x = '';
    let beg = 0; //if not defined, the beginning of the str will be 0th index
    let endd = originalString.length-1; //if not defined, the ending index is before the last char of the length
  
      if (startIdx) beg = startIdx; //since startInd defined, save it in the beginning
      if (endIdx) endd = endIdx; //since ending index defined, save it in endd
        
      for( let i = beg; i<endd; i++){ //instead of parallel two 'for' loops, by sending beg and endd we use one loop
          x+=originalString[i];
        }
      return x;
      }
