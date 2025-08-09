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
               <p>Price${product.price}</p>
               `
            allProducts.appendChild(eachProduct)
            });
        })
    .catch((err) => console.log("Error fetching data", err));
}
getUser()

// Welcome message
const welcomeText = document.getElementById('welcome-text');
const username = localStorage.getItem('username') || 'Guest';
welcomeText.textContent = `Welcome ${username}`;