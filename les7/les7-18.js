function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); 

////
function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(5)(3)); // 8