class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(nama) {
    console.info(`Hello ${nama}`);
  }
}

const nunu = new Person("nunu");
nunu.sayHello("adis");
console.info(nunu);
