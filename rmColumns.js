// // YOUR CODE BELOW
// ### Remove Columns

// Write a function `removeColumns` that accepts two arguments
// 1. originalGrid (two-dimensional array)
// 2. numColums (number)

// `removeColumns` should return a new grid with the correct number of columns removed.

// ```javascript
// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
// /* => [[1],
//        [1],
//        [1],
//        [1]]
// */
// ```

const removeColumns=(arr, n)=>{
    const rmGrid = [];
    for (let i= 0; i<arr.length; i++){
        const currentRow = arr[i];
        rmGrid.push(currentRow.slice(0,currentRow.length-n));
    }
    return rmGrid;
}
