// Steve and Josh are bored and want to play something. They don't want to 
// think too much, so they come up with a really simple game. Write a 
// function called `fullstackJack` and figure out who is going to win.

// FullstackJack Rules:

// - Each player is dealt the same number of cards
// - They flip the card at the top of the deck
// - The card with the highest value wins the round and the winning player 
// receives a point. The two cards used are discarded.
// - The players continue playing until there are no remaining cards
// - The player with the most points at the end wins

// #### Example

// Representing Cards: A players hand is stored in an array. Each index is a 
// card value.  The card rank is as follows (from lowest to highest):
// `'2','3','4','5','6','7','8','9','T','J','Q','K','A'`.  Hands are 
// passed to the fullstackJack functions as arguments, see the examples below.



// // player1Hand = ['A', '7', '8'];
// // player2Hand = ['K', '5', '9'];
// fullstackJack(['A', '7', '8'], ['K', '5', '9']);
// // --> returns "Player 1 wins 2 to 1!"


// fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J'])
// // --> returns  "Tie!"
function fullstackJack(player1Hand, player2Hand){
  var rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
  var player1score = 0;
  var player2score = 0;
  var msg;
  for (var i = 0; i < player1Hand.length; i++){
    if (rank.indexOf(player1Hand[i])>rank.indexOf(player2Hand[i])){
      player1score++;
    }
    else if (rank.indexOf(player1Hand[i])<rank.indexOf(player2Hand[i])) {
      player2score++;
    }
  }
  if (player1score>player2score){
    msg =  'Player 1 wins ' + player1score + ' to ' + player2score +'!';
  } else if (player2score > player1score) {
    msg =  'Player 2 wins ' + player2score + ' to ' + player1score +'!';
  } else {
    msg = 'Tie!';
  }
  
  //console.log('Player 1 and 2 Tie!')
  //console.log('Player 1 wins 2 to 1!')
  //console.log('Player 2 wins 1 to 1!')
  return msg;
}
