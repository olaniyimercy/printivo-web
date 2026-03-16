// Login
function login() {
    let a = document.getElementById('username').value;
    let b = document.getElementById('passwordIn').value;
    
    if (a === '' || b === '') {
        alert('Please input the appropriate details');
        return;
    }
    
    let userString = localStorage.getItem('user');
    if (!userString) {
        alert('No user found. Please sign up first.');
        return;
    }
    
    let used = JSON.parse(userString);
    let storedPassword = used.password;
    
    if (b !== storedPassword) {
        alert('Incorrect Password');
    } else {
        alert('Login successful');
        window.location.href = 'homepage.html';
    }
}