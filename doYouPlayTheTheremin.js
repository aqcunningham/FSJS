/*

Do You Play The Theremin?

- Fullstack Academy - JavaScript JumpStart

Description:

Create the function doYouPlayTheTheremin. If your name starts with the letter "S" or "s", you are playing the Theremin!



Examples

- INPUT: doYouPlayTheTheremin("Griffin")
- OUTPUT: "Griffin does not play the Theremin!";


- INPUT: doYouPlayTheTheremin("Scott");
- OUTPUT: "Scott plays the Theremin!";


Write Code Below!
*/

function doYouPlayTheTheremin(name){
  if (name.charAt(0) === 's'|| name.charAt(0) === 'S') {
    return name + ' plays the Theremin!';
  }
  else {
    return name + ' does not play the Theremin!';
  }
}


// another solution:
function doYouPlayTheTheremin(name){
  if (name[0].toLowerCase() === 's') {
    return name + ' plays the Theremin!';
  }
  else {
    return name + ' does not play the Theremin!';
  }
} 

//w arrow function:

var doYouPlayTheTheremin=(str)=>{
    if(str[0].toLowerCase() === 's') return true;
    else return false;
}
