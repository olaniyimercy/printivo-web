//Welcome Message for the User
const storedName = localStorage.getItem('userName');
    if (storedName) {
      document.getElementById('welcome-text').textContent = `Welcome to Printivo, ${storedName}`
    } else {
      document.getElementById('welcome-text').textContent = `Welcome to Printivo, ${storedName}`;
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
