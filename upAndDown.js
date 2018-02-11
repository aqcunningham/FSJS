
/**

Up and Down
Create a function that takes a number as an argument and returns an array. The first element of the array should be 0, and then each element should increase by 1 until it reaches the input number. Then, each element should count back down to 0.

Examples:

INPUT: countUpThenDown(2)
OUTPUT: [0, 1, 2, 1, 0]
INPUT: countUpThenDown(0)
OUTPUT: [0]

**/

function countUpThenDown(n){
  var finarr = [];
  for ( var i = 0; i<n; i++){
    finarr.push(i);
  }
  for (var j = n; j>-1; j--){
  finarr.push(j);  }
  return finarr;
}

