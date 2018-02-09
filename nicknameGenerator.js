function nicknameGenerator(str){
   if (str[2] === 'a' || str[2] === 'e' || str[2] === 'o' || str[2] === 'u' || str[2] === 'i') {// || str.indexOf(str[2] === 'e') || str.indexOf(str[2] === 'o') || str.indexOf(str[2] === {\//'u' )){ // if 3rd letter is a vowel 
     return  str.slice(0, 4);
     //return true;
   }
   else { //if (str.indexOf(str[2] !== 'e')) {
     return  str.slice(0,3);
     //return 'wrong';
   }
   //(vowels.indexOf(str[i].toLowerCase()) > -1) - sample from countVowels.js

 
//return nname;
}
