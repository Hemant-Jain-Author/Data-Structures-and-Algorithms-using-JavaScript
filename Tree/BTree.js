class Node
{
    // Constructor
    constructor(leaf, maxDeg) {
        this.n = 0; // Current number of keys
        this.keys = Array(maxDeg).fill(0); // An array of keys
        this.arr = Array(maxDeg + 1).fill(null); // An array of child pointers
        this.leaf = leaf; // Is true when node is leaf. Otherwise false
    }
}

class BTree
{
	// Constructor
    constructor(dg) {
		this.root = null; // Pointer to root node
		this.max = dg; // Maximum degree or Max number of children.
		this.min = parseInt(dg / 2); // Minimum degree
	}

	printTree() {
		this.printTreeUtil(this.root, "");
		console.log();
	}
    
	printTreeUtil(node, indent) {
		if (node == null) {
			return;
		}
		let i = 0;
		for (i = 0; i < node.n; i++) {
			this.printTreeUtil(node.arr[i], indent + "    ");
			console.log(indent + "key[" + i + "]:" + node.keys[i]);
		}
		this.printTreeUtil(node.arr[i], indent + "    ");
	}

	printInOrder(node) {
		let i = 0;
		for (i = 0; i < node.n; i++) {
			if (node.leaf == false) {
				this.printInOrder(node.arr[i]);
			}
			console.log(node.keys[i] + " ");
		}
		if (node.leaf == false) {
			this.printInOrder(node.arr[i]);
		}
	}

	search(key) {
		if (this.root == null) {
			return null;
		}
		return this.searchUtil(this.root, key);
	}

	searchUtil(node, key) {
		let i = 0;
		while (i < node.n && node.keys[i] < key) {
			i++;
		}
		// If the found key is equal to key, return this node
		if (node.keys[i] == key) {
			return node;
		}
		// If the key is not found and this is a leaf node
		if (node.leaf == true) {
			return null;
		}
		// Search in the appropriate child
		return this.searchUtil(node.arr[i], key);
	}

	insert(key) {
		// If tree is empty
		if (this.root == null) {
			// Allocate memory for root
			this.root = new Node(true, this.max);
			this.root.keys[0] = key;
			// Insert key
			this.root.n = 1;
			// Update number of keys in root
			return;
		}
		if (this.root.leaf == true) {
			// Finds the location where new key can be inserted.
			// By moving all keys greater than key to one place forward.
			let i = this.root.n - 1;
			while (i >= 0 && this.root.keys[i] > key) {
				this.root.keys[i + 1] = this.root.keys[i];
				i--;
			}
			// Insert the new key at found location
			this.root.keys[i + 1] = key;
			this.root.n = this.root.n + 1;
		} else {
			let i = 0;
			while (i < this.root.n && this.root.keys[i] < key) {
				i++;
			}
			this.insertUtil(this.root, this.root.arr[i], i, key);
		}
		if (this.root.n == this.max) {
			// If root contains more then allowed nodes, then tree grows in height.
			// Allocate memory for new root
			let rt = new Node(false, this.max);
			rt.arr[0] = this.root;
			this.split(rt, this.root, 0);
			// divide the child into two and then add the median to the parent.
			this.root = rt;
		}
	}
	// Insert a new key in this node
	// Arguments are parent, child, index of child and key.
	insertUtil(parent, child, index, key) {
		if (child.leaf == true) {
			// Finds the location where new key will be inserted 
			// by moving all keys greater than key to one place forward.
			let i = child.n - 1;
			while (i >= 0 && child.keys[i] > key) {
				child.keys[i + 1] = child.keys[i];
				i--;
			}
			// Insert the new key at found location
			child.keys[i + 1] = key;
			child.n += 1;
		} else {
			let i = 0;
			// insert the node to the proper child.
			while (i < child.n && child.keys[i] < key) {
				i++;
			}
			this.insertUtil(child, child.arr[i], i, key);
		}
		if (child.n == this.max) {
			// More nodes than allowed.
			// divide the child into two and then add the median to the parent.
			this.split(parent, child, index);
		}
	}

