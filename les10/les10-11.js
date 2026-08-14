class Car {
    drive () {
        console.log("Drive")
    }
}
//Car.prototype

const car1 = new Car()
const car2 = new Car()

console.log(car1.drive === car2.drive)

