function code(str){
var finest = '';
if (str.slice(0,8) == 'encode: '){
for(var i = 0; i<str.length; i++){
str[i].replace('e','t');
/*str[i].replace(‘t’,’a’);
str[i].replace(‘a,’o’);
str[i].replace(‘o,’i’);
str[i].replace(‘i,’n’);
str[i].replace(‘n,’e’);}*/
finest+=str[i]}
}}
