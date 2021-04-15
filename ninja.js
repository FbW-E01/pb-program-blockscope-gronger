// 1. 

const determiner = 1;

if (determiner < 0) {
    const x = "Less than 0";
    console.log(x);
} else if (determiner >= 0) {
    x = "More than 0";
    console.log(x);
}


// 2.

if (determiner >= 0) {
    const updater = "Greater or equal to 0";
    const message = "Positive Integer";
    console.log(message);
} else if (determiner < 0) {
    updater = "Less than 0";
}


// Question
 /* The message would not print, as it only exists within the local scope of the if else statement. Only global variables (declares outside of functions and so on) print regardless of whether we are in a block statement or not */

// 3.

// You would use an if statement if there are more possible outcomes. I think??? :S