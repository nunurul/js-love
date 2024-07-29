class Employee {}

class Manager {}

const nunu = new Employee();
const adis = new Manager();

console.info(nunu instanceof Employee);
console.info(nunu instanceof Manager);
console.info(adis instanceof Employee);
console.info(adis instanceof Manager);
console.info("inheritance");

// inheritance

class NewEmployee {}
class NewManager extends NewEmployee {}

const nurul = new NewEmployee();
const alfie = new NewManager();

console.info(nurul instanceof NewEmployee);
console.info(nurul instanceof NewManager);
console.info(alfie instanceof NewEmployee);
console.info(alfie instanceof NewManager);
