//Tyler Kness-Miller
//INFO 2220
//Professor Holmes
//17 April 2019

var peopleArray = new Array();

var gindex = -1;

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
    //if the array is null, it means there was not one on LocalStorage. Instantiate it.
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
    //See if we are editing a person or not.
    if (gindex == -1) {
        peopleArray.push(JSON.stringify(k));
    }
    else {
        peopleArray[gindex] = JSON.stringify(k);
        gindex = -1;
        document.getElementById("btnSubmitPerson").value = "Add Person";
    }
    //Add the array back to storage, fill the people lists.
    localStorage.setItem("peopleList", JSON.stringify(peopleArray));
    fillPeopleList();
}

//Function that allows for the editing of a person when the edit button is clicked.
function editPerson(person, index) {
    //Using "Bind" allows for this, but arguments passed in get weird.

    //Grab the values from the object passed in, set values to the form.
    var pname = document.getElementById("txtName");
    pname.value = person[0].name;
    var pphone = document.getElementById("txtPhone");
    pphone.value = person[0].phone;
    var peage = document.getElementById("txtAge");
    peage.value = person[0].age;
    //Loops through and checks value of the radio buttons, sets the one matching the group property of the person to true.
    var radios = document.forms.people.elements.group;
    for (var i = 0; i < radios.length; i++) {
        var radio = radios[i];
        if (radio.value == person[0].group) {
            radio.checked = true;
        }
    }
    //Set global index to allow the user to edit the person.
    gindex = person[1];

    document.getElementById("btnSubmitPerson").value = "Submit Changes";
}

//Function to fill the list with people from the array. 
function fillPeopleList() {
    var list = $('#peopleList');
    list.empty();
    for (var i = 0; i < peopleArray.length; i++) {
        //Parse out the array and the person inside it. I've found that I needed to parse this out twice.
        var k = peopleArray[i];
        var j = JSON.parse(k);
        var person = JSON.parse(j);
        var listItem = document.createElement("li");
        listItem.innerText = "Name: " + person.name + " Age: " + person.age + "\nPhone: " + person.phone + " Group: " + person.group;

        //Add an edit button to the person, bind the click event to a function with arguments. 
        var btn = document.createElement("button");
        let func = editPerson.bind(0, [person, i]);
        btn.addEventListener("click", func);
        btn.innerText = "Edit";
        listItem.append(btn);

        //Add a background image to serve as the "profile pic".
        listItem.style.backgroundImage = "url('images/profile-pic.jpg')";
        listItem.style.backgroundSize = "56px 56px";
        listItem.style.backgroundRepeat = "no-repeat";
        listItem.style.paddingLeft = "58px";

        //Add to the list.
        list.append(listItem);
    }

    var list2 = $('#lstUsers');
    list2.empty();
    for (var i = 0; i < peopleArray.length; i++) {
        //Parse out the array and the person inside it. I've found that I needed to parse this out twice.
        var k = peopleArray[i];
        var j = JSON.parse(k);
        var person = JSON.parse(j);
        var listItem = document.createElement("li");
        listItem.innerText = "Name: " + person.name + " Age: " + person.age + "\nPhone: " + person.phone + " Group: " + person.group;

        //Add a background image to serve as the "profile pic". 
        listItem.style.backgroundImage = "url('images/profile-pic.jpg')";
        listItem.style.backgroundSize = "50px 50px";
        listItem.style.backgroundRepeat = "no-repeat";
        listItem.style.paddingLeft = "55px";
        
        list2.append(listItem);
    }
}

//Function that removes the people array from storage. 
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
    //Set click event for the Login Button.
    var login = document.getElementById("btnLogin");
    login.onclick = loginUser;

    //Set the click event for the Forget Me button.
    var forget = document.getElementById("btnForgetMe");
    forget.onclick = forgetUser;

    //Set the click event for the Add Person button.
    var addPerson = document.getElementById("btnSubmitPerson");
    addPerson.onclick = addtoList;

    //Set the click event for the Clear Storage button.
    var clear = document.getElementById("btnClearStorage");
    clear.onclick = clearListStorage;
}