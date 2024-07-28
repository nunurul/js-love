function Bio(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Halo ${name}, saya ${this.firstName}`);
  };
}

const nunu = new Bio("nurul", "cantik");
nunu.sayHello("adis");

console.info(nunu);
