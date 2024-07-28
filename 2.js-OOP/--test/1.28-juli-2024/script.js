// construction function
const nurul = {
  nama: "nunu",
  hobby: "bengong",
};

const uyong = {
  nama: "adis",
  hobby: "role depan",
};

function Halo() {}
function HaloJelek() {}

const nunu = new Halo();
const adis = new HaloJelek();

// property di construction function

function Hah() {
  this.firstName = "";
  this.lastName = "";
}

const nunuy = new Hah();
nunuy.firstName = "nunu";
nunuy.lastName = "cantik";

const alfie = new Hah();
alfie.firstName = "alfie";
alfie.lastName = "juara";

console.info(nunuy);
console.info(alfie);

// method di construction function

function Yuhu() {
  this.firstName = "nunu";
  this.lastName = "cantik";
  this.sayHello = function (name) {
    console.info(`Hello ${name}, nama saya ${this.firstName}`);
  };
}

const Bio = new Yuhu();
Bio.sayHello("adis");

// parameter di construction function
function Introduce(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Halo ${name}, nama saya ${this.firstName}`);
  };
}

const Hai = new Introduce("nunu", "cantik");
console.info(Hai);
Hai.sayHello("adis");

// constructor inheritance
function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.info(`Haloo ${firstName}, nama saya ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  Employee.call(this, firstName);
  this.lastName = lastName;
}

const Karyawan = new Employee("nunu");
const Bos = new Manager("adis", "jelek");

console.info(Karyawan);
console.info(Bos);

// prototype

function BioData(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function () {
    console.info("hai hello");
  };
}

BioData.prototype.sayBye = function () {
  console.info("Hello Bye");
};

const Haho = new BioData();

console.info(Haho);

// prototype inheritance

function Proto(firstName) {
  this.name = firstName;
}

function Type(firstName) {
  this.name = firstName;
}

// Salah
// Proto.prototype = Type.prototype;

// Benar
Proto.prototype = Object.create(Type.prototype);

Proto.prototype.sayBye = function (name) {
  console.info(`Halo ${name}, saya Dosen ${this.name}`);
};

Type.prototype.sayBye = function (name) {
  console.info(`Halo ${name}, saya Mahasiswa ${this.name}`);
};

const Ada = new Proto("nunu");
const Aduh = new Type("adis");
Aduh.sayBye("nunu");
Ada.sayBye("adis");
