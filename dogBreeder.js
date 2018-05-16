// ### Dog Breeder

// Define a function, `dogBreeder`, that accepts up to two optional arguments:
//   1. name (string)
//   2. age (number)

// `dogBreeder` should return an object that represents a new dog! If the user
// doesn't define a name, assume the dog's name is Steve. If the user doesn't
// define the dog's age, assume the dog's age is 0.

// ```javascript
// dogBreeder('Sam', 12)    // => {name: 'Sam', age: 12}

// dogBreeder(15)    // => {name:'Steve', age: 15}
// ```

// YOUR CODE BELOW
const dogBreeder = (nameD, age) => {
    let objDog = {
        name : 'Steve',
        age : 0
    };

    if (typeof nameD === 'number') objDog.age = nameD;
    if (typeof nameD === 'string') objDog.name = nameD;

    if(age) objDog.age = age;
    
    return objDog;
}

// for (let i = 0; i < str.length; i++){
//     //obj.str[i] = 
//     if (obj[str[i]]) obj[str[i]] +=1;
//     else obj[str[i]] = 1;
// }
