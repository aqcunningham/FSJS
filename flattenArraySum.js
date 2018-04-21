function flatten(arr){
  var newarr = [];
	var sum = 0;
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'object'){ //or anonther condition: if (Array.isArray(arr[i]))
    for ( var j = 0; j< arr[i].length; j++){
      newarr.push(arr[i][j]);  
    }
    //newarr.push(i);
    
    }
    else {
      newarr.push(arr[i]);
    }
  }
  //return newarr;
for( var k = 0; k<newarr.length; k++){
sum+=newarr[k];
}
return sum;
}
