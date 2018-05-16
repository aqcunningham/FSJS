//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.
function adjacentElementsProduct(inputArray) {
let max = 0;
let tempSum = []; //[ 18, -12, 10, -35, 21 ]
    for (let i = 0; i < inputArray.length-1; i++){
        
        tempSum.push(inputArray[i]*inputArray[i+1]);
    }
    max += Math.max(...tempSum); //an awesome feature to find max in ...arr
    //return tempSum
    return max;
}
