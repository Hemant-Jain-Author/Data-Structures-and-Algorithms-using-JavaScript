class PolyNode {
    constructor(c, p) {
        this.coeff = c;
        this.pow = p;
        this.next = null;
    }
}

class Polynomial {
    constructor(coeffs=[], pows=[], size=0) {
        this.head = null;
        this.tail = null
        let temp = null;
        for (let i = 0; i < size; i++) {
            temp = new PolyNode(coeffs[i], pows[i]);
            if (this.head == null)
                this.head = this.tail = temp;
            else {
                this.tail.next = temp;
                this.tail = this.tail.next;
            }
        }
    }

    add(poly2) {
        let poly = new Polynomial()
        let p1 = this.head;
        let p2 = poly2.head;
        let temp;
        while (p1 != null || p2 != null) {
            if (p1 == null || (p2 != null && p1.pow < p2.pow)) {
                temp = new PolyNode(p2.coeff, p2.pow);
                p2 = p2.next;
            } else if (p2 == null || p1.pow > p2.pow) {
                temp = new PolyNode(p1.coeff, p1.pow);
                p1 = p1.next;
            } else if (p1.pow == p2.pow) {
                temp = new PolyNode(p1.coeff + p2.coeff, p1.pow);
                p1 = p1.next;
                p2 = p2.next;
            }

            if (poly.head == null)
                poly.head = poly.tail = temp;
            else {
                poly.tail.next = temp;
                poly.tail = poly.tail.next;
            }
        }
        return poly;
    }

    print() {
        let head = this.head;
        while (head != null) {
            process.stdout.write(head.coeff + "x^" + head.pow);
            if (head.next != null)
                process.stdout.write(" + ");
            head = head.next;
        }
        console.log();
    }
}
// Testing code.
function main11() {
    let c1 = [6, 5, 4];
    let p1 = [2, 1, 0];
    let s1 = c1.length;
    let first = new Polynomial(c1, p1, s1);
    first.print();

    let c2 = [3, 2, 1];
    let p2 = [3, 1, 0];
    let s2 = c2.length;
    let second = new Polynomial(c2, p2, s2);
    second.print();

    let sum = first.add(second);
    sum.print();
}

main11();

/*
6x^2 + 5x^1 + 4x^0
3x^3 + 2x^1 + 1x^0
3x^3 + 6x^2 + 7x^1 + 5x^0
*/
