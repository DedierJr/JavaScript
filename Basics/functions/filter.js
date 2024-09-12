function filterProductsByPrice(products, minPrice, maxPrice) {
    return products.filter(product => {
      return product.price >= minPrice && product.price <= maxPrice
    })
}

const products = [
    { name: "Laptop", price: 999.99 },
    { name: "Smartphone", price: 599.99 },
    { name: "Tablet", price: 399.99 },
    { name: "Smartwatch", price: 199.99 },
    { name: "Headphones", price: 99.99 }
];

const filteredProducts = filterProductsByPrice(products, 100, 600);

console.log(filteredProducts);
// Saída esperada:
// [
//     { name: "Smartphone", price: 599.99 },
//     { name: "Tablet", price: 399.99 },
//     { name: "Smartwatch", price: 199.99 }
// ]
