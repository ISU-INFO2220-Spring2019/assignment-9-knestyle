//Tyler Kness - Miller
//February 25, 2019
//INFO 2220
//Jon Holmes
//Assignment 6
//Purpose: This is script file to test the use of events.

//Function that updates the div with the current coordinates of the mouse.
function moveMouse(e) {
    //Get current coordinates of mouse.
    var tempX = e.pageX;
    var tempY = e.pageY;
    //Change the text of the div.
    document.getElementById("mouseCoords").innerText = "x: " + tempX + " y: " + tempY;
}

//Function that changes the class of the element when clicked.
function mousePressed(e) {
    e = e || window.event;
    var trgt = e.target || e.srcElement;
    //Set class name of element.
    trgt.className = "pressed";
    event.stopPropagation();
}

//Function that resets the class name of the element.
function resetClass(e) {
    e = e || window.event;
    var trgt = e.target || e.srcElement;
    //Reset clas name of element
    trgt.className = "";
}

//Function that clanges the class name of the element when hovered over.
function mouseHeadOver(e) {
    e = e || window.event;
    var trgt = e.target || e.srcElement;
    //Change class name of element
    trgt.className = "overHead";
}

//Function that loads all event listeners.
window.onload = loader;
function loader() {
    //Set section listeners.
    var section = document.getElementById("secMouser");
    section.onmousemove = moveMouse;
    section.onmousedown = mousePressed;
    section.onmouseup = resetClass;
    //Set header listeners.
    var header = document.getElementsByTagName("h1");
    header[0].onmouseover = mouseHeadOver;
    header[0].onmouseout = resetClass;
    //set button listeners.
    var button = document.getElementById("btnSayHello");
    //Anonymous functions
    button.onclick = function () { alert("Greetings user."); }
    button.onmousemove = function (e) {
        e = e || window.event;
        //Stops bubbling.
        event.stopPropagation();

        document.getElementById("mouseCoords").innerText = "You are currently over the button.";
    }
}