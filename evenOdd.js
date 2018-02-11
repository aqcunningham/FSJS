/**

Even and Odd
Write a function that accepts and array of numbers and returns and array of arrays. The first array in the return array should include all the even numbers from the argument array. The second array in the return array should include all odd numbers.

Examples
INPUT: evenOdd([1,2,3,4,5,6]);
OUTPUT: [ [2,4,6], [1,3,5] ]

**/

function evenOdd(arr){
  var evenarr = [];
  var oddarr = [];
  var finalarr = [evenarr, oddarr];
  for (var i = 0; i < arr.length; i++){
    if(arr[i]%2 === 0){
      evenarr.push(arr[i]);
    }
    else {
      oddarr.push(arr[i]);
    }
  }
  return finalarr;
}

// cleaner version:

function evenOdd(arr){
  var evenarr = [];
  var oddarr = [];
  for (var i = 0; i < arr.length; i++){
    if(arr[i]%2){ //no need to specify if it's true, becase if it's zero it's true?
      evenarr.push(arr[i]);
    }
    else {
      oddarr.push(arr[i]);
    }
  }
  return [evenarr, oddarr];
}
