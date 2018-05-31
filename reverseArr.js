//reverse array:

const rev = (arr) => {
  return arr.reverse(); //with a reverse() method
}


//with recursion:


const rev = (arr) => {

if (arr.length === 1) return arr;

const lastEl = arr[arr.length-1];

return [lastEl].concat(rev(arr.slice(0,-1)));
}
