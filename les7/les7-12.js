(
  function () {
  console.log("Функція виконалася одразу");
}
)
();


////
(() => {
  console.log("Стрілкова IIFE виконалася");
})();

////
(function (name) {
  console.log(`Привіт, ${name}!`);
})("Михайло");


///
const result = (function (a, b) {
  return a + b;
})(10, 20);

console.log(result);



/////

(function () {
  const name = "MIsha";
  console.log(`Привіт, ${name}!`);
})();

console.log(name)