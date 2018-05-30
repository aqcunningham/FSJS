/*

[Factorial] - Exercise Link

Create the function factorial(num) that returns the factorial of the parameter.

Not sure what the factorial is? Check this [link for a refresher!](http://www.rapidtables.com/math/algebra/Factorial.htm)

**Example:**

- INPUT: `factorial(4);`
- Return Value: `24`
// 4 * 3 * 2 * 1
*/

function factorial(num){
  var sum = 1;
  for (num; num>0; num--){
    sum *=num;
  }
  return sum;
}

factorial(5);

//with recursion:
function factorial (n){
  //base case
  if(n === 1 || n === 0){
    return 1;
  }
  let f = n*(factorial(n-1));
  return f;
}
factorial(3)
