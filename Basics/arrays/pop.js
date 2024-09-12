const removeLastThreeNames = (names) => {
  let result = [];
  if (names.length >= 3) {
    result.unshift(names.pop());
    result.unshift(names.pop());
    result.unshift(names.pop());
  }
  return result;
}

let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
let lastThreeNames = removeLastThreeNames(names);

console.log(lastThreeNames); // Deve retornar ["David", "Eve", "Frank"]
console.log(names);          // Deve permanecer ["Alice", "Bob", "Charlie"]
