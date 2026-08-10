const counter = {
    value: 0,
    increment(){
        this.value++
    }
}

counter.increment()
counter.increment()
counter.increment()
console.log(counter.value)

const counter2 = {
    value: 0,
    increment: counter.increment
}

counter2.increment()
console.log(counter2.value)