//Tyler Kness - Miller
//February 18, 2019
//INFO 2220
//Jon Holmes
//Assignment 5
//Purpose: This is script file to use the DOM to manipulate and add elements.

//Declare arrays.
var fNames = ["Sam", "James", "Hikaru", "William", "Jacob", "Poe"];
var lNames = ["Flynn", "Kirk", "Sulu", "Adama", "Keyes", "Dameron"];
var ages = [25, 40, 45, 60, 38, 27];

//Function that gets the inner text of a particular HTML element.
function showInnerText() {
    alert(document.getElementById("pOne").innerText);
}

//Function that gets the inner HTML of a particular HTML element.
function showInnerHTML() {
    alert(document.getElementById("pOne").innerHTML);
}

//Function that appends an index number to each list item. 
function numberList() {
    var listItems = document.getElementsByTagName("li");
    //var test = "";
    for (var i = 0; i < listItems.length; i++) {
        
        listItems[i].innerText += " " + (i + 1);
        //test += listItems[i].innerText + "\r\n";
    }
    alert(test);
}

//Function that changes the class of every other table row.
function markRows() {
    var tableRows = document.getElementsByTagName("tr");
    for (var i = 0; i < tableRows.length; i++) {
        //Uses mod to choose every other row in the collection variable.
        if (i % 2 == 1) {
            tableRows[i].className = "other";
        }
    }
}

//Function that uses the arrays at the top to add rows.
function addRows() {
    //Get the table using the ID.
    var table = document.getElementById("tblAddRows");
    for (var i = 0; i < fNames.length; i++) {
        //Add a row to the table.
        var row = table.insertRow(i + 1);
        //Add cells to the given row.
        var cOne = row.insertCell(0);
        cOne.innerHTML = fNames[i];
        var cTwo = row.insertCell(1);
        cTwo.innerHTML = lNames[i];
        var cThree = row.insertCell(2);
        cThree.innerHTML = ages[i];
        //Change every other row's class to other.
        if (i % 2 == 1) {
            row.className = "other";
        }
    }
}

//Function that adds a div with the success class to the div
//in the assignment.
function addSuccess() {
    //Create and modify a new div element.
    var divider = document.createElement("div");
    divider.className = "success";
    divider.innerHTML = "You guessed it! It's a success message!";
    //Add it to the div in the HTML page
    var mainDiv = document.getElementById("divMessages");
    mainDiv.append(divider);
}

//Function that adds a div with the warning class to the div
//in the assignment.
function addWarning() {
    //Create and modify a new div element.
    var divider = document.createElement("div");
    divider.className = "warning";
    divider.innerHTML = "Better watch out, it's a warning message!";
    //Add it to the div in the HTML page.
    var mainDiv = document.getElementById("divMessages");
    mainDiv.append(divider);
}

//Function that adds a div with the error class to the div
//in the assignment.
function addError() {
    //Create and modify a new div element.
    var divider = document.createElement("div");
    divider.className = "error";
    divider.innerHTML = "Dang it, it's an error message!";
    //Add it to the div in the HTML page.
    var mainDiv = document.getElementById("divMessages");
    mainDiv.append(divider);
}