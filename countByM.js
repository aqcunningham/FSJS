/**
Write a function that takes three arguments: n (number), m(number) and direction (string). The function should count to n by intervals of m and return those numbers in an array.

If the direction string is "Up", the function should count up to n from but not including 0. If the string is "Down", it should count down to but not including 0. You can assume that both n and m will be greater than 0.
**/


function count(n,m,str){
  var ns = [];
  var i = 0;
  if ( str === 'Up'){
    for (i = m; i<=n; i+=m){
      //console.log(i);
      ns.push(i);
    }
  }
  else if ( str === 'Down') {
    //       3    11
    for (i = m; 1<n; n-=m){ //for some reason doesn't decrement lower than 5 for example 11, n Down. Now it does! Added 1<n
      ns.push(n);
    }
  }
  return ns;
}
