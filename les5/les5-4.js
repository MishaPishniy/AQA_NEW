const age = 5
try {
if (age < 0) {
    throw new Error("Відємний вік")
}

console.log(age) 
} catch(error) {
    console.log("Сталась помилка" , error.message)
}finally {
    console.log("Перевірка була ")
}
console.log("Программа працює дальше")

