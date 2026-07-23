/*
switch (умова){

case Варіант1:
    код 
    breake;

case Варіант2:
    код 
    breake;

default: 
 код 
}
   */

let day = "Вівторок";

switch (day) {
  case "Понеділок":
    console.log("Понеділок");
    break;
  case "Вівторок":
    console.log("Вівторок");
    break;
  case "Середа":
    console.log("Середа");
    break;
  default:
    console.log("Все інше");
}

let day = "Субота";

switch (day) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
    console.log("Робочі");
    break;
  case "Субота":
  case "Неділя":
    console.log("Вихідні");
    break;
  default:
    console.log("Все інше");
}

let num = 1;
switch (num) {
  case "1":
    console.log("1 рядок");
    break;

  case 1:
    console.log("Число");
    break;
}

let price = 11;

switch (true) {

  case (price <= 5 ):
    console.log("нічого не має");
    break;
  case (price <= 10):
    console.log("чай");
    break;
  case (price > 10 ):
    console.log("Є Кофе");
    break;
}
