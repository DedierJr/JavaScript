function findProductByName(products, productName) {
    return products.find( product => product.name.toLowerCase() === productName.toLowerCase())
}

const products = [
    { name: "Laptop", price: 999.99 },
    { name: "Smartphone", price: 599.99 },
    { name: "Tablet", price: 399.99 },
    { name: "Smartwatch", price: 199.99 },
    { name: "Headphones", price: 99.99 }
];

const product = findProductByName(products, "Tablet");

console.log(product);
// Saída esperada:
// { name: "Tablet", price: 399.99 }
