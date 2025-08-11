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

    if (b !== storedPassword) {
         alert('Invalid')
    } else {
        alert('Valid')
        if (a === '' && b === '') {
            alert('Invalid credentials, please try again');
        } else {
        
            window.location.href = 'homepage.html';
            alert('Successfully Logged In');
        }
    }
}
