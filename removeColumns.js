/*Remove Columns

Write a function `removeColumns` that accepts two arguments
1. originalGrid (two-dimensional array)
2. numColums (number)

`removeColumns` should return a new grid with the correct number of columns removed.

```javascript
removeColumns([[1, 2, 3],
               [1, 2, 3],
               [1, 2, 3],
               [1, 2, 3]], 2);
   => [[1],
       [1],
       [1],
       [1]]
*/
```

const removeColumns = (arr, n) => {
  var neww = []; //need to return a new arr, sliced
  
  for (let i = 0; i < arr.length; i++){
    var elem = arr[i].slice(0, arr[i].length - n); //here, in elem we save a slice from the 0th ind to 3-2, so from 0 to 1
    neww.push(elem);
  }
  return neww;
}
