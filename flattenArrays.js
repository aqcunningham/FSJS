function flatten(arr){
  var newarr = [];
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'object'){
    for ( var j = 0; j< arr[i].length; j++){
      newarr.push(arr[i][j]);  
    }
    //newarr.push(i);
    
    }
    else {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
