/*

Last Digit

Fullstack Academy - JavaScript JumpStart


- Description

Create the function `lastDigit` that accepts two non-negative integer values and returns `true` if they have the same last digit, such as 27 and 57.

The function accepts two non-negative integer arguments and returns `true` or `false` if they ahve the same last digit.

** Examples**

- INPUT: `lastDigit(22,32);`
- OUTPUT: `true`

- INPUT: `lastDigit(77, 999);`
- OUTPUT: `false`

- INPUT: `lastDigit(33,3);`
- OUTPUT: `true`
*/

function lastDigit(num1, num2){
  if ((num1 && num2) > 0) {
    var n1 = (num1.toString());
    var n2 = (num2.toString());
    if ((n1.slice(-1)) === (n2.slice(-1))) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}


lastDigit(23, 33);
