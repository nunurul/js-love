function Bio() {
  this.firstName = "";
  this.lastName = "";
  this.halo = function (name) {
    console.info(`halo ${name}, nama saya ${this.firstName}`);
  };
}

const nunu = new Bio();
nunu.firstName = "nunu";
nunu.halo("adis");

console.info(nunu);

const adis = new Bio();
adis.firstName = "adis";

console.info(adis);
