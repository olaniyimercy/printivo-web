//Welcome Message for the User
let userString = localStorage.getItem('user');
if (userString) {
    let used = JSON.parse(userString);
    let storedName = used.name;
    document.getElementById('welcome-text').textContent = `Welcome to Printivo, ${storedName}`;
    } else {
      document.getElementById('welcome-text').textContent = `Welcome to Printivo, ${storedName}`;
}

// Logout
function outBtn() {
        const signOut = document.getElementById('logout')
        if (signOut) {
            window.location.href = 'signin.html'
            alert('You will be logged out of the page')
        } else {
            alert('Logout')
        }
}    

// Signout
function createBack() {
        const home = document.getElementById('signout')
        if (home) {
            window.location.href = 'index.html'
            alert('You will be signout of the page ')
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