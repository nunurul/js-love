class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    console.info(`Hai ${name}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
}

const nunu = new Employee("nunu");
nunu.sayHello("adis");

const adis = new Manager("adis", "jelek");
adis.sayHello("nunu");

console.info(nunu);
console.info(adis);
