let handSize = 7;
let shuffleIterations = 6

class Card {
  constructor(suit, values){
    this.suit = suit;
    this.values = values;
  }
}
class CardDeck {
  constructor(){
    this.deck = [];
    this.resetDeck();
    this.shuffle();
  }
  resetDeck(){
    const suits = ['c', 'd', 's', 'h'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];

    for (let suit in suits) {
      for (let value in values) {
        let card = new Card(values[value], suits[suit]);
        this.deck.push(card);
      }
    }
  }

  shuffle(){
    const { deck } = this;
    let m = deck.length, j;

    // Run shuffle 6 times recursively to make sure deck is random
    if(shuffleIterations>=0){
      while(m){
        j = Math.floor(Math.random() * m--);
        [deck[m], deck[j]] = [deck[j], deck[m]];
      }
      shuffleIterations--;
      this.shuffle();
    } else {
      shuffleIterations = 6;
      return this;
    }
  }

  drawCard(){
    return this.deck.pop();
  }
}

function convertToSolveable(playerHand) {
  let convertedHand = [];
  for (var i = 0; i < playerHand.length; i++) {
    convertedHand.push(playerHand[i].suit + playerHand[i].values);
    console.log(convertedHand);
  }
  return convertedHand;
}
class Player {
  constructor(){
    this.hand = [];
  }

  drawHand(){
    this.hand = [];
    let deck = new CardDeck();
    for (var i = 0; i < handSize; i++) {
      this.hand.push(deck.drawCard());
    }
    console.log(this.hand);
    return this.hand;
  }
}

const deck = new CardDeck();
let player = new Player();
let testHand = player.drawHand();

converted = convertToSolveable(testHand);

let solved = Hand.solve(converted)
console.log(solved);
