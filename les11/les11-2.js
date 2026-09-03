Promise.resolve(5) 
    .then((result)=> {
        return result *2
    })
    .then((result)=> {
        return result * 5
    })
    .then((result)=>{
        console.log(result)
    })


/* 
new Promise((resolve) => {
    resolve(5);
}) */