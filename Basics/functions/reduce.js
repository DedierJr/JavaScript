function calculateTotalInvoice(items) {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity
  }, 0).toFixed(2)
}

const invoiceItems = [
    { item: "Laptop", price: 999.99, quantity: 1 },
    { item: "Smartphone", price: 599.99, quantity: 2 },
    { item: "Tablet", price: 399.99, quantity: 3 },
    { item: "Headphones", price: 99.99, quantity: 4 }
];

const totalInvoice = calculateTotalInvoice(invoiceItems);

console.log(totalInvoice);
// Saída esperada: 3999.88
