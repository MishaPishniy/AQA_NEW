function add(number) {
  console.log(number);
  if (number > 1){
    add(number - 5)
  }
}

add(5);
