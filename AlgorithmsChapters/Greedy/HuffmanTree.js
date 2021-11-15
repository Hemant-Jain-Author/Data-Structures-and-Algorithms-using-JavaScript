class PriorityQueue {
    constructor(cmp) {
		this.comp = cmp;
        this.length = 0;
        this.arr = [0];
    }

	proclateDown(parent) {
        const lChild = 2 * parent + 1;
        const rChild = lChild + 1;
        let child = -1;
        let temp;
        if (lChild < this.length) {
            child = lChild;
        }
        if (rChild < this.length && this.comp(this.arr[lChild], this.arr[rChild]) ) {
            child = rChild;
        }
        if (child !== -1 && this.comp(this.arr[parent], this.arr[child])) {
            temp = this.arr[parent];
            this.arr[parent] = this.arr[child];
            this.arr[child] = temp;
            this.proclateDown(child);
        }
    }

    proclateUp(child) {
        const parent = Math.floor(child -1 / 2);
        let temp;
        if (parent < 0) {
            return;
        }
        if (this.comp(this.arr[parent], this.arr[child])) {
            temp = this.arr[child];
            this.arr[child] = this.arr[parent];
            this.arr[parent] = temp;
            this.proclateUp(parent);
        }
    }

    add(value) {
        this.arr[this.length] = value;
		this.length++;
        this.proclateUp(this.length-1);
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error('Queue Empty');
        }
        const value = this.arr[0];
        this.arr[0] = this.arr[this.length-1];
        this.length--;
        this.proclateDown(0);
        return value;
    }

    print() {
        console.log(this.arr);
    }

    isEmpty() {
        return (this.length === 0);
    }

    size() {
        return this.length;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue Empty');
        }
        return this.arr[0];
    }
}

class Node
{
	constructor(ch, fr, l, r)
	{
		this.c = ch;
		this.freq = fr;
		this.left = l;
		this.right = r;
	}
}

class HuffmanTree
{
	constructor(arr, freq)
	{
		let n = arr.length;
		let que = new PriorityQueue(function(a, b){return  (a.freq - b.freq) > 0 });
		
		for (let i = 0; i < n; i++)
		{
			let node = new Node(arr[i], freq[i], null, null);
			que.add(node);
		}

		while (que.size() > 1)
		{
			let lt = que.remove();
			let rt = que.remove();
			let nd = new Node('+', lt.freq + rt.freq, lt, rt);
			que.add(nd);
		}
		this.root = que.peek();
	}

	printUtil(root, s)
	{
		if (root.left == null && root.right == null && root.c != '+')
		{
			console.log(root.c + " = " + s);
			return;
		}
		this.printUtil(root.left, s + "0");
		this.printUtil(root.right, s + "1");
	}
	
	print()
	{
		console.log("Char = Huffman code");
		this.printUtil(this.root, "");
	}
}

let ar = ['A', 'B', 'C', 'D', 'E'];
let fr = [30, 25, 21, 14, 10];
let hf = new HuffmanTree(ar, fr);
hf.print();

/*
Char = Huffman code
C = 00
E = 010
D = 011
B = 10
A = 11
*/