//my solution, not correct yet
function totalPortfolioValue(ticker, value){
 var finalport = 1;
 for (var i =0; i<ticker.length; i++){
   for ( var j = 0; j<portfolio.length; j++){
     if(portfolio[j][0]===ticker[i]){
       var tt = ticker.indexOf(i)+1;
       finalport = ticker[tt]*portfolio[0][1];
     }
   }
  
 
   return finalport;
 }
  
}
