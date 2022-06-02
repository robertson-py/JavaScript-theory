// There is a convention that all the variables in JavaScript are written in "camel case". Here is an example:
const firstNamePerson = "John"; // camel case style
const first_name_person = "John"; // this style is more used in Python
// Variables can't start with a number.
// They only admit letters, numbers and the dollar sign.
// Variables that won't change, we usually write them in caps lock and with the reserved word "const".

// Other form to declare a varible it's with the reserved word "let".
let lastName = "Smith";
// Normally, the "let" variables will change in the future. "const" are with a fixed value.

/*---snip---*/

// The seven primitive data types are:
let age = 27;           // 1) Number (integer and floats)
const name = "John";    // 2) Strings
let running = false;    // 3) Boolean (true or false)
let nope;               // 4) Undefined (declare a variable without a value)
// The next ones are rarely used. It's only for very especific tasks.
// 5) Null (also means empty value)
// 6) Symbol
// 7) BigInt

/*---snip---*/

// If/else statements
// This ones are a bit different of Python, but it works just fine
const a = 10;
const b = 15;

if (a>b) {
    console.log("a is bigger than b");
} else if (a<b) {
    console.log("b is bigger than a");
} else {
    console.log("a is equal b")
}

// Switch statement
// It works like a multiple conditional
const fruits = "oranges";
switch (fruits) {
    case "oranges":
        console.log("do this stuff");
        break;
    case "apples":
        console.log("do apple stuff");
        break;
    case "bananas":
        console.log("do banana stuff instead");
        break;
    default:
        console.log("you don't write any fruit");
}

// Conditional ternary operator
// To better explain this lecture, let's see how it'll work on a script.
const c = 10;
const d = 15;

c>d ? console.log("d is lower than c") : console.log("d is greater than c");
// This line of code looks a little complex, but let's split it in small parts:
// It means, if (c>d) then do that : instead do this other stuff
// It's very similar than the traditional if/else statement, but a lot shorter

/*---snip---*/

// Truthy and falsy values
// These are a couple of those kind of values
false;
// The variables that will return a falsy value are: 0, "", undefined, null, NaN
true;
// The variables that will return a truthy value are: any number or full string1

/*---snip---*/

// Equality operators: == vs. ===
const A = 10;
const B = "10";
// If we try to compare this two values with the operators == and ===, we'll obtain curious results
A == B  // --> It returns a True value
A === B // --> It returns a False value

// Write "use strict" to got a better error debug console

/*---snip---*/

// Functions
// They are the most common and base of all JavaScript programming.
// We use them to past through some data and additionally can also return data as well.
// It's the best way to reuse code, they receive and can return data.
// Functions receive parameters between parenthesis, so they can process with their internal commands.

const adjective = "fat";

function sentenceMaker(fill) {
    return `My girlfriend is ${fill}`;
};

console.log(sentenceMaker(adjective));

