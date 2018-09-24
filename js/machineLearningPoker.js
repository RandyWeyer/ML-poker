const net = new brain.NeuralNetwork({
  activation: 'sigmoid', // activation function
  learningRate: 0.6 // global learning rate, useful when training using streams
});

const suits = ['c', 'd', 's', 'h'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
const winningRanks = ['HighCard', 'OnePair', 'TwoPair', 'ThreeOfAKind', 'Straight', 'Flush', 'FullHouse', 'FourOfAKind', 'StraightFlush', 'StraightFlush']


function convertTrainingToSolvable(cardHand){
  let learningHand = [];
  for (var i = 0; i <= 9; i+=2) {

    // this complex array manipulation is basically grabbing the suit-value pair from the
    // dataset and translating it into a suit and value pair based on this deck.
    var tempSuit = suits[cardHand[i]-1];
    var tempValue = values[cardHand[i+1]-1];
    learningHand.push((tempValue + tempSuit));
  }
  Hand.solve(learningHand)
  return learningHand;
}

function trainingDetermineWinner(solvedComputerHandOriginal, solvedComputerHandRandom) {

  let winner = Hand.winners([solvedComputerHandOriginal, solvedComputerHandRandom])
  if (winner.toString() == solvedComputerHandOriginal.toString()) {
    let winnerType = winningRanks[solvedComputerHandOriginal.rank];
    console.log(winnerType);
    console.log("Original Wins");
  } else if (winner.toString() == solvedComputerHandRandom.toString()){
    let winnerType = winningRanks[solvedComputerHandRandom.rank];
    console.log(winnerType);
    console.log("Random Wins");
    console.log(solvedComputerHandRandom.rank);
  }
  return winner;
}



// Hand Win Percentage Chance ML
console.log("Win Percentage Chance: ");


var winChanceNet = new brain.NeuralNetwork();

for (var i = 0; i < 30; i++) {
  tempInput = pokerHandDataset[i];
  var convertedInput = convertTrainingToSolvable(tempInput);

  console.log(convertedInput);


  // put the card hand generator loop here
  randomHand = Math.floor(Math.random()* 25000);
  tempInput2 = pokerHandDataset[randomHand];
  var convertedInput2 = convertTrainingToSolvable(tempInput2);

  console.log(convertedInput2);

  let solvedComputerHandOriginal = Hand.solve(convertedInput)
  let solvedComputerHandRandom = Hand.solve(convertedInput2)

  let trainingWinner = trainingDetermineWinner(solvedComputerHandOriginal, solvedComputerHandRandom);


  // if (tempInput == "Male") {
  //   tempInput = 0;
  // } else {
  //   tempInput = 1;
  // }
  //
  // tempOutput = pokerHandDataset[i][14];
  // if (tempOutput == "<=50K") {
  //   tempOutput = 1;
  //   winChanceNet.train([
  //     { input: {handType: tempInput}, output: { win: tempOutput } }
  //   ]);
  // } else {
  //   tempOutput = 1;
  //   winChanceNet.train([
  //     { input: {handType: tempInput}, output: { lose: tempOutput }}
  //   ]);
  // }
}

// for (var i = 0; i < 2; i++) {
//   var winChanceOutput = winChanceNet.run({ handType: i });
//   console.log(winChanceOutput);
// }







// // YEARS OF EDUCATION AND HOURS PER WEEK TO INCOME ML
// console.log("EDUCATION: ");
//
// var educationWeeklyHoursNet = new brain.NeuralNetwork();
//
// for (var i = 0; i < 13400; i++) {
//   tempInputEducation = incomeDataset[i][4];
//   tempInputWeeklyHours = incomeDataset[i][12];
//   tempOutput = incomeDataset[i][14];
//   if (tempOutput == "<=50K") {
//     tempOutput = 1;
//     educationWeeklyHoursNet.train([
//       { input: {yearsEducation: tempInputEducation, weeklyHours: tempInputWeeklyHours}, output: { lessthan50K: tempOutput } }
//     ]);
//   } else {
//     tempOutput = 1;
//     educationWeeklyHoursNet.train([
//       { input: {yearsEducation: tempInputEducation, weeklyHours: tempInputWeeklyHours}, output: { morethan50K: tempOutput }}
//     ]);
//   }
// }
//
// for (var i = 0; i < 16; i++) {
//   for (var j = 0; j < 60; j+=5) {
//     var educationWeeklyHoursOutput = educationWeeklyHoursNet.run({ yearsEducation: i, weeklyHours: j });
//     console.log(i + " Year(s) of Education, " + j + " Hours per Week :");
//     console.log(educationWeeklyHoursOutput);
//   }
// }