	split(parent, child, index) {
		// Getting index of median.
		let median = parseInt(this.max / 2);
		// Reduce the number of keys in child
		child.n = median;
		let node = new Node(child.leaf, this.max);
		// Copy the second half keys of child to node
		let j = 0;
		while (median + 1 + j < this.max) {
			node.keys[j] = child.keys[median + 1 + j];
			j++;
		}
		node.n = j;
		// Copy the second half children of child to node
		j = 0;
		while (child.leaf == false && median + j <= this.max - 1) {
			node.arr[j] = child.arr[median + 1 + j];
			j++;
		}
		// parent is going to have a new child,
		// create space of new child
		for (j = parent.n; j >= index + 1; j--) {
			parent.arr[j + 1] = parent.arr[j];
		}
		// Link the new child to the parent node
		parent.arr[index + 1] = node;
		// A key of child will move to the parent node. 
		// Find the location of new key by moving
		// all greater keys one space forward.
		for (j = parent.n - 1; j >= index; j--) {
			parent.keys[j + 1] = parent.keys[j];
		}
		// Copy the middle key of child to the parent
		parent.keys[index] = child.keys[median];
		// Increment count of keys in this parent
		parent.n += 1;
	}

	remove(key) {
		this.removeUtil(this.root, key);
		if (this.root.n == 0) {
			// Shrinking : If root is pointing to empty node.
			// If that node is a leaf node then root will become null.
			// Else root will point to first child of node.
			if (this.root.leaf) {
				this.root = null;
			} else {
				this.root = this.root.arr[0];
			}
		}
	}

	removeUtil(node, key) {
		let index = this.findKey(node, key);
		if (node.leaf) {
			if (index < node.n && node.keys[index] == key) {
				this.removeFromLeaf(node, index);
			} else {
				console.log("The key " + key + " not found.");
				return;
			}
		} else {
			if (index < node.n && node.keys[index] == key) {
				this.removeFromNonLeaf(node, index);
			} else {
				this.removeUtil(node.arr[index], key);
			}
			// All the property violation in index subtree only.
			// which include remove from leaf case too.
			if (node.arr[index].n < this.min) {
				this.fixBTree(node, index);
			}
		}
	}

	// Returns the index of first key which is greater than or equal to key.
	findKey(node, key) {
		let index = 0;
		while (index < node.n && node.keys[index] < key) {
			index++;
		}
		return index;
	}

	// Remove the index key from leaf node.
	removeFromLeaf(node, index) {
		// Move all the keys after the index position one step left.
		for (let i = index + 1; i < node.n; ++i) {
			node.keys[i - 1] = node.keys[i];
		}
		// Reduce the key count.
		node.n--;
		return;
	}

	// Remove the index key from a non-leaf node.
	removeFromNonLeaf(node, index) {
		let key = node.keys[index];
		// If the child that precedes key has at least min keys,
		// Find the predecessor 'pred' of key in the subtree rooted at index.
		// Replace key by pred and recursively delete pred in arr[index]
		if (node.arr[index].n > this.min) {
			let pred = this.getPred(node, index);
			node.keys[index] = pred;
			this.removeUtil(node.arr[index], pred);
		} else if (node.arr[index + 1].n > this.min) {
			let succ = this.getSucc(node, index);
			node.keys[index] = succ;
			this.removeUtil(node.arr[index + 1], succ);
		} else {
			this.merge(node, index);
			this.removeUtil(node.arr[index], key);
		}
		return;
	}

	// To get predecessor of keys[index]
	getPred(node, index) {
		// Keep moving to the right most node of left subtree until we reach a leaf.
		let cur = node.arr[index];
		while (!cur.leaf) {
			cur = cur.arr[cur.n];
		}
		// Return the last key of the leaf
		return cur.keys[cur.n - 1];
	}

	// To get successor of keys[index]
	getSucc(node, index) {
		// Keep moving to the left most node of right subtree until we reach a leaf
		let cur = node.arr[index + 1];
		while (!cur.leaf) {
			cur = cur.arr[0];
		}
		// Return the first key of the leaf
		return cur.keys[0];
	}

