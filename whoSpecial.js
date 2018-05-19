// ### Who's a Special?

// Write a function whosASpecial that takes an array of pets and returns a string
// confirming what you already knew: all of the pets are very special!
// Feel free to add your own special pets to the array!

// Use .forEach in your answer.


// ```javascript
// let specialPets = [{
//     name: 'Sadie',
//     species: 'cat'
//   }, {
//     name: 'Layla',
//     species: 'cat'
//   }, {
//     name: 'Bogie',
//     species: 'dog'
//   }
// ];

// whosASpecial(specialPets);
// // => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!
// ```

// YOUR CODE BELOW

const whosASpecial = (arr) => {
    let str = '';

    arr.forEach(({name, species}, i) => {
        str += (`${name} the ${species} is very special!`);
        if( i !== arr.length-1) str += ' ';
    })
    return str;
}
