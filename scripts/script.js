//SignUp
function regBtn() {
    let checkpassword1 = document.getElementById('firstpassword').value
    let checkpassword2 = document.getElementById('confirm').value
      event.preventDefault();
      const name = document.getElementById('fullName').value;
    console.log(name);
    let userDetails = {
        name: name,
        password: checkpassword1
    }
    
    if (checkpassword1 !== checkpassword2 || name === '') {
        alert("Password didn't match")
    } else {
           window.location.href = 'signin.html';
        alert('Successfully SignUp')
    }
    localStorage.setItem('user', JSON.stringify(userDetails));
    console.log(user);
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



//Welcome Message for the User
const storedName = (localStorage.getItem('user')).name;
    if (storedName) {
      document.getElementById('welcome-text').textContent = `Welcome to Printivo, ${storedName}`
    } else {
      document.getElementById('welcome-text').textContent = `Welcome to Printivo, ${storedName}`;
    }

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


// Logout
function outBtn() {
        const signOut = document.getElementById('logout')
        if (signOut) {
            window.location.href = 'index.html'
            localStorage.clear()
            alert('You will be logged out of the page')
        } else {
            alert('Logout')
        }
    }

// This script fetches product data from an API and displays it on the homepage.
const getUser = async () => {
    fetch('https://fakestoreapi.com/products/')
    // Change data from API to JSON
    .then((result) => result.json())
    .then((data) => 
        {
            const allProducts = document.getElementById('products');
            data.forEach(product => {
               let eachProduct = document.createElement('div')
               eachProduct.setAttribute('id', 'home')
               eachProduct.innerHTML = `
               <img src="${product.image}"/>
               <h2>${product.title}</h2>
               <p>Price: $${product.price}</p>
               `
            allProducts.appendChild(eachProduct)
            });
        })
    .catch((err) => console.log("Error fetching data", err));
}
getUser()
