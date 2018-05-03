// // YOUR CODE BELOW
// ### My Index Of

// Define a function, `myIndexOf`, that accepts three arguments:
//   1. source (string)
//   2. searchValue (string)
//   3. startIdx (number) - optional

// If the `source` contains the `searchValue`, return the index at which the
// `searchValue` starts. If the `searchValue` appears more than once in the
// `source`, return the index from the first occurance of the `searchValue`.
// If the `searchValue` doesn't exist in the `source`, return -1.

// If a startIdx is passed into the function, ignore any instances of the
// `searchValue` that occur before that index. If no `startIdx` is provided,
// start searching from the beginning of the `source`.

// Do not use the built-in [`.indexOf` string method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) in your answer. Feel free to
// use it in all future workshop problems though!

// ```javascript
// myIndexOf('hello', 'h'); // => 0
// myIndexOf('hello', 'e'); // => 1
// myIndexOf('hello', 'l'); // => 2
// myIndexOf('hello', 'l'); // => 2
// myIndexOf('hello', 'o'); // => 4

// myIndexOf('twice twice', 'ice'); => 2

// // find the index of the first instance of 'ice' starting at index 5.
// myIndexOf('twice twice', 'ice', 5); => 8

// myIndexOf('happy string', 'sad'); => -1
// ```
const myIndexOf=(source, searchValue, startIdx=0)=>{
    //let str = '';
    for ( let i = startIdx; i <= source.length-searchValue.length; i++){
            const ch = source.slice(i,i+searchValue.length);
            if (ch === searchValue) return i;
            
        }
        return -1;
    }


//anothre way:

// // YOUR CODE BELOW
// ### My Last Index Of

// Define a function, `myLastIndexOf`, that accepts up to three arguments:
//   1. array
//   2. searchValue
//   3. startIdx (optional)

// `myLastIndexOf` should return the last index at which the searchValue appears in
// the array.

// ```javascript
// myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
// ```

// If the searchValue isn't in the array, `myLastIndexOf` should return -1.

// ```javascript
// myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
// ```

// If startIdx is defined, `myLastIndexOf` should start looking for the seachValue
// at that index, and then move toward the front of the array as it looks for the
// value.

// ```javascript
// myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
// ```

// You cannot use the built-in [.lastIndexOf method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) for this problem, but feel free
// to use it in the future! Note that strings also have a [.lastIndexOf method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf).
// 6; 6>2
const myLastIndexOf=(array, searchValue, startIdx = array.length)=>{
    for ( let i = startIdx; i>0; i--){
        if (array[i] === searchValue) return i;        
    }
    return -1;
}
