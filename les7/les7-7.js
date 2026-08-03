function printMessage(message) {
  console.log(message);
}

function processMessage(text, callback) {
  callback(text);
}

processMessage("JavaScript — це цікаво", printMessage);