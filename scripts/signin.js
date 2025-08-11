// This script works on the password strength
const passwordInput = document.getElementById('passwordIn');
const checker = document.getElementById('displayStrength');
console.log(checker);
console.log(passwordInput);

passwordInput.addEventListener('input', function () {
    const passwordValue = passwordInput.value;
    console.log(passwordValue);
    
    const includeLetters = /[a-zA-Z]/;
    const includeNumbers = /[0-9]/;
    const includeCharacters = /[~,!@$#%&*()_+={}?><;:/-^]/;

    const letters = includeLetters.test(passwordValue);
    const numbers = includeNumbers.test(passwordValue);
    const characters = includeCharacters.test(passwordValue);
    
    if (!letters || !numbers || !characters) {
        checker.textContent = 'Must contain numbers, alphabet and special characters';
        checker.style.color = 'red';
    }else if (passwordValue.length < 5) {
        checker.textContent = 'Weak';
        checker.style.color = 'red';
    }else if (passwordValue.length >= 5 && passwordValue.length <= 8) {
        checker.textContent = 'Medium';
        checker.style.color = 'yellow';
    }else {
        checker.textContent = 'Strong';
        checker.style.color = 'Green';
    }
});

// Login
function login() {
    let a = document.getElementById('username').value;
    let b = document.getElementById('passwordIn').value; 
    let optin = document.getElementById('submit')
    console.log(optin);
    
    if (a === '' && b === '') {
        alert('Invalid credentials, please try again');
    } else {
        
        window.location.href = 'homepage.html';
        alert('Successfully Logged In');
    }
}