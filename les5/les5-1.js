/* if (умова) {
код якщо умова true
} else {
    якщо умова є хибною 
    } 
if (умова) {
код якщо умова true
} 
одразу код      
    */

let age = 19

if ( age <= 18) {
    console.log("Малити")
} else {
     console.log("Дорослий")
}
//////////////
let age = 19

if ( age <= 18) {
    console.log("Малити")
} 

console.log("Дорослий")
///////////////
/* 90 + - задовільно
75 + - добре 
60 + - задовільно 
60 - - не здав 

if (умова) {
} 
else if ( умова) {
}
else if (умова) {
} else {
    }
*/

let num = 76

if ( num >= 90) {
    console.log("Відмінно")
} else if (num >= 75) {
    console.log("Добре")
}else if (num >= 60) {
    console.log("задовільно")
}else {
    console.log("не здав")
}
console.log("Код після if")


true&&true = true
true&&false = false
false&&true = true 
false&&false

let num = 104

if (num >=0 && num <60  ){
    console.log("не здав")
} else if (num >= 60 && num < 75) {
  console.log("задовільно")
} else if (num >= 75 && num<90) {
    console.log("Добре")
} else if (num>=90 && num <=100){
     console.log("Відмінно")
} else {
    console.log("Помилка")
}

true || true  = true 
true || false = true 
false || true = true 
false || false 

let num = 104

if (num >=0 || num <60  ){
    console.log("не здав")
} else if (num >= 60 || num < 75) {
  console.log("задовільно")
} else if (num >= 75 || num<90) {
    console.log("Добре")
} else if (num>=90 || num <=100){
     console.log("Відмінно")
} else {
    console.log("Помилка")
}




let num = 65

if (num >=0 && num <60  ){
    console.log("не здав")
} else if (num >= 60 && num < 75) {
  console.log("задовільно")
} else if (num >= 75 && num<90) {
    console.log("Добре")
} else if (num>=90 && num <=100){
     console.log("Відмінно")
} else {
    console.log("Помилка")
}


/* if () {

if() {

    if () {

    } 
    else {
         
        }

    }
} else {

 } */


    // якщо тобі 18 і у тебе є квиток = проходь інакше ні 

    let age = 18
    let hasTiket = false;

    if (age >= 18) {
        if (hasTiket){
            console.log("проходь")
        } else {
            console.log("У тебе не має квитка")
        }
    } else {
        console.log("Немає дозволу")
    }


    let age1 = 18
    let hasTiket = false ;

    if (age1 >= 18 && hasTiket ) {
         console.log("проходь")
    } else {
        console.log("Немає дозволу або не має квитка")}

