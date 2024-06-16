// label

// loopi: for (let i = 1; i <= 20; i++) {
//   loopj: for (let j = 1; j <= 5; j++) {
//     document.writeln(`<p>${i} - ${j}</p>`);
//   }
// }

// continue dan berak
loopi: for (let i = 1; i <= 10; i++) {
  loopj: for (let j = 1; j <= 20; j++) {
    if (j > 5) {
      continue loopi;
    }
    document.writeln(`<p>${i}-${j}</p>`);
  }
}
