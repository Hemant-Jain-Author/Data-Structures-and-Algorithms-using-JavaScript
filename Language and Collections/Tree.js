
function Tree() {
    this.root = null;

    function Node(data, left = null, right = null) {
        this.value = data;
        this.lChild = left;
        this.rChild = right;
    }
    Tree.Node = Node
}

Tree.prototype.insertNode = function(value) {
    if (typeof value === 'number')
        this.root = this.insertNodeUtil(value, this.root);
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.insertNodeUtil = function(value, node) {
    if (node == null) {
        node = new Tree.Node(value, null, null);
    }
    else {
        if (node.value > value) {
            node.lChild = this.insertNodeUtil(value, node.lChild);
        }
        else {
            node.rChild = this.insertNodeUtil(value, node.rChild);
        }
    }
    return node;
};

Tree.prototype.printPreOrder = function() {
    this.printPreOrderUtil(this.root);
};

Tree.prototype.printPreOrderUtil = function(node) {
    if (node != null) {
        console.log(node.value);
        this.printPreOrderUtil(node.lChild);
        this.printPreOrderUtil(node.rChild);
    }
};

var t = new Tree();
t.insertNode(5)
t.insertNode(3)
t.insertNode(1)
t.insertNode(4)
t.insertNode(7)
t.insertNode(6)
t.insertNode(8)
t.printPreOrder()



