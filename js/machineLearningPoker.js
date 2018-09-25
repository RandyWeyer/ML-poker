var winChanceNet = new brain.NeuralNetwork({
  activation: 'sigmoid', // activation function
  hiddenLayers: [4, 4],
  learningRate: 0.6 // global learning rate, useful when training using streams);
});

const suits = ['c', 'd', 's', 'h'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
const winningRanks = ['HighCard', 'OnePair', 'TwoPair', 'ThreeOfAKind', 'Straight', 'Flush', 'FullHouse', 'FourOfAKind', 'StraightFlush', 'StraightFlush'];
const winTrainingAmount = 1;

// Hand Win Percentage Chance ML
console.log("Win Percentage Chance: ");


function convertTrainingToSolvable(cardHand){
  let learningHand = [];
  for (var i = 0; i <= 9; i+=2) {

    // this complex array manipulation is basically grabbing the suit-value pair from the
    // dataset and translating it into a suit and value pair based on this deck.
    var tempSuit = suits[cardHand[i]-1];
    var tempValue = values[cardHand[i+1]-1];
    learningHand.push((tempValue + tempSuit));
  }
  Hand.solve(learningHand);
  return learningHand;
}

function trainingDetermineWinner(solvedComputerHandOriginal, solvedComputerHandRandom) {

  let winner = Hand.winners([solvedComputerHandOriginal, solvedComputerHandRandom]);

  if (winner.toString() == solvedComputerHandOriginal.toString()) {
    tempInput = winningRanks[solvedComputerHandOriginal.rank - 1];
    console.log(tempInput);
    console.log("Original Wins");
    tempOutput = 1;
    winChanceNet.train([
      { input: tempInput, output: { win: 1 } }
    ]);
  } else if (winner.toString() == solvedComputerHandRandom.toString()){
    tempInput = winningRanks[solvedComputerHandRandom.rank - 1];
    console.log(tempInput);
    console.log("Random Wins");
    tempOutput = 1;
    winChanceNet.train([
      { input: tempInput, output: { lose: 1 } }
    ]);
  }
  return winner;
}


  for (var i = 0; i < 500; i++) {
    tempInput = pokerHandDataset[i];
    var convertedInput = convertTrainingToSolvable(tempInput);

    console.log(convertedInput);


    // put the card hand generator loop here
    randomHand = Math.floor(Math.random() * 25000);
    tempInput2 = pokerHandDataset[randomHand];
    var convertedInput2 = convertTrainingToSolvable(tempInput2);

    console.log(convertedInput2);

    let solvedComputerHandOriginal = Hand.solve(convertedInput);
    let solvedComputerHandRandom = Hand.solve(convertedInput2);

    let trainingWinner = trainingDetermineWinner(solvedComputerHandOriginal, solvedComputerHandRandom);

  }

  for (var i = 0; i < 9; i++) {
    tempWinType = winningRanks[i];
    var winChanceOutput = winChanceNet.run({ input: tempWinType });
    console.log(tempWinType + ": ");
    console.log(winChanceOutput);
  }

  var winChanceOutput2 = winChanceNet.run({ input: 'OnePair' });
  console.log(winChanceOutput2);
