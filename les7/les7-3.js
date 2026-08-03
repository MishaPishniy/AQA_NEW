function sayHello(name) {
  console.log(`Привіт, ${name}!`);
}

function processUser(name, callback) {
  callback(name);
}

processUser("Михайло", sayHello);

