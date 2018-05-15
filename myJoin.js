/**My Join
Write the function myJoin that mirrors the behavior of JavaScript's .join() array method.

However, myJoin will accept the array to operate on as its first parameter, rather than being invoked as a method on that array. Try and mirror the behavior of the native .join() method exactly. If there is no delimiter argument, use a ',' character.

Note: Do not use the native .join() method in your own implementation! Ignore the values undefined, null, and empty arrays.
undefined, null, ''
Examples
INPUT: myJoin(['hello','world'], ' ');
OUTPUT: 'hello world'

INPUT: myJoin([2, "be", false]);

OUTPUT: '2,be,false'**/

// ### My Join [bootcamp prep]

// Define a function, `myJoin`, that accepts up to two arguments:
//   1. array
//   2. separator (string, optional)

// `myJoin` should return a string with all of the elements from the array joined
// togther. The separator should separate the joined elements:

// ```javascript
// myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
// myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"
// ```

// If separator is undefined, use ',' as the default separator.

// ```javascript
// myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"
// ```

// If any elements in the array are undefined or null, they should be replaced with
// an empty string in the returned string.

// ```javascript
// myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"
// ```

// Do not use the built-in [`.join` array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/joins) in your answer. Feel free to
// use it in all future problems though!

//my solution gives one exra comma at the end :|
function myJoin(arr, sep){
  var newarr = '';
  for (var i = 0; i<arr.length; i++){
    if(sep === undefined){
      sep = ','; }
    if(arr[i]!== undefined && arr[i] !== null && arr[i] !== ' '){
      newarr+=arr[i]+',';
//      newarr+= ' ';
    }
  }
  return newarr;
}

//solution from video, somewhat clear:

function myJoin(arr, sep){
  var newarr = '';
  if(sep === undefined){
      sep = ','; }
  for (var i = 0; i<arr.length; i++){
    if(arr[i]!== undefined && arr[i] !== null){
      if (i === arr.length-1){ //what's this
        newarr+=arr[i];
      }
      //newarr+= sep + arr[i]; //why sep is first? dont we get ', arr[i], etc?
    else{ 
      newarr+=arr[i]+sep;
    }
    } 
  }
  return newarr;
}

//another solution from prep:

const myJoin=(arr,sep = ',')=>{
  let final = '';
  for(let i = 0; i<arr.length-1; i++){
    if (arr[i] === undefined || arr[i] === null) final += sep;
    else final += `${arr[i]}${sep}`;
}
if (arr.length){
  final+=arr[arr.length-1]; //not sure what happened here
}
return final;
}
