
//my solution gives one exra comma at the end :|
function myJoin(arr, sep){
  var newarr = '';
  for (var i = 0; i<arr.length; i++){
    if(sep === undefined){
      sep = ','; }
    if(arr[i]!== undefined && arr[i] !== null && arr[i] !== ' '){
      newarr+=arr[i]+',';
//      newarr+= ' ';
    }
    
  }
  return newarr;
}
