let result = 1 + 2;
document.writeln("<p> 1 + 2 = " + result + "</p>");
let originalresult = result;

result = originalresult - 1;
document.writeln("<p> " + originalresult + " - 1 = " + result + "</p>");
originalresult = result;

result = originalresult * 2;
document.writeln("<p>" + originalresult + " * 2 = " + result + "</p>");
originalresult = result;
