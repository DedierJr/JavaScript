function wordFrequency(str) {
    const arr = str.replace(/[^\w\s]/g, '').toLowerCase().split(' ')
    const obj = {}
    arr.forEach(element => {
      if(obj[element]) obj[element] += 1
      else obj[element] = 1
    })
    return obj
}

const text = "Hello world! Hello everyone. This is a test. Hello, hello world.";
const frequency = wordFrequency(text);

console.log(frequency);
// Saída esperada:
// {
//   hello: 4,
//   world: 2,
//   everyone: 1,
//   this: 1,
//   is: 1,
//   a: 1,
//   test: 1
// }
