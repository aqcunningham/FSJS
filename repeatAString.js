/*
Repeat A String

Create a function "repeat" that accepts two arguments, the string to repeat and the a number that represtents how many times to repeat the string argument.  Return a string that concatenates all the times the string is repeated.

*NOTE: Do NOT use the Array.prototype.repeat*

**Examples**
	
- INPUT: `repeat("yo",4);`
- OUTPUT: `'yoyoyoyo'`

- INPUT: `repeat("yo",0);`
- OUTPUT: `''`

- INPUT: `repeat("bye",6);`
- OUTPUT: `'byebyebyebyebyebye'`
*/

// Write Code Below

  function repeat(str, n){
  var fs='';
  for (n; n>0; n--){
      //console.log(fs);
      fs+=str;
  }  
  return fs;
}

repeat('lol', 5);
