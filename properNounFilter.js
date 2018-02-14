/**Proper Noun Filter
Write a function, properNounFilter, thate determines whether the string argument is a proper noun.

A word is considered a proper noun if only the first letter is capitalized. If the argument is a proper noun, properNounFilter should return true. It should return false if the word isn't a proper noun, if the word is mixed case, or if it is all caps.

Examples
INPUT: properNounFilter('coffee');
OUTPUT: false
INPUT: properNounFilter('Einstein');
OUTPUT: true
INPUT: properNounFilter('ApoLLo');
OUTPUT: false
for(var i = 0; i<str.length; i++);
  if(str.charCodeAt(0)>= 60 && str.charCodeAt(0)<=90){
  
**/

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
//correct solution:

function properNounFilter(str){
  var code;
    //for(var i = 0; i<str.length; i++){
        if(str.charCodeAt(0)>97) return false; //why sometimes curly brakets are omitted?
        
            for(var j = 1;j<str.length;j++){
              code = str.charCodeAt(j);
              if(code<89) return false;
    }
      
    
  //console.log(str.charCodeAt(j));
return true;

}//                
