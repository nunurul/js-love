function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, aku ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  this.lastName = lastName;
  Employee.call(this, firstName);
}

const nunu = new Manager("nurul", "khoiriyah");
nunu.sayHello("adis");

console.info(nunu);
