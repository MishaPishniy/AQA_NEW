/* 
for (лічильник ; умова ;  інкримент) {
код циклу
} */


for ( let i=0 ; i < 5; i+=2) {
    console.log(i)
}


/* 
let i = 1

while (умова) {

i++
}
*/


let i = 0
while ( i <5){
    console.log(i)
    i++
}


let number = 0 
while (number < 2){
    number = Math.random();
    console.log(number)

}


/* do {
код 
лічильник
}
while ()

*/

let num = 5

do {
    console.log(num)
    num++
}
while(num<10)


    let number = 1

    do {
        if (number === 5) {
           break;
        } 
        console.log(number)
        number++
    }
    while(number < 10)



    let number = 1

    do {

      
        number++
        if (number === 3) {
           continue;
        } 
         console.log(number)
      
    }
    while(number < 10)


        for (let i=0 ; i < 5 ; i++){
            if (i === 2) {
                continue
            }
            console.log(i)
        }