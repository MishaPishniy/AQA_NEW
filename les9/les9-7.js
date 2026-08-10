const user = {
  name: "Alice",
  work: {
    name: "Google:",

    showWork() {
      console.log(this.name);
    },
  },
};

user.work.showWork();
console.log("age" in user)

// this === user.work
