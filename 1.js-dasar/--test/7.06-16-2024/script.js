document.writeln("<p>For Loop</p>");

for (let m = 1; m <= 10; m++) {
  document.writeln(`<p>${m}</p>`);
}

document.writeln("<br />");

document.writeln("<p>While Loop</p>");

let n = 1;

while (n <= 10) {
  document.writeln(`<p>${n}</p>`);
  n++;
}

document.writeln("<br />");

document.writeln("<p>Do While Loop</p>");

let o = 1;

do {
  document.writeln(`<p>${o}</p>`);
  o++;
} while (o <= 10);

document.writeln("<br />");

document.writeln("<p>Break</p>");

let d = 1;
while (true) {
  document.writeln(`<p>${d}</p>`);
  d++;

  if (d >= 10) {
    break;
  }
}

document.writeln("<br />");

document.writeln("<p>Continue</p>");

for (let c = 1; c <= 10; c++) {
  if (c % 2 == 0) {
    continue;
  }

  document.writeln(`<p>${c}</p>`);
}

document.writeln("<br />");

document.writeln("<p>Label</p>");

loopi: for (let a = 1; a <= 10; a++) {
  loopj: for (let b = 1; b <= 20; b++) {
    if (a >= 10) {
      continue loopi;
    }

    document.writeln(`<p>${a} - ${b}</p>`);
  }
}

document.writeln("<br />");
