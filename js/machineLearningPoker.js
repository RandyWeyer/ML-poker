const net = new brain.NeuralNetwork({
  activation: 'sigmoid', // activation function
  learningRate: 0.6 // global learning rate, useful when training using streams
});


// // High Card ML
// console.log("HighCard: ");
//
// var genderNet = new brain.NeuralNetwork();
//
// for (var i = 0; i < 13400; i++) {
//   tempInput = incomeDataset[i][9];
//   if (tempInput == "Male") {
//     tempInput = 0;
//   } else {
//     tempInput = 1;
//   }
//   tempOutput = incomeDataset[i][14];
//   if (tempOutput == "<=50K") {
//     tempOutput = 1;
//     genderNet.train([
//       { input: {gender: tempInput}, output: { lessthan50K: tempOutput } }
//     ]);
//   } else {
//     tempOutput = 1;
//     genderNet.train([
//       { input: {gender: tempInput}, output: { morethan50K: tempOutput }}
//     ]);
//   }
// }
//
// for (var i = 0; i < 2; i++) {
//   var genderOutput = genderNet.run({ gender: i });
//   console.log(genderOutput);
// }
//
//
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
