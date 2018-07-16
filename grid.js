/*Make Grid

Write a function `makeGrid` that accepts two arguments:
1. numColumns (number)
2. numRows (number)

`makeGrid` should return a two-dimensional array that represents a grid of the
given dimensions.

```javascript
makeGrid(3,4);
=> [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/


const makeGrid = (rown, rowwid) => {
var gr = [];

const makeRow = () => { //we make a row, 1 - 3 including, an additional helper function
  var row = [];
  for (let i = 1; i <= rown; i++){
    row.push(i);
  }
  return row
}

  for( let i = 1; i <=rowwid; i++){ //1-4 including
         //makeRow function creates a new row, an i element from 1 to 3,
         //makeRow(4) creates this row 4 times into an arr
   gr.push(makeRow(rown))
  }
  return gr;
}
