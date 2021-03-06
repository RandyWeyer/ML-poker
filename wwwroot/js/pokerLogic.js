let handSize = 7;
let shuffleIterations = 6
let handWinner = "";

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
  }
  Hand.solve(convertedHand)
  console.log(convertedHand);
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
    return this.hand;
  }
}
function determineWinner(solvedPlayerHand, solvedComputerHand){
  let winner = Hand.winners([solvedPlayerHand, solvedComputerHand])
  if (winner.toString() == solvedPlayerHand.toString()) {
    console.log("Player Wins");
  } else {
    console.log("Computer Wins");
  }
  return winner;
}

// Begin constructing game objects
const deck = new CardDeck();
let player = new Player();
let computer = new Player();

let computerHand = computer.drawHand();
let playerHand = player.drawHand();

let convertedPlayerHand = convertToSolveable(playerHand);
let convertedComputerHand = convertToSolveable(computerHand);

let solvedPlayerHand = Hand.solve(convertedPlayerHand)
let solvedComputerHand = Hand.solve(convertedComputerHand)

let winner = determineWinner(solvedPlayerHand, solvedComputerHand);
console.log(winner);
console.log(winner.toString());
