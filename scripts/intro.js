//Tyler Kness - Miller
//February 4, 2019
//INFO 2220
//Jon Holmes
//Assignment 3
//Purpose: This is script file to test arrays and loops, and to start writing functions.

alert("The script in the header has ran.");
var loadLast = "I loaded last.";
//Defining variables.
var holdArray;
var sum = 0;
var average = 0;

if (holdArray === undefined) {
    holdArray = [];
}
//Add elements to the array.
holdArray.push(34);
holdArray.push(5.5);
holdArray.push(33.5);
holdArray.push(46.5);
holdArray.push(59);
holdArray.push(64);
holdArray.push(43);
holdArray.push(64);
holdArray.push(48);
holdArray.push(49);
holdArray.push(40);
holdArray.push(59);
holdArray.push(44);
holdArray.push(54);
holdArray.push(19.5);
holdArray.push(25);
holdArray.push(69);
holdArray.push(23);

for (var i = 0; i < holdArray.length; i++) {
    sum += holdArray[i];
}
//Calculate averages.
average = sum / holdArray.length;
//Display average to the user.
alert("The average is: " + average + ".");
//Function that returns my name.
function getMyName() {
    return "Tyler Kness-Miller";
}