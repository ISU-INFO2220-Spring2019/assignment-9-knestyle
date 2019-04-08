//Tyler Kness - Miller
//February 11, 2019
//INFO 2220
//Jon Holmes
//Assignment 4
//Purpose: This is script file to test functions and objects.

var personHolder;
var characters;
//Person object.

function Person(fName, lName){
    this.FirstName = fName;
    this.LastName = lName;
    this.StepsToTake;
    this.Age;
    this.TakeSteps = function() {
        var temp = "";
        for (var i = 1; i <= this.StepsToTake; i++) {
            temp += i + " ";
        }
        return temp;
    };
    this.OddAges = function() {
        var sum = 0;
        for (var i = 1; i <= this.Age; i++) {
            //When modding by 2, odd numbers always have a remainder of 1.
            if (i % 2 == 1) {
                sum += i;
            }
        }
        return sum;
    };
    
};
//Converter object that holds methods
//to convert F to C and vice versa.
function Converter() {
    this.getCValue = function (fahr) {
        //https://www.rapidtables.com/convert/temperature/how-fahrenheit-to-celsius.html
        return (fahr - 32) * (5 / 9);
    };

    this.getFValue = function () {
        var cel = arguments[0];
        //https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html
        return (cel * (9 / 5)) + 32;
    };
};

//Function that uses a prompt to get the user's name
//and show it in an alert.
function sayHello() {
    var result = prompt("What is your name?", "Cornelius");
    alert("Hello " + result + "!");
};

//Function that accepta a greeting, and displays the 
//greeting with a name that is obtained using a prompt.
function greet(greeting) {
    var name = prompt("Identify yourself, user.", "Sam Flynn");
    alert(greeting + ", " + name + ".");
};

//Function that takes in 2 numbers and displays the output of
//concatenating, adding, subtracting, multiplying, and dividing.
function doMaths(numOne, numTwo) {
    var concatenate = numOne + "" + numTwo;
    var added = numOne + numTwo;
    var subtracted = numOne - numTwo;
    var multiplied = numOne * numTwo;
    var divided = numOne / numTwo;

    alert(concatenate + "\r\n" + added + "\r\n" +
        subtracted + "\r\n" + multiplied + "\r\n" + divided);
};
//Creates a person from values given by the user through prompts.
function createPerson() {
    var fName = prompt("Enter your first name: ", "Kevin");
    var lName = prompt("Enter your last name: ", "Flynn");
    var age = prompt("Enter your age (Valid Ages are in the range of 0-120): ", 25);
    //Validates the given date. If not valid, give a default one.
    if (age === typeof (number) && age <= 120 && age >= 0) {
        personHolder = new Person(fName, lName);
        personHolder.Age = age;
    }
    else {
        personHolder = new Person(fName, lName);
        personHolder.Age = 19;
    }
};

function showSteps() {
    if (personHolder === undefined) {
        alert("Object does not exist at the moment.")
    }
    else {
        personHolder.StepsToTake = 10;
        var result = "";
        result = personHolder.TakeSteps();
        var fullName = personHolder.FirstName + " " + personHolder.LastName;
        alert(fullName + " took steps \r\n" + result);
    }
};

//Function that converts Fahrenheit to Celsius
function getDegreesInC(value) {
    var conv = new Converter();
    alert(conv.getCValue(value));
}

//Function that converts Celsius to Fahrenheit
function getDegreesInF(value) {
    var conv = new Converter();
    alert(conv.getFValue(value));
}
//Function that fills the characters array with given data.
function fillCharacterArray() {
    characters = [];
    //Create arrays to hold given data.
    var fNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
    var lNames = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
    var allAges = [36, 34, 7, 34, 32, 8];
    //Lopp through data and create a new person, add to the array.
    for (var i = 0; i < 6; i++) {
        var p = new Person(fNames[i], lNames[i]);
        p.Age = allAges[i];

        characters[i] = p;
    }
}
//Function that looks for a character at a given index and
//displays some information about them.
function getCharacterAt(index) {
    if (characters === undefined) {
        //array not created, display error.
        alert("Create the array first by clicking the button.");
    }
    else {
        //Store the character, display info to user.
        var character = characters[index];
        alert(character.FirstName + ", your odd age sum is: " + character.OddAges());
    }
}