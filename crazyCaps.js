// // YOUR CODE BELOW
// ### Crazy Caps

// Define a function, `crazyCaps`, that accepts a string as an argument.
// `crazyCaps` should return a string in which every other character is
// capitalized. The first letter should be lower-cased.

// ```javascript
// crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
// ```


//str[0,2,4,6]=lower
//str[1,3,5,7]=upper
let crazyCaps=(str)=>{
    let fs= '';
    for (let i = 0; i<=str.length-1; i++){
            if (i%2 === 1) fs+=str[i].toUpperCase();
            else fs+=str[i];
        }
    
    return fs;
}

crazyCaps('full academy')
