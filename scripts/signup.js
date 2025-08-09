// This script works on the password strength
const passwordInput = document.getElementById('password');
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


function regBtn(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let userDetails = {
        name: name,
        email: email,
        password: password
    }
    localStorage.setItem("user", JSON.stringify(userDetails))
    let mango = JSON.parse(localStorage.getItem("user")).email
    console.log(mango);
}