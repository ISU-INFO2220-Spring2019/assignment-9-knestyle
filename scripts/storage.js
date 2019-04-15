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

//Loads click events.
window.onload = loader;
function loader() {
    if (localStorage.getItem("userName") !== null) {
        var name = document.getElementById("txtUserName");
        name.value = localStorage.getItem("userName");
    }

    var login = document.getElementById("btnLogin");
    login.onclick = loginUser;

    var forget = document.getElementById("btnForgetMe");
    forget.onclick = forgetUser;
}