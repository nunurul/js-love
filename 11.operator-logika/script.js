const nilaiUjian = 80;
const nilaiAbsensi = 87;

const hasilUjian = nilaiUjian >= 75;
const hasilAbsensi = nilaiAbsensi >= 75;

const result = hasilAbsensi && hasilUjian;
document.writeln("<p>" + result + "</p>");
