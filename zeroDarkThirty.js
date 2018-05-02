// // YOUR CODE BELOW
// ### Zero Dark Thirty

// Write a function `zeroDarkThirty` that accepts a number as an arguemnt.

// `mySlice` should return a number with all of the zeroes removed:

// ```javascript
// removeZero(102302) // => 1232
// removeZero(606.203) // => 66.23
// ```

// If the number 0 is passed in as the argument, return [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

// ```javascript
// removeZero(0) // => NaN
// ```

const zeroDarkThirty=(n)=>{
    var final = '';
    if ( n !== 0){
        var convToStr = String(n); //or n.toString()
        for ( let i = 0; i<convToStr.length; i++){
            if (convToStr[i] !== '0'){
              
                final += convToStr[i];
                //console.log(convToStr[i]);
            }
        }
    }
    else return NaN;
    return  Number(final); //or parseInt(final)
    
}
