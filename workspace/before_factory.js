CoordinateSystem = {
  CARTESIAN: 0,
  POLAR: 1
};

class Point {
  // constructor(x, y) {
  //     this.x = x;
  //     this.y = y;
  // }

  constructor(a, b, cs = CoordinateSystem.CARTESIAN) {
    switch (cs) {
      case CoordinateSystem.CARTESIAN:
        this.x = a;
        this.y = b;
        break;
      case CoordinateSystem.POLAR:
        this.x = a * Math.cos(b);
        this.y = a * Math.sin(b);
        break;
    }

    // steps to add a new system
    // 1. augment CoordinateSystem
    // 2. change ctor
  }

}
let p1 = new Point(2, 3, CoordinateSystem.CARTESIAN);
console.log(p1);
