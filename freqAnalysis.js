// ### Frequency Analysis

// Define a function `frequencyAnalysis` that accepts a string of lower-case
// letters.

// `frequencyAnalysis` should return an object containing the count for each letter
// in the string.

// ```javascript
// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
// ```

// YOUR CODE BELOW
const frequencyAnalysis = (str) => {
    let obj = {};
    for (let i = 0; i < str.length; i++){
        //obj.str[i] = 
        if (obj[str[i]]) obj[str[i]] +=1;
        else obj[str[i]] = 1;
    }
    return obj;
}
