function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data retrieved");
    }, 3000);
  });
}

async function ShowData() {
  console.log("Start");

  try {
    const result = await getData();

    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("End");
  }
}

console.log("1");
ShowData();
console.log("2");
