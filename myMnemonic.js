// Write a function `myMnemonic` that accepts up to four strings. `myMnemonic`
// should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// ```javascript
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE
// ```

//almost coorect:
/*function myMnemonic(arr){
    var str = '';
    var i = 0;
    if ((arr[i].length) <= 3){
        for( i; arr[i]<arr.length; i++ ) {
            str +=arr[0].slice(0,1);
        }
        }
        return str;
    }*/
    
    
//listed solution:    
const myMnemonic = (one,two, three, four)=>{
    let mnem = '';
    if (one !== undefined) mnem+=one[0];
    if (two !== undefined) mnem+=two[0];
    if (three !== undefined) mnem+=three[0];
    if (four !== undefined) mnem+=four[0];
    return mnem;

}

//another solution:
const myMnemonic = (...arr)=>{
    let mnem='';
    for (var i = 0; i<arr.length; i++){
        var w = arr[i];
        var ch = w[0];
        mnem +=ch;
    }
    return mnem;
}
