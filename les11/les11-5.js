async function name() {
    const message = await name()

    console.log(message)
}

name();

console.log(result)


 function name() {
    return Promise.resolve("hello")
}
name().then((message)=>{console.log(message)})
