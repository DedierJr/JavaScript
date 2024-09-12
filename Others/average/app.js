const multiplyBy = (multiplier) => {
   return function (number) {
      return number * multiplier
   }
}

const double = multiplyBy(2)
const triple = multiplyBy(3)
const halve = multiplyBy(0.5)


console.log(double(2))
console.log(triple(2))
console.log(halve(2))