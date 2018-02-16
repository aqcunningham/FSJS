function myLastIndexOf(arr, n, nn){
  if(nn === undefined){
    for(var i = arr.length; i>=0; i--){
      if (n === arr[i]){
        //return arr.indexOf(arr[i]);
        //var v = arr.indexOf(arr[i]);
        return i;
      }
    }
  }
  //return -1;
  else {
    for (var j = 0; j<arr.length; j++){
      if(n === arr[j]){
        return j;
      }
    }
  }
}
