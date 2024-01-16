class Node
{
    constructor(d, l, r) {
        this.data = d;
        this.left = l;
        this.right = r;
        this.height = 0;
    }
}

class AVLTree
{
	constructor() {
		this.root = null;
	}

	height(n) {
		if (n == null) {
			return -1;
		}
		return n.height;
	}

	getBalance(node) {
		return (node == null) ? 0 : this.height(node.left) - this.height(node.right);
	}

	insert(data) {
		this.root = this.insertUtil(this.root, data);
	}

	insertUtil(node, data) {
		if (node == null) {
			return new Node(data, null, null);
		}
		if (node.data > data) {
			node.left = this.insertUtil(node.left, data);
		} else if (node.data < data) {
			node.right = this.insertUtil(node.right, data);
		} else {
			// Duplicate data not allowed
			return node;
		}
		node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
		let balance = this.getBalance(node);
		if (balance > 1) {
			if (data < node.left.data) // Left Left Case
			{
				return this.rightRotate(node);
			}
			if (data > node.left.data) // Left Right Case
			{
				return this.leftRightRotate(node);
			}
		}
		if (balance < -1) {
			if (data > node.right.data) // Right Right Case
			{
				return this.leftRotate(node);
			}
			if (data < node.right.data) // Right Left Case
			{
				return this.rightLeftRotate(node);
			}
		}
		return node;
	}
	// Function to right rotate subtree rooted with x
	rightRotate(x) {
		let y = x.left;
		let T = y.right;
		// Rotation
		y.right = x;
		x.left = T;
		// Update heights
		x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
		y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
		// Return new root
		return y;
	}
	// Function to left rotate subtree rooted with x
	leftRotate(x) {
		let y = x.right;
		let T = y.left;
		// Rotation
		y.left = x;
		x.right = T;
		// Update heights
		x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
		y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
		// Return new root
		return y;
	}

	// Function to right then left rotate subtree rooted with x
	rightLeftRotate(x) {
		x.right = this.rightRotate(x.right);
		return this.leftRotate(x);
	}

	// Function to left then right rotate subtree rooted with x
	leftRightRotate(x) {
		x.left = this.leftRotate(x.left);
		return this.rightRotate(x);
	}

	delete(data) {
		this.root = this.deleteUtil(this.root, data);
	}

	deleteUtil(node, data) {
		if (node == null) {
			return null;
		}
		if (node.data == data) {
			if (node.left == null && node.right == null) {
				return null;
			} else if (node.left == null) {
				return node.right;
			} else if (node.right == null) {
				return node.left;
			} else {
				let minNode = this.findMin(node.right);
				node.data = minNode.data;
				node.right = this.deleteUtil(node.right, minNode.data);
			}
		} else {
			if (node.data > data) {
				node.left = this.deleteUtil(node.left, data);
			} else {
				node.right = this.deleteUtil(node.right, data);
			}
		}
		node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
		let balance = this.getBalance(node);
		if (balance > 1) {
			if (data >= node.left.data) { // Left Left Case 
				return this.rightRotate(node);
			}
			if (data < node.left.data) { // Left Right Case
				return this.leftRightRotate(node);
			}
		}
		if (balance < -1) {
			if (data <= node.right.data) { // Right Right Case
				return this.leftRotate(node);
			}
			if (data > node.right.data) { // Right Left Case
				return this.rightLeftRotate(node);
			}
		}
		return node;
	}

	findMin(curr) {
		let node = curr;
		if (node == null) {
			return null;
		}
		while (node.left != null) {
			node = node.left;
		}
		return node;
	}

	printTree() {
		this.printTreeUtil(this.root, "", false);
		console.log();
	}

	printTreeUtil(node, indent, isLeft) {
		if (node == null) {
			return;
		}
        let out = "";
		if (isLeft) {
			out += indent + "L:";
			indent += "|  ";
		} else {
			out += indent + "R:";
			indent += "   ";
		}
		console.log(out + node.data + "(" + node.height + ")");
		this.printTreeUtil(node.left, indent, true);
		this.printTreeUtil(node.right, indent, false);
	}
}

// Testing code.
let t = new AVLTree();
t.insert(1);
t.insert(2);
t.insert(3);
t.insert(4);
t.insert(5);
t.insert(6);
t.insert(7);
t.insert(8);
t.printTree();
/*
    R:4(3)
    L:2(1)
    |  L:1(0)
    |  R:3(0)
    R:6(2)
        L:5(0)
        R:7(1)
            R:8(0)

        */
t.delete(5);
t.printTree();
/*
    R:4(2)
    L:2(1)
    |  L:1(0)
    |  R:3(0)
    R:7(1)
        L:6(0)
        R:8(0)

        */
t.delete(1);
t.printTree();
/*
R:4(2)
    L:2(1)
    |  R:3(0)
    R:7(1)
        L:6(0)
        R:8(0)

        */
t.delete(2);
t.printTree();
