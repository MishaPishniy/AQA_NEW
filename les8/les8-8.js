const number = [ 11,1 ,8,3,10, 7 , 9 , 50 , 70 ,100]
const result = number.find((num) => num > 10)
console.log(result)

const bigNumbers = number.filter((num) => num > 11)
console.log(bigNumbers)