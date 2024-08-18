class Number {
  static jumlah(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter harus lebih dari 0");
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

// console.info(Number.jumlah());
console.info(Number.jumlah(1, 3));
