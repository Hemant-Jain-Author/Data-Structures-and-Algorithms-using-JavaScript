class StringTreeNode {
    constructor() {
        this.value = 0;
        this.count = 0;
        this.left = null;
        this.right = null;
    }
}

class StringTree {
    constructor() {
        this.root = null;
    }

    print() {
        this.printUtil(this.root);
    }

    printUtil(curr) {
        if (curr != null) {
            console.log(` value is ::${curr.value}`);
            console.log(` count is :: ${curr.count}`);
            this.printUtil(curr.left);
            this.printUtil(curr.right);
        }
    }

    insert(value) {
        this.root = this.insertUtil(value, this.root);
    }

    insertUtil(value, curr) {
        let compare;
        if (curr == null) {
            curr = new StringTreeNode(this);
            curr.value = value;
            curr.left = curr.right = null;
            curr.count = 1;
        } else {
            compare = curr.value.localeCompare(value);
            if (compare === 0)
                curr.count++;
            else if (compare === 1)
                curr.left = this.insertUtil(value, curr.left);
            else
                curr.right = this.insertUtil(value, curr.right);
        }
        return curr;
    }

    freeTree() {
        this.root = null;
    }

    find(value) {
        const ret = this.findUtil(this.root, value);
        return ret;
    }

    findUtil(curr, value) {
        let compare;
        if (curr == null)
            return false;

        compare = curr.value.localeCompare(value);
        if (compare === 0)
            return true;
        else {
            if (compare === 1)
                return this.findUtil(curr.left, value);
            else
                return this.findUtil(curr.right, value);
        }
    }

    frequency(value) {
        return this.frequencyUtil(this.root, value);
    }

    frequencyUtil(curr, value) {
        let compare;
        if (curr == null)
            return 0;
        
        compare = curr.value.localeCompare(value);
        if (compare === 0)
            return curr.count;
        else {
            if (compare > 0)
                return this.frequencyUtil(curr.left, value);
            else
                return this.frequencyUtil(curr.right, value);
        }
    }
}

// Testing code.
const tt = new StringTree();
tt.insert("banana");
tt.insert("apple");
tt.insert("mango");
console.log("Apple Found :", tt.find("apple"));
console.log("Grapes Found :", tt.find("grapes"));
console.log("Banana Found :", tt.find("banana"));

/*
Apple Found : true
Grapes Found : false
Banana Found : true
*/