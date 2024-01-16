
function Tree() {
    this.root = null;

    function Node(data, left = null, right = null) {
        this.value = data;
        this.left = left;
        this.right = right;
    }
    Tree.Node = Node
}

Tree.prototype.insertNode = function(value) {
    if (typeof value === 'number')
        this.root = this.insertNodeUtil(value, this.root);
    else
        throw new Error('invalid input arguments');
}

Tree.prototype.insertNodeUtil = function(value, node) {
    if (node == null) {
        node = new Tree.Node(value, null, null);
    }
    else {
        if (node.value > value) {
            node.left = this.insertNodeUtil(value, node.left);
        }
        else {
            node.right = this.insertNodeUtil(value, node.right);
        }
    }
    return node;
}

Tree.prototype.printPreOrder = function() {
    this.printPreOrderUtil(this.root);
}

Tree.prototype.printPreOrderUtil = function(node) {
    if (node != null) {
        console.log(node.value);
        this.printPreOrderUtil(node.left);
        this.printPreOrderUtil(node.right);
    }
}

let t = new Tree();
t.insertNode(5)
t.insertNode(3)
t.insertNode(1)
t.insertNode(4)
t.insertNode(7)
t.insertNode(6)
t.insertNode(8)
t.printPreOrder()



