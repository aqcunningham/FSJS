//looks like it works for two-dimentional array

function flatten(arr){
  var newarr = [];
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
  return newarr;
}

//solution for multiarray


//let beat = 
const flatten =(arr)=>{
  let final = [];

for (let i = 0; i<arr.length; i++){
  
  let element = arr[i];
  
  if(Array.isArray(element)) {
    for (let j = 0; j< element.length; j++){
      final.push(element[j]);
    }
  } else {
    final.push(element);
  }
  
}
return final;
}

flatten([['jack','maria'],'alice',['ben','kim']])


//a multiD flatten arr:

const flatten = (arr) => {
  const flat = [];

  arr.forEach(arr => {
    if (Array.isArray(arr)) flat.push(...flatten(arr));
    else flat.push(arr);
  });

  return flat;
}

flatten([1, 2, 3, 4, 5, 6, [7, [8]], 9])
