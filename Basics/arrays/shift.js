const serveFirstNPeople = (queue, n) => {
  // Verifica se n é maior que o tamanho da fila e ajusta
  n = n <= queue.length ? n : queue.length;
  let result = [];

  // Remove n pessoas da fila
  while (result.length < n) {
    let shifted = queue.shift();
    result.push(shifted);
  }

  return result;
};

let queue = ["Alice", "Bob", "Charlie", "David", "Eve"];
let servedPeople = serveFirstNPeople(queue, 3);

console.log(servedPeople); // Deve retornar ["Alice", "Bob", "Charlie"]
console.log(queue);        // Deve permanecer ["David", "Eve"]

servedPeople = serveFirstNPeople(queue, 5);
console.log(servedPeople); // Deve retornar ["David", "Eve"]
console.log(queue);        // Deve permanecer []
