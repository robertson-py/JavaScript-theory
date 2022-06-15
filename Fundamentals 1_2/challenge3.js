// // Define variables
// const firstDolphinsScore = 96;
// const secondDolphinsScore = 108;
// const thirdDolphinsScore = 89;

// const firstKoalasScore = 88;
// const secondKoalasScore = 91;
// const thirdKoalasScore = 110;

// const averageDolphinsScore = (firstDolphinsScore+secondDolphinsScore+thirdDolphinsScore) / 3;
// const averageKoalasScore = (firstKoalasScore+secondKoalasScore+thirdKoalasScore) / 3;

// // Main condition
// if (averageDolphinsScore > averageKoalasScore) {
//     console.log("The Dolphins are the winner of the competition !");
// } else if (averageDolphinsScore === averageKoalasScore) {
//     console.log("The game ended in a draw.")    
// } else {
//     console.log("The Koalas are the winner of the competition !");
// }

// ***Bonus 1***

// Define variables
const firstDolphinsScore = 97;
const secondDolphinsScore = 112;
const thirdDolphinsScore = 101;

const firstKoalasScore = 109;
const secondKoalasScore = 95;
const thirdKoalasScore = 123; // For the bonus 2, change this value to 106

const averageDolphinsScore = (firstDolphinsScore+secondDolphinsScore+thirdDolphinsScore) / 3;
const averageKoalasScore = (firstKoalasScore+secondKoalasScore+thirdKoalasScore) / 3;

if (averageDolphinsScore > averageKoalasScore) {
    console.log("The Dolphins won the game !");
    console.log(`Dolphins ${averageDolphinsScore}vs${averageKoalasScore} Koalas`);
} else if (averageKoalasScore > averageDolphinsScore) {
    console.log("The Koalas won the game !");
    console.log(`Dolphins ${averageDolphinsScore}vs${averageKoalasScore} Koalas`);
} else {
    console.log(`The game was a draw. Dolphins ${averageDolphinsScore}vs${averageKoalasScore} Koalas`);
}

// // Condition for the first game
// if (firstDolphinsScore > firstKoalasScore && firstDolphinsScore >= 100) {           // Dolphins wins the game
//     dolphinsGames ++;
// } else if (firstKoalasScore > firstDolphinsScore && firstKoalasScore >= 100) {      // Koalas wins the game
//     koalasGames ++;
// } else if (firstKoalasScore === firstDolphinsScore && firstKoalasScore >= 100) {    // Draw condition
//     dolphinsGames ++;
//     koalasGames ++;
// }

// // Condition for the second game
// if (secondDolphinsScore > secondKoalasScore && secondDolphinsScore >= 100) {        // Dolphins wins the game
//     dolphinsGames ++;
// } else if (secondKoalasScore > secondDolphinsScore && secondKoalasScore >= 100) {   // Koalas wins the game
//     koalasGames ++;
// } else if (secondKoalasScore === secondDolphinsScore && secondKoalasScore >= 100) { // Draw condition
//     dolphinsGames ++;
//     koalasGames ++;
// }

// // Condition for the third game
// if (thirdDolphinsScore > thirdKoalasScore && thirdDolphinsScore >= 100) {           // Dolphins wins the game
//     dolphinsGames ++;
// } else if (thirdKoalasScore > thirdDolphinsScore && thirdKoalasScore >= 100) {      // Koalas wins the game
//     koalasGames ++;
// } else if (thirdKoalasScore === thirdDolphinsScore && thirdKoalasScore >= 100) {    // Draw condition
//     dolphinsGames ++;
//     koalasGames ++;
// }

// // Check which team wins
// if (dolphinsGames > koalasGames) {
//     console.log("The Dolphins won the game !");
//     console.log(`Dolphins ${dolphinsGames}vs${koalasGames} Koalas`);
// } else if (dolphinsGames < koalasGames) {
//     console.log("The Koalas won the game !");
//     console.log(`Dolphins ${dolphinsGames}vs${koalasGames} Koalas`);
//     // Draw
// } else if (dolphinsGames === koalasGames) {
//     console.log(`The game was a draw. Dolphins ${dolphinsGames}vs${koalasGames} Koalas`);
// }
