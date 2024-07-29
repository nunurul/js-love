class Shape {
  paint() {
    console.info("hai shape");
  }
}

class Circle extends Shape {
  paint() {
    super.paint();
    console.info("hai circle");
  }
}

const kotak = new Shape();
kotak.paint();

const bulat = new Circle();
bulat.paint();
