function sayHello() {
  console.log("Привіт!");
}

function executeCallback(callback) {
  callback();
}

executeCallback(sayHello);