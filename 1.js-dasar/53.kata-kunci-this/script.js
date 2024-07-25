console.info(this);

function sample() {
  console.info(this);

  function inner() {
    console.info(this);
  }

  inner();
}

sample();

const obj = {
  nama: "nunu",
  sayNama: function (value) {
    console.info(`Halo ${value}, my name is ${this.nama}`);
  },
};

obj.sayNama("adis");
obj.sayNama("pary");
obj.sayNama("tayo");
