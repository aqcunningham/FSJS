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
      if (i === arr.length-1){
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
