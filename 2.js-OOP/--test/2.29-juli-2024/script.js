// class
class Halo {}

Halo.prototype.name = "nunu";

const nurul = new Halo();

console.info(nurul);

// class constructor
class Hai {
  constructor(name) {
    console.info(`Hai ${name}`);
  }
}

const uyong = new Hai("nunu");
console.info(uyong);

// property di class
class Pretty {
  constructor(name) {
    this.name = name;
  }
}

const nunuy = new Pretty("nunu");
console.info(nunuy);

// method di class
class Cantik {
  constructor(name) {
    this.name = name;
  }

  sayHello(him) {
    console.info(`hai ${him}, aku ${this.name}`);
  }
}

const rine = new Cantik("nunu");
rine.sayHello("adis");
console.info(rine);

// class inheritance
class Employee {
  sayHello(name) {
    console.info(`Hai ${name}`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.info(`Hai ${name}`);
  }
}

const nunu = new Employee("nunu");
nunu.sayHello("nunu");
const adis = new Manager("adis");
adis.sayHello("adis");

console.info(nunu);
console.info(adis);

// super constructor

class NewEmployee {
  constructor(firstName) {
    this.firstName = firstName;
  }
}

class NewManager extends NewEmployee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
}

const alfie = new NewEmployee("alfie");
const nuy = new NewManager("nurul", "khoiriyah");

console.info(alfie);
console.info(nuy);

// super method
class Shape {
  paint() {
    console.info(`Hai shape`);
  }
}

class Circle extends Shape {
  paint() {
    super.paint();
    console.info(`Hai circle`);
  }
}

const kotak = new Shape();
const bulat = new Circle();

console.info(kotak);
kotak.paint();
console.info(bulat);
bulat.paint();

// getter and setter

class Bagaimana {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const result = value.split(" ");
    this.firstName = value[0];
    this.lastName = value[1];
  }
}

const hah = new Bagaimana("nurul", "khoriyah");
console.info(hah.fullName);

hah.fullName = "nunu cantik";
console.info(hah);

// public class filed
class Melati {
  firstName;
  lastName;
  balamnce = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const bunga = new Melati("bunga", "melati");
console.info(bunga);

// private class field
class Number {
  #counter = 0;

  increment() {
    this.#counter++;
  }

  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

const angka = new Number();

angka.increment();
angka.increment();
angka.decrement();

angka.increment();
angka.increment();

console.info(angka.get());

// private method
class Oi {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithName(name) {
    console.info(`hai ${name}`);
  }

  #sayWithoutName() {
    console.info(`hai aja`);
  }
}

const Nama = new Oi("nunu");
Nama.say("nunu");

// operator instance of
class Game {}
class Music extends Game {}

const Permainan = new Game();
const Musik = new Music();

console.info(Permainan instanceof Game);
console.info(Permainan instanceof Music);
console.info(Musik instanceof Music);
console.info(Musik instanceof Music);
