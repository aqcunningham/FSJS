//my solution, not entirly correct:
function properNounFilter(str){
    for(var i = 0; i<str.length; i++){
        if(str.charCodeAt(0)>= 60 && str.charCodeAt(0)<=90){
            for(var j = 1;j<str.length;j++){
              if(str.charCodeAt(j)>98){ //A=65, thus it's lower than 97, should be false
      //console.log(str.charCodeAt(j));
                return true;
    }
      }
    }
  //console.log(str.charCodeAt(j));
}
}
