const obj = {
  nama: "nunu",
  sayHai: (name) => {
    document.writeln(`Hi ${name}, this is ${this.undefined}`);
  },
};

obj.sayHai("adis");
