/**
Open Sesame
Create a function, openSesame, which takes an array and a string as it's input.

The array will be an array of strings representing a list of passwords! The string is a password. If the password input matches one of the passwords in the array, return the string 'You may pass.', otherwise return 'You shall not pass!'

Note: You should not use the Array method .indexOf() or .includes()

Examples:

var passwords = [
  'Password123',
  'DavidYangsMiddleName',
  'qwerty',
  'S3cur3P455WORD',
  'OpenSesame',
  'ChildhoodPetsName',
  'Gandalf4evaa'
];
INPUT: openSesame(passwords, 'Password123');
OUTPUT: 'You may pass.'
INPUT: openSesame(passwords, 'Balrog');
OUTPUT: 'You shall not pass!'**/

function openSesame(passwordArr, password) {
  for(var i = 0; i < passwordArr.length; i++){
    if (passwordArr[i] === password){
     return 'You may pass.';
    }  //for some reason 'else' not used, second condition is put outside of the 'if', inside 'for'
  }
  return 'You shall not pass!';
}
