document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
        
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            handleSignupValidation();
        });        
    } else {
        console.log("Something went wrong on signup form");
    }

    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('input', function () {
        updatePasswordStrength(passwordInput.value);
    });

});

function updatePasswordStrength(password) {
    const strengthText = document.getElementById('strengthText');
    const passwordStrength = calculatePasswordStrength(password);

    switch (passwordStrength) {
        case 0:
            strengthText.innerText = 'Weak';
            strengthText.style.color = '#ff4d4d'; 
            break;
        case 1:
            strengthText.innerText = 'Moderate';
            strengthText.style.color = '#ffaa00'; 
            break;
        case 2:
            strengthText.innerText = 'Strong';
            strengthText.style.color = '#4caf50'; 
            break;
        default:
            strengthText.innerText = '';
    }
}

function calculatePasswordStrength(password) {

    if (password.length < 6) {
        return 0; 
    } else if (password.length < 10) {
        return 1; 
    } else {
        return 2; 
    }
}

function handleSignupValidation() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const errorElement = document.getElementById('signupError');

    
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorElement.innerText = 'Please fill in all fields.';
    } else if (!isValidUsername(username)) {
        errorElement.innerText = 'Username can only contain alphanumeric characters.';
    } else if (!isValidEmail(email)) {
        errorElement.innerText = 'Invalid email address format.';
    } else if (password.length < 6 || !containsLettersAndNumbers(password)) {
        errorElement.innerText = 'Password must be at least 6 characters long and contain both letters and numbers.';
    } else if (password !== confirmPassword) {
        errorElement.innerText = 'Passwords do not match.';
    } else {
        //errorElement.innerText = '';
        alert('SignUp Successful.....!')
        
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
