/**
Write a function zooInventory that takes a zoo's inventory of animals (represented using nested arrays) and returns an array of strings that describe each animal's name, species, and age.

Each input array will be nested 3 levels deep. Study the examples below to understand how the data is structured.

Examples:

var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];
**/

//somewhat correct solution
function zooInventory(arr){
  var newarr = '';
    for (var i = 0; i<arr.length; i++){
      //for (var j = 0; j<arr[i].length; j++){
        //console.log(arr[i]+ 'the ' + arr[i][j] +'is');
        newarr+=(arr[i][0] + ' the '+ arr[i][1][0] + ' is ' + arr[i][1][1]) + ', ';
        //return;// + 'the ' +arr[j][0];
      
    }
    return newarr;
}


//better solution:

function zooInventory(arr){
  var newarr = [];
    for (var i = 0; i<arr.length; i++){
      var animal = arr[i]; //created a new arr
        //console.log(arr[i]+ 'the ' + arr[i][j] +'is');
        newarr.push(animal[0] + ' the '+ animal[1][0] + ' is ' + animal[1][1]);
        //return;// + 'the ' +arr[j][0];
      
    }
    return newarr;
}

//different solution:

const zooInventory=(arr)=>{
    let newarr = [];
    for ( let i = 0; i<arr.length; i++){
        
        const currentAnimal = arr[i];
        
        const name = currentAnimal[0];
        const type = currentAnimal[1][0];
        const age = currentAnimal[1][1];
        
        newarr.push(`${name} the ${type} is ${age}.`);
    }
    return newarr;
}
