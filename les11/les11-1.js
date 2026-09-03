const promise = new Promise((resolve,reject)=>{
    const success = true 

    if (success){
        resolve("OK")
    }
    else {
        reject("Error")
    }
})
promise 
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.error(error)
})
.finally(()=>{
    console.log("Finally")
})