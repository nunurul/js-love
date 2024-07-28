function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Salah
// Manager.prototype = Employee.prototype;

// Benar
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  console.info(`Helo ${name}, my name is Manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.info(`Helo ${name}, my name is Employee ${this.name}`);
};

const employee = new Employee("Budi");
employee.sayHello("Joko");

const manager = new Manager("Eko");
employee.sayHello("Joko");
