class StringTreeNode {
    constructor() {
        this.count = 0;
        this.lChild = null;
        this.rChild = null;
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
            this.printUtil(curr.lChild);
            this.printUtil(curr.rChild);
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
            curr.lChild = curr.rChild = null;
            curr.count = 1;
        }
        else {
            compare = curr.value.localeCompare(value);
            if (compare === 0)
                curr.count++;
            else if (compare === 1)
                curr.lChild = this.insertUtil(value, curr.lChild);
            else
                curr.rChild = this.insertUtil(value, curr.rChild);
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
                return this.findUtil(curr.lChild, value);
            else
                return this.findUtil(curr.rChild, value);
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
                return this.frequencyUtil(curr.lChild, value);
            else
                return this.frequencyUtil(curr.rChild, value);
        }
    }
}

const tt = new StringTree();
tt.insert("banana");
tt.insert("apple");
tt.insert("mango");
console.log("Apple Found :", tt.find("apple"));
console.log("Grapes Found :", tt.find("grapes"));
console.log("Banana Found :", tt.find("banana"));

