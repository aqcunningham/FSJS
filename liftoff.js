/*If your function were called with the number 5 being passed in to the function as follows: liftoff_countdown(5), the output would be:
5
4
3
2
1
Liftoff!*/

function liftoff_countdown(n){
while (n >=1){
  		console.log(n);
  		n -=1; //n--
}
console.log( 'liftoff!');
  
}

/* another solution:
function z(n) {
for (n; n>1; n--) {
  console.log(n);
}
  console.log( 'Liftoff!');
}
z(5);
*/
