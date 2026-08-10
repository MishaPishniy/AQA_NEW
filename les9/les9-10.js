const user = {
    name:"Alice"
}

const work  = {
    name: "Google"
}

const userInfo = {
    ...user,
    ...work
}
console.log(userInfo)