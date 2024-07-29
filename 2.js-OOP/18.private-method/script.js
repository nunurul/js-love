class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithName(name) {
    console.info(`Halo ${name}`);
  }

  #sayWithoutName() {
    console.info(`Halo aja`);
  }
}

const orang = new Person();
orang.say("nunu");
console.info(orang);
