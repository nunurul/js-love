class ValidationError {
  constructor(message, field) {
    // super(message);
    this.field = field;
  }
}

class MathUtil {
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
  console.info(MathUtil.sum());
  console.info("Nurul");
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

console.info("Ayam");
