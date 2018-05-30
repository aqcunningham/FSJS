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

// ### Count To Ten

// Write a function, countToTen, that receives a number less than or equal to 10.
// countToTen should console.log every number between the given number and 10,
// including 10. Use recursion.

// NOTE: The test for this function checks how many times you call console.log. If
// you use console.log for debugging purposes, that's great! But your test will likely
// fail, so comment out your console.logs when you want to see if you're passing
// the test!

// ```javascript
// countToTen(1);
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10
// ```
function countToTen(n){
    if(n <10){
        console.log(n);
        countToTen(n+1);
    }
    else {
        console.log(n);
    }
}
