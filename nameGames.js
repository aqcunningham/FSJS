/**
Create a function, playNameGame that takes a person's first name (string) as an argument and will return a string of the name game song staring the name.

The best way to explain the name game is to see it in action, so study the examples below to learn the rules!

Examples:

INPUT: playNameGame('Daniel');
OUTPUT: "Daniel Daniel Bo Baniel Banana Fana Fo Faniel Fee Fi Mo Maniel Daniel"
INPUT: playNameGame('Ariel');
OUTPUT: "Ariel Ariel Bo Bariel Banana Fana Fo Fariel Fee Fi Mo Mariel Ariel"
**/

function playNameGame(str){
  var vowels = 'AEOUI';
    if (vowels.indexOf(str[0])>-1)
    {// Ariel
      var nstr = str.toLowerCase();
      str = str + ' ' + str + ' Bo' +' B'+nstr+ ' Banana Fana Fo F'+nstr+' Fee Fi Mo M'+ nstr+' '+str; 
      //console.log(nstr);
    }
  else {
    str = str + ' ' + str + ' Bo' +' B'+str.slice(1)+ ' Banana Fana Fo F'+str.slice(1)+' Fee Fi Mo M'+str.slice(1)+ ' '+str;
  }
  return str;
}
