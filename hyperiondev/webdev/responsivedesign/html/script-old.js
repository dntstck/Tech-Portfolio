//  JavaScript File

//      Please excuse the amount of comments, this is a rare exception to the rule as I am explaining my understanding of JS.

let indexVar = "Here's a variable"; // that can change
let indexNumVar = 1234; // Here's a number
const constVar = "Here's one that cannot"; // const vars are not subject to change. reassigning a const var will throw an error.
var anotherVarType = "Here's another modifiable variable";
// var userPrompt = prompt("Prompt? :") // prompts the user for input
const bodyTextChange = document.getElementById('bodyText'); // assign a constant variable to the element "bodyText" in the HTML Document.

//  Operators are a symbolic syntax that takes two variables, values , strings etc and manipulates them
//      to the developers desired effect using appropriate syntax, variables can be used to store the result
//
//      + Adds values
//      - Subtracts values
//      / Divides values
//      * Multiplies values


//  Functions

function addTogether(){
    // Functions start with the keyword function, the function name and arguments (if any) are enclosed in parentheses.
    let indexNumVar = 5000; // re assign a global scope var to a block scoped var
    let secondNumVar = 2500;
    let thirdVar = indexNumVar + secondNumVar;
    if (indexNumVar === 5000){ // using an if loop to do some simple math. if the given value returns true it runs the code block {}
            console.log(thirdVar); // console.log is your best friend in JS. Returns values to console.log
            // prompt(thirdVar); prompt appears  with the returned value. Disabled using comments
        }

    }

addTogether(); // calling a function after declaring it.