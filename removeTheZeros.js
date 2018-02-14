function removeZeros(n){
  var sum = '';
  var str = n.toString(); //now n is a str
  for (var i = 0; i < str.length; i++){
    if(str[i] !== '0'){
      sum+=str[i];
      //console.log(str[ind]);
    }
  }
    if(!sum){//??
      return NaN;
    } else {
      return parseFloat(sum, 10);//??
    }
  }
