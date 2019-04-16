var peopleArray = new Array();

//Function that checks the values entered and sees if they match what is required.
function loginUser(e) {
    //Get values out of inputs.
    var user = document.getElementById("txtUserName").value;
    var password = document.getElementById("txtPassword").value;
    //Checks if they are correct.
    var success = true;
    if (user != "weaver") { success = false; }
    if (password != "tester") { success = false; }
    //Check if successful;
    if (success == true) {
        alert("Login successful, user.");
        if (document.getElementById("chkRememberMe").checked == true) {
            localStorage.setItem("userName", user);
        }
    }
    else {
        alert("I regret to inform you that your attempt to login...failed.");
    }
}

//Click event that clears the browser starage containing the user name for this site.
function forgetUser(e) {
    localStorage.removeItem("userName");
}

//Function to grab values out of inputs and create a person, and add to the array and to LocalStorage.
function addtoList(e) {
    if (peopleArray == null) {
        peopleArray = new Array();
    }
    var pname = document.getElementById("txtName").value;
    
    var pphone = document.getElementById("txtPhone").value;
    
    var peage = document.getElementById("txtAge").value;
    //Find which radio button was checked, and grab the value out of it.
    //I have a radio already checked by default, so this will never be empty.
    var radios = document.forms.people.elements.group;
    var pchecked = undefined;
    for (var i = 0; i < radios.length; i++) {
        var radio = radios[i];
        if (radio.checked) {
            pchecked = radio.value;
            break;
        }
    }
    
    var k = JSON.stringify({ "name": pname, "age": peage, "phone": pphone, "group": pchecked });
    peopleArray.push(JSON.stringify(k));
    localStorage.setItem("peopleList", JSON.stringify(peopleArray));
    fillPeopleList();
}

//Function to fill the list with people from the array. 
function fillPeopleList() {
    var list = $('#peopleList');
    list.empty();
    for (var i = 0; i < peopleArray.length; i++) {
        var k = peopleArray[i];
        var j = JSON.parse(k);
        var person = JSON.parse(j);
        var listItem = document.createElement("li");
        listItem.innerText = "Name: " + person.name + " Age: " + person.age + "\nPhone: " + person.phone + " Group: " + person.group;
        list.append(listItem);
    }

    var list2 = $('#lstUsers');
    list2.empty();
    for (var i = 0; i < peopleArray.length; i++) {
        var k = peopleArray[i];
        var j = JSON.parse(k);
        var person = JSON.parse(j);
        var listItem = document.createElement("li");
        listItem.innerText = "Name: " + person.name + " Age: " + person.age + "\nPhone: " + person.phone + " Group: " + person.group;
        list2.append(listItem);
    }
}

function clearListStorage() {
    localStorage.removeItem("peopleList");
}

//Loads click events.
window.onload = loader;
function loader() {
    if (localStorage.getItem("userName") !== null) {
        var name = document.getElementById("txtUserName");
        name.value = localStorage.getItem("userName");
    }
    peopleArray = JSON.parse(localStorage.getItem("peopleList"));
    if (peopleArray != null) {
        fillPeopleList();
    }
    else {
        peopleArray = new Array();
    }
    var login = document.getElementById("btnLogin");
    login.onclick = loginUser;

    var forget = document.getElementById("btnForgetMe");
    forget.onclick = forgetUser;

    var addPerson = document.getElementById("btnSubmitPerson");
    addPerson.onclick = addtoList;

    var clear = document.getElementById("btnClearStorage");
    clear.onclick = clearListStorage;
}