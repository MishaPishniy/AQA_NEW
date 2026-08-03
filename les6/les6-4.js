function Hello(name = "Guest") {
    console.log(`Hello ${name}`)
}

Hello("Misha")


const sum = function  (a,b) {
    return a +b 
}

console.log(sum(1))


function restPar (a,b,...number) {
    console.log(number)
}
restPar(10,40,3,4,4)