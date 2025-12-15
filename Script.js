class Deck {
    cards = [];
    suites = [
      'Hearts', 
      'Diamonds', 
      'Clubs', 
      'Spades'
    ];
  
    numbers = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
    constructor(){
        this.initCards();
    }
  
    initCards(){
      var card = "";
      for(var suit of this.suites){
        for(var number of this.numbers){
          card = `${number} of ${suit}`;
          this.cards.push(card);
        }
      }
    }
  
  shuffle(){
    // Fisher-Yates shuffle
    for (var i = this.cards.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  draw(){
    var cardToReturn = "";
    
    cardToReturn = this.cards.pop();
    
    return cardToReturn;
  }
}
 
 
 
class Player { 
  name = "";
  hand = [];
  constructor(name){
    this.name = name;
  }
  
  addToHand(deck){
    if(!deck || !deck.cards || !deck.cards.length) return;
    
    var card = deck.draw();
    this.hand.push(card);
    console.log(this.hand)
  }
 
}
 
var myDeck = new Deck();
myDeck.shuffle();
 
var player1 = new Player('Vul-khan');
var player2 = new Player('Player Two');
var player3 = new Player('Player Three');

console.log(player1);
console.log(player2);
console.log(player3);
 
// deal three cards to each player from the same deck
player1.addToHand(myDeck);
player1.addToHand(myDeck);
player1.addToHand(myDeck);

player2.addToHand(myDeck);
player2.addToHand(myDeck);
player2.addToHand(myDeck);

player3.addToHand(myDeck);
player3.addToHand(myDeck);
player3.addToHand(myDeck);
