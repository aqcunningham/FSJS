
// // YOUR CODE BELOW

// ### Only Odds

// Define a function, `onlyOdds`, that accepts a number as an argument. `onlyOdds`
// should should return the sum of all the odd numbers between the given number
// and 1.

// If `onlyOdds` receives an argument less than 1, it should return 0.

// ```javascript
// onlyOdds(6); // => 9 (5 + 3 + 1)
// ```
// 7 = 1357 16
// 6 = 135 9 

//almost works
//prints out the sum of all off numbers if the n is prime
let onlyOdds=(n)=>{
    let sum = 0;
    for (var i = 1; n>1; n--){
        if(n>1){
            if (n%2!==0){ //found prime num
                for (let x = 1; x<n; x+=2){
                    sum+=x;
                }
                
            }
            return sum;
        }
        else return 0;
    }
}
