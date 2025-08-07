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
               <h2>${product.title}</h2>
               <img src="${product.image}"/>
               <p>Price${product.price}</p>
                <span>${product.description}</span>
               `
            allProducts.appendChild(eachProduct)
            });
        })
    .catch((err) => console.log("Error fetching data", err));
}
getUser()