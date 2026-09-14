const price = 100;
const procent = price * 0.1;
const finalPrice = price - procent;
console.log(finalPrice);

function calculateDiscaunt(price) {
  const procent = price * 0.1;
  return price - procent;
}
const finalprice = calculateDiscaunt(100);
console.log(finalprice);

console.log(calculateDiscaunt(100));
console.log(calculateDiscaunt(30));

Hello();
function Hello() {
  console.log('Hello');
}
