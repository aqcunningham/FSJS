/*


'encode: taverna' => 'encode: aovtreo' 
'decode: aovtreo' => 'taverna'

encode:
str[i].replace(‘e’,’t’);
str[i].replace(‘t’,’a’);
str[i].replace(‘a,’o’);
str[i].replace(‘o,’i’);
str[i].replace(‘i,’n’);
str[i].replace(‘n,’e’);
*/

function code(str){
var finest = '';
if (str.slice(0,8) == 'encode: '){
   for(var i = 8; i<str.length; i++){
    if ( str[i] === 'e'){ let e = str[i].replace('e','t');
     finest+=e; }
    else if ( str[i] === 't'){ let t = str[i].replace('t','a');
     finest+=t; }
    else if ( str[i] === 'a'){ let a = str[i].replace('a','o');
     finest+=a; } 
    else if ( str[i] === 'o'){ let o = str[i].replace('o','i');
     finest+=o; } 
    else if ( str[i] === 'i'){ let ii = str[i].replace('i','n');
     finest+=ii; }  
    else if ( str[i] === 'n'){ let n = str[i].replace('n','e');
     finest+=n; }  
    else finest+=str[i]; }
   }
else if (str.slice(0,8) == 'decode: '){
  for(var j = 8; j<str.length; j++){
    if ( str[j] === 'e'){ let e = str[j].replace('e','n');
     finest+=e; }
    else if ( str[j] === 'n'){ let n = str[j].replace('n','i');
     finest+=n; }
    else if ( str[j] === 'i'){ let i = str[j].replace('i','o');
     finest+=i; } 
    else if ( str[j] === 'o'){ let o = str[j].replace('o','a');
     finest+=o; } 
    else if ( str[j] === 'a'){ let a = str[j].replace('a','t');
     finest+=a; }  
    else if ( str[j] === 't'){ let t = str[j].replace('t','e');
     finest+=t; }  
    else finest+=str[j]; }
  
}   
   else return false
   return finest;
}

code('decode: nll gi oeywhtrt wnah yiu')
