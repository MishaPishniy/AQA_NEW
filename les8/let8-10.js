let number = [ 11,1 ,8,3]

const bigNumbers = number.map((num) => num * 2)
console.log(bigNumbers)

number.unshift(1000)
console.log(number)
console.log("----------")
console.log(bigNumbers)

console.log("----------")
let number = [ 11,1 ,8,3]
const letNumbers = number.slice()
console.log(letNumbers)