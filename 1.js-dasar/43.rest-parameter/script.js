function hai(nama, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  document.writeln(`<p>${nama} ${total}</p>`);
}

hai("apple", 3, 4, 6);
hai("anggur", 6, 7, 8, 9);

function iya(buah, ...jumlah) {
  let angka = 0;
  for (item of jumlah) {
    angka += item;
  }
  document.writeln(`<p>${buah} ${angka}</p>`);
}

iya("mangga", ...[2, 4, 5, 6]);
iya("anggur", ...[7, 5, 4, 3]);

function oldSum() {
  let total = 0;
  for (item of arguments) {
    total += item;
  }
  document.writeln(`<p>ini total arguments ${total}</p>`);
}

oldSum(2, 4, 6, 7, 8, 8);
