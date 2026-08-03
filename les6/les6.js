for ( let i= 0 ; i < 3 ; i++) {
    console.log(`i = ${i}`)
    for (let j = 0 ; j <5 ; j++) {
        console.log(`j = ${j} i = ${i}`)
    }
}

const number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} × ${i} = ${number * i}`);
}

for ( let i= 1 ; i < 3 ; i++) {
    console.log(`i = ${i}`)
    for (let j = 1 ; j <11 ; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
    }
}


let i = 1 

while ( i < 3 ) {
    let j = 5 
    console.log(`i=${i}`)
    while (j < 11) {
        console.log(`${i} × ${j} = ${i * j}`);
        j++
    }
    i++
}