console.log('1'
)
console.log("2")
console.log("3")

console.log("Start") 
setTimeout(()=>{
    console.log("Виконання таймеру")
},0)
console.log("Кінець")


function message(){
    console.log("Hello")
}

setTimeout(message,2000)