class Sum {
  static angka(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const Jumlah = Sum.angka(1, 2, 23, 3, 3, 3);

console.info(Jumlah);
