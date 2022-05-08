greater = (x, y) => (x > y);
less = (x, y) => (x < y);

class PriorityQueue {
    constructor(cmp) {
		this.comp = cmp;
        this.size = 0;
        this.arr = [];
    }
    
    /* Other methods */
    percolateDown(parent) {
        const lChild = 2 * parent + 1;
        const rChild = lChild + 1;
        let child = -1;
        let temp;
        if (lChild <= this.size) {
            child = lChild;
        }
        if (rChild <= this.size && this.comp(this.arr[lChild], this.arr[rChild])) {
            child = rChild;
        }
        if (child !== -1 && this.comp(this.arr[parent], this.arr[child])) {
            temp = this.arr[parent];
            this.arr[parent] = this.arr[child];
            this.arr[child] = temp;
            this.percolateDown(child);
        }
    }

    percolateUp(child) {
        const parent = Math.floor((child - 1) / 2);
        if (parent < 0) {
            return;
        }
        if (this.comp(this.arr[parent], this.arr[child])) {
            const temp = this.arr[child];
            this.arr[child] = this.arr[parent];
            this.arr[parent] = temp;
            this.percolateUp(parent);
        }
    }

    add(value) {
        this.arr[this.size] = value;
        this.size += 1;
        this.percolateUp(this.size - 1);
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error("IllegalStateException");
        }
        const value = this.arr[0];
        this.arr[0] = this.arr[this.size - 1];
        this.size--;
        this.percolateDown(0);
        return value;
    }

    print() {
        console.log(this.arr);
    }

    isEmpty() {
        return (this.size === 0);
    }

    length() {
        return this.size;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("IllegalStateException");
        }
        return this.arr[0]
    }
}

class Node {
	constructor(ch, fr, l, r) {
		this.c = ch;
		this.freq = fr;
		this.left = l;
		this.right = r;
	}
}

class HuffmanTree {
	constructor(arr, freq) {
		const n = arr.length;
		const que = new PriorityQueue(function(a, b){return  (a.freq - b.freq) > 0 });
		
		for (let i = 0; i < n; i++) {
			let node = new Node(arr[i], freq[i], null, null);
			que.add(node);
		}

		while (que.length() > 1) {
			let lt = que.remove();
			let rt = que.remove();
			let nd = new Node('+', lt.freq + rt.freq, lt, rt);
			que.add(nd);
		}
		this.root = que.peek();
	}

	printUtil(root, s) {
		if (root.left == null && root.right == null && root.c != '+') {
			console.log(root.c + " = " + s);
			return;
		}
		this.printUtil(root.left, s + "0");
		this.printUtil(root.right, s + "1");
	}
	
	print() {
		console.log("Char = Huffman code");
		this.printUtil(this.root, "");
	}
}

/* Testing Code */
const ar = ['A', 'B', 'C', 'D', 'E'];
const fr = [30, 25, 21, 14, 10];
const hf = new HuffmanTree(ar, fr);
hf.print();

/*
Char = Huffman code
C = 00
E = 010
D = 011
B = 10
A = 11
*/