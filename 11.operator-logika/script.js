const nilaiUjian = 80;
const nilaiAbsensi = 77;

const hasilUjian = nilaiUjian >= 75;
const hasilAbsesnsi = nilaiAbsensi >= 75;

const hasilAkhir = hasilUjian && hasilAbsesnsi;
document.writeln(hasilAkhir);
