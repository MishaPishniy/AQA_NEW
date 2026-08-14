class CoffeMachin{
    makeCoffe() {
        this.#HotWater(),
        this.#addCoffe(),
        console.log("Кофе готовий")
    }

    #HotWater() {
        console.log("Грію воду")
    }

    #addCoffe(){
        console.log("Додаю каву")
    }

}

const coffe = new CoffeMachin()

coffe.makeCoffe()