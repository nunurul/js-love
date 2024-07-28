function Bio(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, aku ${this.firstName}`);
  };
}

const nunu = new Bio("nunu", "nurul");
nunu.sayHello("adis");

console.info(nunu);

function BioData(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Haloo ${name}, aku ${this.firstName}`);
  };
}

BioData.prototype.sayCantik = function () {
  console.info(`Hai Cantik like nunu`);
};

const nurul = new BioData("nurul", "cantik");
nurul.sayBye = function (name) {
  console.info(`Hello ${name}, goodBye`);
};

nurul.sayBye("adis");

const adis = new BioData("adis", "jelek");

console.info(nurul);
console.info(adis);
