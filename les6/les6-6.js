const name = "Misha"


function sayHello () {
    console.log(name)
}

sayHello()
console.log(name)


function great(){
    const message = "Hello"
    console.log(message)
}
great()
console.log(message)



function great(message){
    console.log(message)
}

great("Hello M ")
console.log(message)


if(true) {
    const msg = "hello"
    let msg2 = "hello2"
}
console.log(msg)
console.log(msg2)


function outer() {
    const msg = "Misha Hello" 
    function inner (){
        console.log(msg)
        const inf = "Hello Misha"
    }
inner()
}
outer()