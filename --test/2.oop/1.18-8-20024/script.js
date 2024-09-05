// class-field

class Configuration {
  static name = "nunu";
  static age = 23;
  static dreams = "gaji 3 digit";
}

console.info(Configuration.name);
console.info(Configuration.age);
console.info(Configuration.dreams);

// static-method

class sum {
  static angka(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const jumlah = sum.angka(1, 2, 3, 4, 5, 6, 6);
console.info(jumlah);

// error

class Number {
  static jumlah(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Jumlah harus lebih dari 0");
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

console.info(Number.jumlah(2, 3));

// error-handle

class MathUtil {
  static jumlah(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Angka harus diisi");
    }

    let total = 0;
    for (number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.info(MathUtil.jumlah());
  console.info("berhasil");
} catch (error) {
  console.info("ada error :", error);
} finally {
  console.info("hah");
}

class Counter {
  #counter = 1;

  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}

const counter = new Counter();
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());

// membuat-class-error-manual

class ValidationError {
  constructor(message, field) {
    this.field = field;
  }
}

class MathUtils {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError(
        "Total Parameter harus lebih dari 0",
        "numbers"
      );
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }

    return total;
  }
}

try {
  console.info(MathUtils.sum());
  console.info("nunu");
} catch (error) {
  if (error instanceof ValidationError) {
    console.info(
      `Terjadi error di field ${error.field} dengan error ${error.message}`
    );
  } else {
    console.info(`Terjadi error di ${error.message}`);
  }
} finally {
  console.info("Progress Selesai");
}

// iterable-dan-iterator
class CounterIteratorResult {
  constructor(value, done) {
    this.value = value;
    this.done = done;
  }
}

class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  next() {
    try {
      if (this.value > this.max) {
        return new CounterIteratorResult(this.value, true);
      } else {
        return new CounterIteratorResult(this.value, false);
      }
    } finally {
      this.value++;
    }
  }
}

class Counter {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max);
  }
}

const counterd = new Counter(1, 10);

for (const value of counterd) {
  console.info(value);
}
