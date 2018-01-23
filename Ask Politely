/*

## Description - Ask Politely

Create the function `askPolitely` that accepts a sentence as an argument. If the last character of the sentence is a question mark, then make sure the question ends with the word "please". 

If a question is _already_ polite (meaning it already ends with "please") or the sentence is _not_ a question, then return the inputted string without modification.

#####Examples

```js
askPolitely("May I borrow your pencil?");
// returns "May I borrow your pencil please?"

askPolitely("May I ask a question please?");
// returns "May I ask a question please?"

askPolitely("My name is Grace Hopper.");
// returns "My name is Grace Hopper.";
```
Write Code Below */


function askPolitely(sentence){
  if (sentence.slice(-1) === '?') {
        if (sentence.slice(-7) === 'please?'){
          return sentence;
        }
        else {
          return sentence.slice(0, -1) + ' please?';
        }
    //return sentence;
  }
  else if (sentence.slice(-1) === '.') {

    return sentence;
  }
  else {
    return sentence;
  }
}
