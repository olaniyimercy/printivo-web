// Login
function login() {
    let a = document.getElementById('username').value;
    let b = document.getElementById('passwordIn').value;
    let userString = localStorage.getItem('user');
    let optin = document.getElementById('submit')
    console.log(optin);

    let used = JSON.parse(userString);
    let storedPassword = used.password;
    console.log(storedPassword);
    
    if (a === '' || b === '') {
        alert('Please input the approriate details')
    } else {
         if (b !== storedPassword) {
           alert('Incorrect Password')
         } else {
             window.location.href = 'homepage.html'
             alert('Login successfull')
       }
    }
}
