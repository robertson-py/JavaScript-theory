// Define variables
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

// Calculate their Body Mass Index
let markBMI = markWeight/(markHeight**2);
let johnBMI = johnWeight/(johnHeight**2);

// Compare both BMI storing the result in a boolean variable
let markHigherBMI = markBMI > johnBMI;

// Display variables in the console
console.log(markBMI);
console.log(johnBMI);

// Display comparison in the console
console.log(markHigherBMI);

// Actualize height and weight variables for test #2
markHeight = 1.88;
markWeight = 95;
johnHeight = 1.76;
johnWeight = 85;

// Calculate their Body Mass Index
markBMI = markWeight/(markHeight**2);
johnBMI = johnWeight/(johnHeight**2);

// Compare both BMI storing the result in a boolean variable
markHigherBMI = markBMI > johnBMI;

// Display variables in the console
console.log(markBMI);
console.log(johnBMI);

// Display comparison in the console
console.log(markHigherBMI);