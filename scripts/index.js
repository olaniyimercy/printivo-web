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