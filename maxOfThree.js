
/*

Max Of Three

Fullstack Academy - JavaScript JumpStart


- Description

Create the function `maxOfThree` that evaluates three numbers and returns the largest number out of the three.

The function takes three number arguments and returns the highest number out of three.

**Examples*

- INPUT: `maxOfThree(5,4,10);`
- OUTPUT: `10`

- INPUT: `maxOfThree(7,7,4);`
- OUTPUT: `7`

Write Code Below
*/
//a: a>b>c, b: b>a>c: c: c>a>b

function maxOfThree(a, b, c) {
  if ((a >= b) && (a>=c)) {
    return a;
  }       //5  2      5 10
  else if ((a>=b) && (a<=c)){
    return c;
  }
  else {
    return b;
  }
}

/* another solution

function maxOfThree(a, b, c){
	if (a> b && a > c){
		return a;
	} else if(b > c){
		return b;
	} else {
		return c;
	} 
	}*/
