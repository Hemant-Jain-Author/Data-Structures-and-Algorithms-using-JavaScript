class Node
{
    constructor(d, l, r) {
        this.data = d;
        this.left = l;
        this.right = r;
        this.parent = null;
    }
}

class SPLAYTree
{
	constructor() {
		this.root = null;
	}

	printTree() {
		this.printTreeUtil(this.root, "", false);
		console.log();
	}

	printTreeUtil(node, indent, isLeft) {
		if (node == null) {
			return;
		}
        let output = "";
		if (isLeft) {
			output += (indent + "L:");
			indent += "|  ";
		} else {
			output += (indent + "R:");
			indent += "   ";
		}
		console.log(output + node.data);
		this.printTreeUtil(node.left, indent, true);
		this.printTreeUtil(node.right, indent, false);
	}

	// Function to right rotate subtree rooted with x
	rightRotate(x) {
		let y = x.left;
		let T = y.right;
		// Rotation
		y.parent = x.parent;
		y.right = x;
		x.parent = y;
		x.left = T;
		if (T != null) {
			T.parent = x;
		}
		if (y.parent != null && y.parent.left == x) {
			y.parent.left = y;
		} else if (y.parent != null && y.parent.right == x) {
			y.parent.right = y;
		}
		// Return new root
		return y;
	}

	// Function to left rotate subtree rooted with x
	leftRotate(x) {
		let y = x.right;
		let T = y.left;
		// Rotation
		y.parent = x.parent;
		y.left = x;
		x.parent = y;
		x.right = T;
		if (T != null) {
			T.parent = x;
		}
		if (y.parent != null && y.parent.left == x) {
			y.parent.left = y;
		} else if (y.parent != null && y.parent.right == x) {
			y.parent.right = y;
		}
		// Return new root
		return y;
	}

	parent(node) {
		if (node == null || node.parent == null) {
			return null;
		}
		return node.parent;
	}

	splay(node) {
		let parent = null;
		let grand = null;
		while (node != this.root) {
			parent = this.parent(node);
			grand = this.parent(parent);
			if (parent == null) {
				// rotations had created new root, always last condition.
				this.root = node;
			} else if (grand == null) {
				// single rotation case.
				if (parent.left == node)
				{
					node = this.rightRotate(parent);
				} else {
					node = this.leftRotate(parent);
				}
			} else if (grand.left == parent && parent.left == node) {
				// Zig Zig case.
				this.rightRotate(grand);
				node = this.rightRotate(parent);
			} else if (grand.right == parent && parent.right == node) {
				// Zag Zag case.
				this.leftRotate(grand);
				node = this.leftRotate(parent);
			} else if (grand.left == parent && parent.right == node) {
				//Zig Zag case.
				this.leftRotate(parent);
				node = this.rightRotate(grand);
			} else if (grand.right == parent && parent.left == node) {
				// Zag Zig case.
				this.rightRotate(parent);
				node = this.leftRotate(grand);
			}
		}
	}

	find(data) {
		let curr = this.root;
		while (curr != null) {
			if (curr.data == data) {
				this.splay(curr);
				return true;
			} else if (curr.data > data) {
				curr = curr.left;
			} else {
				curr = curr.right;
			}
		}
		return false;
	}

	insert(data) {
		let newNode = new Node(data, null, null);
		if (this.root == null) {
			this.root = newNode;
			return;
		}
		let node = this.root;
		let parent = null;
		while (node != null) {
			parent = node;
			if (node.data > data) {
				node = node.left;
			} else if (node.data < data) {
				node = node.right;
			} else {
				this.splay(node);
				// duplicate insertion not allowed but splaying for it.
				return;
			}
		}
		newNode.parent = parent;
		if (parent.data > data) {
			parent.left = newNode;
		} else {
			parent.right = newNode;
		}
		this.splay(newNode);
	}

	findMinNode(curr) {
		let node = curr;
		if (node == null) {
			return null;
		}
		while (node.left != null) {
			node = node.left;
		}
		return node;
	}

	delete(data) {
		let node = this.root;
		let parent = null;
		let next = null;
		while (node != null) {
			if (node.data == data) {
				parent = node.parent;
				if (node.left == null && node.right == null) {
					next = null;
				} else if (node.left == null) {
					next = node.right;
				} else if (node.right == null) {
					next = node.left;
				}
				if (node.left == null || node.right == null) {
					if (node == this.root) {
						this.root = next;
						return;
					}
					if (parent.left == node) {
						parent.left = next;
					} else {
						parent.right = next;
					}
					if (next != null) {
						next.parent = parent;
					}
					break;
				}
				let minNode = this.findMinNode(node.right);
				data = minNode.data;
				node.data = data;
				node = node.right;
			} else if (node.data > data) {
				parent = node;
				node = node.left;
			} else {
				parent = node;
				node = node.right;
			}
		}
		this.splay(parent);
	}

	printInOrder() {
		this.printInOrderUtil(this.root);
		console.log();
	}

	printInOrder(node) {
		/* In order */
		if (node != null) {
			this.printInOrderUtil(node.left);
			console.log(node.data + " ");
			this.printInOrderUtil(node.right);
		}
	}
}

// Testing code.
let tree = new SPLAYTree();
tree.insert(5);
tree.insert(4);
tree.insert(6);
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(3);
tree.printTree();
console.log("Value 2 found: " + tree.find(2));
tree.delete(2);
tree.delete(5);
tree.printTree();

/*
R:3
   L:2
   |  L:1
   R:6
      L:4
      |  R:5

Value 2 found: true
R:4
   L:3
   |  L:1
   R:6
*/