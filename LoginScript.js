document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    
    if(loginForm){
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            handleLoginValidation();

        });
    }else{
        console.log("Somthing went wrong on login form");
    }

});

function handleLoginValidation() {
    const username = document.getElementById('usernameLogin').value.trim();
    const password = document.getElementById('passwordLogin').value.trim();
    const errorElement = document.getElementById('loginError');

    if (username === '' || password === '') {
        errorElement.innerText = 'Please enter both username/email and password.';
    } else {
         
        alert('Login Successful...!')
    }
}

function isValidUsername(username) {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(username);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function containsLettersAndNumbers(str) {
    return /[a-zA-Z]/.test(str) && /\d/.test(str);
}
