/*
Sum Of Digits- Exercise Link

Create the function sumOfDigits that adds individual digits of a number and return the sum.


**Example:**

- INPUT: `sumOfDigits(414);`
4+1+4
- Return Value: `9`

- INPUT: `sumOfDigits(2913);`
- Return Value: `15`

TIP:

You may need to use the following methods or operators in your solution, reference the workshop page for additional information. 123*/

//first raw solution:

function sumOfDigits(n){
  var sum = 0;
  str = n.toString(); //now n is a str
  for (var ind = 0; ind < str.length; ind++){
    strToNum = Number(str[ind]); //here we convert each str ind to num
    sum += strToNum;
  }
 return sum;
}

sumOfDigits(123);

/* another solution:

function sumOfDigits(n){
  var sum =0;
  while (n>0){
    sum +=n%10; //chunks each last digit
    n = Math.floor(n/10); //creates a new n without last digit
}
  return sum;
} */

//recursion:

const sumDigits = (n) => {

const str = n.toString();

if(str.length === 1) return parseInt(str);

return parseInt(str[0]) + sumDigits(parseInt(str.slice(1)));

}

sumDigits(234)
