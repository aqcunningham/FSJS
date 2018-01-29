/*
#### Challenge - Vowel Count

Create the function **vowelCount(str)** that takes a **str** parameter and returns the number of vowels the string contains (ie. "Fullstack Academy" would return 5).  

Do not count 'y' as a vowel for this challenge.

<br>

####Examples

```js
- INPUT: vowelCount("Good Job");
- OUTPUT: 3


- INPUT: vowelCount('Yankees');
- OUTPUT: 3
```

*/

// Write Code Below:


function vowelCount(str){
  var fc = 0;
  for (ind = 0; ind < str.length; ind++){ //scanning a string from the beginning till the last letter (ind<length)
    if (str[ind] === 'a'||str[ind] === 'e'||str[ind] === 'i'||str[ind] === 'o'||str[ind] === 'u'||str[ind] === 'A'||str[ind] === 'E'||str[ind] === 'I'||str[ind] === 'O'||str[ind] === 'U'){
      fc+=1;
    }
  }
  return fc;
  //( v='a', 'e', 'i', 'o', 'u') in str 
  // return cnt=v++
}

vowelCount('good jooaeb')


/*
another version:
function z(str){
  var c = 0;
  var vw='aeiouAEIOU';
  for (var ind = 0; ind < str.length; ind++) {
  if (vw.indexOf(str[ind]) !== -1) {
   c+=1;
}

}
return c;
}

__ another one:

function vowelCount(str){
debugger;  
var ns = '';
var vowels = 'aeoiu';
for(var ind = 0; ind < str.length; ind++ ){
//if (str[ind] === 'a'){
if ((vowels.indexOf(str[ind].toLowerCase())) !== -1){
  ns++;

}
}
return ns;
}
