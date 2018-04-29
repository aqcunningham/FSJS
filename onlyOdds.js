
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
//prints out the sum of all odd numbers if the n is prime
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

//correct solution:

let onlyOdds=(n)=>{
    let sum = 0;
      if (n>1){ 
        for (let x = 1; x<=n; x+=2){//no need to check the n for odd, since we increment from 1
                    sum+=x;
                }
            return sum;    
          }
      else return 0;    
}
onlyOdds(7)


//cleaner version of above:

let onlyOdds=(n)=>{
  let sum = 0;
    for( var i = n; i>=1; i--){
      if (i%2 !== 0){
      sum+=i;  
      }
    }
  return sum;
}
onlyOdds(0);
