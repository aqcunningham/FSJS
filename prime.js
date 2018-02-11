/*
Prime - Challenge:

The function `prime(num)` accepts a number argument and returns the boolean `true` if the number is a prime number otherwise it returns return `false`. 

Examples:


- INPUT: prime(5);
- OUTPUT: true


- INPUT: prime(10);
- OUTPUT: false


*/

// Write Code Below

function prime(n){
  if (n%2 !== 0 && n%3 !== 0){
    return true;
  }
  else {
    return false;
  }
}

// another solution:

function isPrime(num){
  for(var i=2; i < num; i++){
	 	if(num%i === 0){
	   		return false;
	 	}
  }
  return num > 1;
}
