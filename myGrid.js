// YOUR CODE BELOW
// ### Make Grid

// Write a function `makeGrid` that accepts two arguments:
// 1. numColumns (number)
// 2. numRows (number)

// `makeGrid` should return a two-dimensional array that represents a grid of the
// given dimensions.

// javascript
// makeGrid(3,4);
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/

const makeGrid=(col, row)=>{
    
  const makeRow=()=>{
      const aRow = [];
      for (let i = 1; i<= col; i++){
        aRow.push(i);
      }
      return aRow;
    }
    
    const grid = [];
    for (let i = 0; i<row; i++){
      grid.push(makeRow());
    }
    return grid;
       }
