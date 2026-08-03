function first() {
  console.log("Функція first");
  second()
  console.log("Кінець first");
}

function second() {
  console.log("Початок second");
  third();
  console.log("Кінець second");
}

function third() {
  console.log("Функція third");
}

first();


function repit (number)
{ 
    if (number === 0){
        return;
    }
    console.log(number)
    repit(number-1)
  
}
repit(5)




