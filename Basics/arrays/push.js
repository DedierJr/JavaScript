const filterOddNumbers = (numbers) => {
  let result = []
  let index = 0
  while(index < numbers.length){
    if((numbers[index] % 2) !== 0 ){
      result.push(numbers[index])
      index++
    } else index++
  }
  return result
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = filterOddNumbers(numbers);

console.log(oddNumbers); // Deve retornar [1, 3, 5, 7, 9]
console.log(numbers);    // Deve permanecer [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
