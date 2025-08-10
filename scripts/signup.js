//SignUp
function regBtn() {
    let checkpassword1 = document.getElementById('password').value
    let checkpassword2 = document.getElementById('confirm').value
      event.preventDefault();
      const name = document.getElementById('fullName').value;
    console.log(name);
    
    if (checkpassword1 === '') {
        alert('Fill the form')
    } else {
          window.location.href = 'signin.html';
        alert('Successfully SignUp')
    }
    if (checkpassword1 !== checkpassword2) {
        alert("Password didn't match")
    } else {
          return
    }
      localStorage.setItem('userName', name);
}

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
