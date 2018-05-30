//**Create a For-Loop that increments by 3.**
//Have your loop increment up to 15.  In your code block within your loop `console.log` your counter variable.  The final result should output:

// 0
// 3
// 6
// 9
// 12
// 15

// START FOR-LOOP HERE

for (ind = 0; ind<=15; ind+=3){
  console.log(ind);
}

//solution with a for loop:
function countdown(n){
  for ( i = 1; i<=n; i++){
    console.log(i);
  }
  console.log ('liftoff!')
}
countdown(5)

//solution with a recursion:
function countdown (n){
  if (n < 1){
    console.log('countdown!');
  }
  else {
    console.log(n);
    countdown(n-1);
  }
}
