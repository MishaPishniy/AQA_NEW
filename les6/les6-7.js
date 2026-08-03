function acsesDen(age,bilet) {
    if (bilet) {
        console.log(" E bilet")
    if ( age >= 18) {
        console.log("Pass")
    } else {
        console.log("Fail")
    } } else {
        console.log("Net bileta")
    }
}
acsesDen(20)


function biletAc (bilet, age) {
    if (!bilet){
        console.log("Net bileta")
        return;
    }

    if (age < 18) {
        console.log("age < 18")
        return;
    }

    console.log("Have bilet age > 18")
}

biletAc(true,20)