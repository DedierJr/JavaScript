const words = ["apple", "banana", "cherry", "date", "fig", "grape"];
const targetWord = "cherry";

const findWord = (words, targetWord) => {
  return words.indexOf(targetWord)
}

console.log(findWord(words, targetWord)); // Deve retornar 2


// Crie uma função chamada findSubstringIndices que recebe duas strings, text e substring. A função deve retornar um array contendo todos os índices em que a substring aparece dentro de text. Se a substring não for encontrada, a função deve retornar um array vazio.

const text = "This is a test string and this is another test string.";
const substring = "test";

const findSubstringIndices = (text, substring) => {
  let indices = []
  let startIndex = 0
  let index
  
  while((index = text.indexOf(substring, startIndex)) !== -1){
    indices.push(index)
    startIndex = index + 1
  }
  return indices
}

console.log(findSubstringIndices(text, substring)); // Deve retornar [10, 40]

