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
angka.increment();
angka.increment();
angka.increment();

console.info(angka.get());