	// Make sure that the node have at least min number of keys
	fixBTree(node, index) {
		// If the left sibling has more than min keys.
		if (index != 0 && node.arr[index - 1].n > this.min) {
			this.borrowFromLeft(node, index);
		} else if (index != node.n && node.arr[index + 1].n > this.min) {
			this.borrowFromRight(node, index);
		} else {
			if (index != node.n) {
				this.merge(node, index);
			} else {
				this.merge(node, index - 1);
			}
		}
	}

	// Move a key from parent to right and left to parent.
	borrowFromLeft(node, index) {
		let child = node.arr[index];
		let sibling = node.arr[index - 1];
		// Moving all key in child one step forward.
		for (let i = child.n - 1; i >= 0; i--) {
			child.keys[i + 1] = child.keys[i];
		}
		// Move all its child pointers one step forward.
		for (let i = child.n; !child.leaf && i >= 0; i--) {
			child.arr[i + 1] = child.arr[i];
		}
		// Setting child's first key equal to of the current node.
		child.keys[0] = node.keys[index - 1];
		// Moving sibling's last child as child's first child.
		if (!child.leaf) {
			child.arr[0] = sibling.arr[sibling.n];
		}
		// Moving the key from the sibling to the parent
		node.keys[index - 1] = sibling.keys[sibling.n - 1];
		// Increase child key count and decrease sibling key count.
		child.n += 1;
		sibling.n -= 1;
		return;
	}

	// Move a key from parent to left and right to parent.
	borrowFromRight(node, index) {
		let child = node.arr[index];
		let sibling = node.arr[index + 1];
		// node key is inserted as the last key in child.
		child.keys[child.n] = node.keys[index];
		// Sibling's first child is inserted as the last child of child.
		if (!(child.leaf)) {
			child.arr[(child.n) + 1] = sibling.arr[0];
		}
		//First key from sibling is inserted into node.
		node.keys[index] = sibling.keys[0];
		// Moving all keys in sibling one step left
		for (let i = 1; i < sibling.n; ++i) {
			sibling.keys[i - 1] = sibling.keys[i];
		}
		// Moving the child pointers one step behind
		for (let i = 1; !sibling.leaf && i <= sibling.n; ++i) {
			sibling.arr[i - 1] = sibling.arr[i];
		}
		// Increase child key count and decrease sibling key count.
		child.n += 1;
		sibling.n -= 1;
		return;
	}

	// Merge node's children at index and index+1.
	merge(node, index) {
		let left = node.arr[index];
		let right = node.arr[index + 1];
		let start = left.n;
		// Adding a key from node to the left child.
		left.keys[start] = node.keys[index];
		// Copying the keys from right to left.
		for (let i = 0; i < right.n; ++i) {
			left.keys[start + 1 + i] = right.keys[i];
		}
		// Copying the child pointers from right to left.
		for (let i = 0; !left.leaf && i <= right.n; ++i) {
			left.arr[start + 1 + i] = right.arr[i];
		}
		// Moving all keys after  index in the current node one step forward.
		for (let i = index + 1; i < node.n; ++i) {
			node.keys[i - 1] = node.keys[i];
		}
		// Moving the child pointers after (index+1) in the current node one step forward.
		for (let i = index + 2; i <= node.n; ++i) {
			node.arr[i - 1] = node.arr[i];
		}
		// Updating the key count of child and the current node
		left.n += right.n + 1;
		node.n--;
		return;
	}
}

// Testing code.
let t = new BTree(3); // A B-Tree with max key 3
t.insert(1);
t.insert(2);
t.insert(3);
t.insert(4);
t.insert(5);
t.insert(6);
t.insert(7);
t.insert(8);
t.insert(9);
t.insert(10);
t.printTree();
console.log("6 : " + ((t.search(6) != null) ? "Present" : "Not Present"));
console.log("11 : " + ((t.search(11) != null) ? "Present" : "Not Present"));
t.remove(6);
t.remove(3);
t.remove(7);
t.printTree();

/*
        key[0]:1
    key[0]:2
        key[0]:3
key[0]:4
        key[0]:5
    key[0]:6
        key[0]:7
    key[1]:8
        key[0]:9
        key[1]:10

6 : Present
11 : Not Present

    key[0]:1
    key[1]:2
key[0]:4
    key[0]:5
key[1]:8
    key[0]:9
    key[1]:10
*/