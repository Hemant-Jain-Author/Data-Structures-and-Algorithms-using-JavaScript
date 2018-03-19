const i = 1000;
Object.freeze(i)

const BulbSize = { "SMALL": 0, "MEDIUM": 1, "LARGE": 2 };
Object.freeze(BulbSize)

class Shape {
    constructor() {
        Shape.count++;
    }

    area() {
        return 0;
    }

    perimeter() {
        return 0;
    }

    greeting() {
        console.log("Shape Created");
    }
}
Shape.count = 0; //class variable shared by all instances.

class Rectangle extends Shape{
    constructor(w, l) {
        super();
        this.width = w;
        this.length = l;
    }

    setWidth(w) {
        this.width = w;
    }

    setLength(l) {
        this.length = l;
    }

    area() {
        return this.width * this.length;
    }

    perimeter() {
        return 2 * (this.width + this.length);
    }
}

class Circle extends Shape{
    constructor(r) {
        super();
        this.radius = r;
    }

    setRadius(r) {
        this.radius = r;
    }

    area() {
        return Math.PI * (this.radius ** 2);
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

const width = 2;
const length = 3;
const rectangle = new Rectangle(width, length);
console.log(`Rectangle width: ${width} and length: ${length} Area: ${rectangle.area()} Perimeter: ${rectangle.perimeter()}`);

const radius = 10;
const circle = new Circle(radius);
console.log(`Circle radius: ${radius} Area: ${circle.area()} Perimeter: ${circle.perimeter()}`);

console.log(`Shape.count : ${Shape.count}`)