
class Shape {
    draw() {}
    accept(vistor) {}
}

class Vistor {
    visitCircle(circle) {}
    visitRectangle(rectangle) {}
}

class Circle extends Shape {
    constructor(x, y, radius) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius
    }

    draw() {
        console.log("Draw Circle")
    }

    accept(vistor) {
        vistor.visitCircle(this);
    }
}


class Rectangle extends Shape {
    constructor(x, y) {
        super();
        this.x= x;
        this.y = y;
    }

    draw() {
        console.log("Draw Rectangle")
    }

    accept(vistor) {
        vistor.visitRectangle(this);
    }
}

class XMLExporterVistor extends Vistor {
    visitCircle(circle) {
        console.log("Export circle to XML")
    }
    visitRectangle(rectangle) {
        console.log("Export rectangle to XML")
    }
}


class RenderVistor extends Vistor {
    visitCircle(circle) {
        console.log("Render circle")
    }
    visitRectangle(rectangle) {
        console.log("Render rectangle ")
    }
}

let shapes = [];
shapes.push(new Circle(10,2, 3));
shapes.push(new Rectangle(5,2));

let exporter = new XMLExporterVistor();
shapes.forEach(shape => shape.accept(exporter));

// shape.accept(exporter)

// Double Dispatch
// shape can be circle or rectangle
// exporter cand be JSONExporter, XMLExporter, Renderer