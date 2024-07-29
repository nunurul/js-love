class Employee {
  sayHello(name) {
    console.info(`hai ${name} Employee`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.info(`hai ${name} Manager`);
  }
}

const nunu = new Employee();
nunu.name = "nunu";
nunu.sayHello("nunu");

const adis = new Manager();
adis.name = "adis";
adis.sayHello("adis");

console.info(nunu);
console.info(adis);
