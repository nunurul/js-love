class Apa {
  firstName;
  lastName;
  balance = 0;

  constructor() {}

  sayHello() {
    console.info(`hai`);
  }
}

const iya = new Apa();
iya.sayHello();

console.info(iya);

class Hah {
  firstName;
  lastName;
  balance = 1;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.info(`hai`);
  }
}

const hai = new Hah("nurul", "khoiriyah");
hai.sayHello();
console.info(hai);
