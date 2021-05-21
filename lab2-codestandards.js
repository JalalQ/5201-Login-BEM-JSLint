//LAB 2: Login Page
//alert("Lab 2");//DELETE ONCE CONNECTED.

window.onload = function () {

    //bonus activity.
    "use strict";

    var formHandle = document.forms.authForm;

    var username = document.getElementById("username");
    var password = document.getElementById("password");

    var userOutput = document.getElementsByClassName("message__username");
    var passOutput = document.getElementsByClassName("message__password");

    formHandle.onsubmit = function processForm() {

        event.preventDefault();

        var userValue = username.value;
        var passValue = password.value;

        //initialization of validity booleans
        var userValid = false;
        var passValid = false;

        if (userValue === "" || userValue === null) {
            //username.style.background = "red";
            username.classList.add("authForm__input_error"); //bonus activity
        } else {
            //refresh the previous red background/
            //username.style.background = "#fff";
            username.classList.add("authForm__input_noError"); //bonus activity
            userValid = true;
        }

        if (passValue === "" || passValue === null) {
            //password.style.background = "red";
            password.classList.add("authForm__input_error"); //bonus activity
        } else {
            //refresh the previous red background/
            //password.style.background = "#fff";
            password.classList.add("authForm__input_noError"); //bonus activity
            passValid = true;
        }

        if (userValid === false) {
            username.focus();
            return false;
        }
        if (passValid === false) {
            password.focus();
            return false;
        }

        userOutput[0].innerHTML += "User Name: <strong>" + username.value;
        userOutput[0].innerHTML += "</strong>";

        passOutput[0].innerHTML = "<br> Password: <strong>" + password.value;
        passOutput[0].innerHTML += "</strong>";

        //the text inside the input box should be empty on successful login
        username.value = "";
        password.value = "";


    };

};