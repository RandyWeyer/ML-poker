let handSize = 5;
let iterations = 6
class cardDeck {
  constructor() {
    this.deck = [];

    const suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }
  shuffle(){
    const { deck } = this;
    let m = deck.length, j;

    // Run shuffle 6 times recursively to make sure deck is random
    if(iterations>=0){
      while(m){
        j = Math.floor(Math.random() * m--);
        [deck[m], deck[j]] = [deck[j], deck[m]];
      }
      iterations--;
      this.shuffle();
    } else {
      iterations = 6;
      return this;
    }

  }
  drawCard(){
    return this.deck.pop();
  }
}
class Player {
  constructor(){
    this.hand = [];
  }

  drawHand(){
    this.hand = [];
    let deck = new cardDeck();
    deck.shuffle();
    for (var i = 0; i < handSize; i++) {
      this.hand.push(deck.drawCard());
    }
    console.log(this.hand);
  }
}

const deck = new cardDeck();
let player = new Player();
