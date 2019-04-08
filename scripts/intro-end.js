//Tyler Kness - Miller
//February 4, 2019
//INFO 2220
//Jon Holmes
//Assignment 3
//Purpose: This is script file to test calling functions from other pages, and test out prompts/confirms.

var promptResult = prompt("Enter a greeting: ", "Why hello there");
//Detect if the user pressed cancel.
if (!(confirm(promptResult + " " + getMyName() + "!"))) {
    alert("How dare you press cancel!");
}

//Change loadLast variable.
loadLast = "I really am last...";