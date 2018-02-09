/**
Create a function sumMultiplyAndRound that takes 3 numbers, and calculates a return value based on the following rules.

The function should sum the first two numbers passed in, and then round them down to the nearest integer. The rounded sum should then be multiplied by the third argument, rounded up and returned.

Examples:

INPUT: sumMultiplyAndRound(2, 3.5, 6.2)
OUTPUT: 31 **/

function sumMultiplyAndRound(a, b, c){
  var n = Math.floor(a+b);
  var nf = Math.round(c*n); //5.5 is 5
  return nf;
}
