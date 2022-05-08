
class Queue {
    constructor() {
        this.arr = [];
    }

    add(value) {
        this.arr.push(value);
    }

    remove() {       
        return this.arr.shift();
    }

    front() {
        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length === 0
    }

    length() {
        return this.arr.length
    }
}

const MAX_INT = 2147483647;
const MIN_INT = -2147483647;

class TreeNode {
    constructor(data, left = null, right = null) {
        this.value = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    /* Other Function */

levelOrderBinaryTree(arr) {
    this.root = this.levelOrderBinaryTreeUtil(arr, 0);
}

levelOrderBinaryTreeUtil(arr, start) {
    const size = arr.length;
    const curr = new TreeNode(arr[start]);
    const left = 2 * start + 1;
    const right = 2 * start + 2;

    if (left < size)
        curr.left = this.levelOrderBinaryTreeUtil(arr, left);
    if (right < size)
        curr.right = this.levelOrderBinaryTreeUtil(arr, right);

    return curr;
}

PrintPreOrder() {
    process.stdout.write("Pre Order Tree: ");
    this.PrintPreOrderUtil(this.root);
    process.stdout.write("\n")
}

PrintPreOrderUtil(node) {
    if (node != null) {
        process.stdout.write(`${node.value} `);
        this.PrintPreOrderUtil(node.left);
        this.PrintPreOrderUtil(node.right);
    }
}

PrintPostOrder() {
    process.stdout.write("Post Order Tree: ");
    this.PrintPostOrderUtil(this.root);
    process.stdout.write("\n");
}

PrintPostOrderUtil(node) {
    if (node != null) {
        this.PrintPostOrderUtil(node.left);
        this.PrintPostOrderUtil(node.right);
        process.stdout.write(`${node.value} `);
    }
}

PrintInOrder() {
    process.stdout.write("In Order Tree: ");
    this.PrintInOrderUtil(this.root);
    process.stdout.write("\n")
}

PrintInOrderUtil(node) {
    if (node != null) {
        this.PrintInOrderUtil(node.left);
        process.stdout.write(`${node.value} `);
        this.PrintInOrderUtil(node.right);
    }
}



InsertNode(value) {
    this.root = this.InsertNodeUtil(this.root, value);
}

InsertNodeUtil(node, value) {
    if (node == null) {
        node = new TreeNode(value, null, null);
    }
    else {
        if (node.value > value) {
            node.left = this.InsertNodeUtil(node.left, value);
        } else {
            node.right = this.InsertNodeUtil(node.right, value);
        }
    }
    return node;
}


NthPreOrder(index) {
    const counter = [0];
    this.NthPreOrderUtil(this.root, index, counter);
}

NthPreOrderUtil(node, index, counter) {
    if (node != null) {
        counter[0]++;
        if (counter[0] === index) {
            console.log(`Nth Preorder node is :: ${node.value}`);
        }
        this.NthPreOrderUtil(node.left, index, counter);
        this.NthPreOrderUtil(node.right, index, counter);
    }
}


NthPostOrder(index) {
    const counter = [0];
    this.NthPostOrderUtil(this.root, index, counter);
}

NthPostOrderUtil(node, index, counter) {
    if (node != null) {
        this.NthPostOrderUtil(node.left, index, counter);
        this.NthPostOrderUtil(node.right, index, counter);
        counter[0]++;
        if (counter[0] === index) {
            console.log(`Nth Post order : ${node.value}`);
        }
    }
}


NthInOrder(index) {
    const counter = [0];
    this.NthInOrderUtil(this.root, index, counter);
}

NthInOrderUtil(node, index, counter) {
    if (node != null) {
        this.NthInOrderUtil(node.left, index, counter);
        counter[0]++;
        if (counter[0] === index) {
            console.log(`Nth InOrder Node : ${node.value}`);
        }
        this.NthInOrderUtil(node.right, index, counter);
    }
}

PrintBredthFirst() {
    const que = new Queue();
    let temp;

    if (this.root != null)
        que.add(this.root);

    process.stdout.write("Breadth First : ");
    while (que.isEmpty() === false) {
        temp = que.remove();
        process.stdout.write(`${temp.value} `);
        if (temp.left != null)
            que.add(temp.left);
        if (temp.right != null)
            que.add(temp.right);
    }
    process.stdout.write("\n");
}

PrintDepthFirst() {
    const stk = ([]);
    let temp;
    if (this.root != null)
        stk.push(this.root);

    process.stdout.write("Depth First : ");
    while (stk.length > 0) {
        temp = stk.pop();
        process.stdout.write(`${temp.value} `);
        if (temp.right != null)
            stk.push(temp.right);
        if (temp.left != null)
            stk.push(temp.left);
    }
    process.stdout.write("\n");
}

PrintLevelOrderLineByLine() {
    const que1 = new Queue();
    const que2 = new Queue();
    let temp = null;
    if (this.root != null)
        que1.add(this.root);
    
    process.stdout.write("Level Order LineByLine : \n");
    while (que1.length() !== 0 || que2.length() !== 0) {
        while (que1.length() !== 0) {
            temp = que1.remove();
            process.stdout.write(` ${temp.value}`);
            if (temp.left != null)
                que2.add(temp.left);
            if (temp.right != null)
                que2.add(temp.right);
        }
        process.stdout.write("\n");

        while (que2.length() !== 0) {
            temp = que2.remove();
            process.stdout.write(` ${temp.value}`);
            if (temp.left != null)
                que1.add(temp.left);
            if (temp.right != null)
                que1.add(temp.right);
        }
        process.stdout.write("\n");
    }
}

PrintLevelOrderLineByLine2() {
    const que = new Queue();
    let temp = null;
    let count = 0;
    if (this.root != null)
        que.add(this.root);

    process.stdout.write("Level Order LineByLine : \n");
    while (que.length() !== 0) {
        count = que.length();
        while (count > 0) {
            temp = que.remove();
            process.stdout.write(` ${temp.value}`);
            if (temp.left != null)
                que.add(temp.left);
            if (temp.right != null)
                que.add(temp.right);
            count -= 1;
        }
        process.stdout.write("\n");
    }
}

PrintSpiralTree() {
    const stk1 = ([]);
    const stk2 = ([]);
    let temp;
    if (this.root != null)
        stk1.push(this.root);

    process.stdout.write("Spiral Tree : \n");
    while (stk1.length !== 0 || stk2.length !== 0) {
        while (stk1.length !== 0) {
            temp = stk1.pop();
            process.stdout.write(` ${temp.value}`);
            if (temp.right != null)
                stk2.push(temp.right);
            if (temp.left != null)
                stk2.push(temp.left);
        }
        process.stdout.write("\n");
        while (stk2.length !== 0) {
            temp = stk2.pop();
            process.stdout.write(` ${temp.value}`);
            if (temp.left != null)
                stk1.push(temp.left);
            if (temp.right != null)
                stk1.push(temp.right);
        }
        process.stdout.write("\n");
    }
}

Find(value) {
    let curr = this.root;
    while (curr != null) {
        if (curr.value === value) {
            return true;
        }
        else if (curr.value > value) {
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    return false;
}

Find2(value) {
    let curr = this.root;
    while (curr != null && curr.value !== value) {
        curr = (curr.value > value) ? curr.left : curr.right;
    }
    return curr != null;
}

FindMin() {
    let node = this.root;
    if (node == null) {
        return MAX_INT;
    }
    while (node.left != null) {
        node = node.left;
    }
    return node.value;
}
FindMinNode(curr) {
    let node = curr;
    if (node == null) {
        return null;
    }

    while (node.left != null) {
        node = node.left;
    }

    return node;
}
FindMax() {
    let node = this.root;
    if (node == null) {
        return MIN_INT;
    }
    while (node.right != null) {
        node = node.right;
    }
    return node.value;
}

FindMaxNode(curr) {
    let node = curr;
    if (node == null) {
        return null;
    }

    while (node.right != null) {
        node = node.right;
    }

    return node;
}



Free() {
    this.root = null;
}

DeleteNode(value) {
    this.root = this.DeleteNodeUtil(this.root, value);
}

DeleteNodeUtil(node, value) {
    let temp = null;
    if (node != null) {
        if (node.value === value) {
            if (node.left == null && node.right == null) {
                return null;
            } else {
                if (node.left == null) {
                    temp = node.right;
                    return temp;
                }
                if (node.right == null) {
                    temp = node.left;
                    return temp;
                }
                const minNode = this.FindMinNode(node.right);
                const minValue = minNode.value;
                node.value = minValue;
                node.right = this.DeleteNodeUtil(node.right, minValue);
            }
        } else {
            if (node.value > value) {
                node.left = this.DeleteNodeUtil(node.left, value);
            } else {
                node.right = this.DeleteNodeUtil(node.right, value);
            }
        }
    }
    return node;
}

TreeDepth() {
    return this.TreeDepthUtil(this.root);
}

TreeDepthUtil(curr) {
    if (curr == null)
        return 0;
    else {
        const lDepth = this.TreeDepthUtil(curr.left);
        const rDepth = this.TreeDepthUtil(curr.right);

        if (lDepth > rDepth)
            return lDepth + 1;
        else
            return rDepth + 1;
    }
}

isEqual({root}) {
    return this.isEqualUtil(this.root, root);
}

isEqualUtil(node1, node2) {
    if (node1 == null && node2 == null)
        return true;
    else if (node1 == null || node2 == null)
        return false;
    else
        return (this.isEqualUtil(node1.left, node2.left) && 
            this.isEqualUtil(node1.right, node2.right) && 
            (node1.value === node2.value));
}

Ancestor(first, second) {
    if (first > second) {
        const temp = first;
        first = second;
        second = temp;
    }
    return this.AncestorUtil(this.root, first, second);
}

AncestorUtil(curr, first, second) {
    if (curr == null) {
        return null;
    }
    if (curr.value > first && curr.value > second) {
        return this.AncestorUtil(curr.left, first, second);
    }
    if (curr.value < first && curr.value < second) {
        return this.AncestorUtil(curr.right, first, second);
    }
    return curr;
}

CopyTree() {
    const tree2 = new Tree();
    tree2.root = this.CopyTreeUtil(this.root);
    return tree2;
}

CopyTreeUtil(curr) {
    if (curr != null) {
        const temp = new TreeNode(curr.value);
        temp.left = this.CopyTreeUtil(curr.left);
        temp.right = this.CopyTreeUtil(curr.right);
        return temp;
    }
    else
        return null;
}

CopyMirrorTree() {
    const tree2 = new Tree();
    tree2.root = this.CopyMirrorTreeUtil(this.root);
    return tree2;
}

CopyMirrorTreeUtil(curr) {
    if (curr != null) {
        const temp = new TreeNode(curr.value);
        temp.right = this.CopyMirrorTreeUtil(curr.left);
        temp.left = this.CopyMirrorTreeUtil(curr.right);
        return temp;
    }
    else
        return null;
}

numNodes() {
    return this.numNodesUtil(this.root);
}

numNodesUtil(curr) {
    if (curr == null)
        return 0;
    else
        return (1 + this.numNodesUtil(curr.right) + this.numNodesUtil(curr.left));
}

numFullNodesBT() {
    return this.numFullNodesBTUtil(this.root);
}

numFullNodesBTUtil(curr) {
    let count;
    if (curr == null)
        return 0;
    
    count = this.numFullNodesBTUtil(curr.right) + this.numFullNodesBTUtil(curr.left);
    if (curr.right != null && curr.left != null)
        count++;
    return count;
}

maxLengthPathBT() {
    return this.maxLengthPathBTUtil(this.root);
}

maxLengthPathBTUtil(curr) {
    if (curr == null)
        return 0;

    const leftPath = this.TreeDepthUtil(curr.left);
    const rightPath = this.TreeDepthUtil(curr.right);
    let max = leftPath + rightPath + 1;

    const leftMax = this.maxLengthPathBTUtil(curr.left);
    const rightMax = this.maxLengthPathBTUtil(curr.right);

    if (leftMax > max)
        max = leftMax;

    if (rightMax > max)
        max = rightMax;

    return max;
}

numLeafNodes() {
    return this.numLeafNodesUtil(this.root);
}

numLeafNodesUtil(curr) {
    if (curr == null)
        return 0;

    if (curr.left == null && curr.right == null)
        return 1;
    else
        return (this.numLeafNodesUtil(curr.right) + this.numLeafNodesUtil(curr.left));
}

sumAllBT() {
    return this.sumAllBTUtil(this.root);
}

sumAllBTUtil(curr) {
    if (curr == null)
        return 0;
    return (curr.value + this.sumAllBTUtil(curr.left) + this.sumAllBTUtil(curr.right));
}

iterativePreOrder() {
    const stk = ([]);
    let curr;

    if (this.root != null)
        stk.push(this.root);

    process.stdout.write("Iterative Pre Order : ");
    while (stk.length > 0) {
        curr = stk.pop();
        process.stdout.write(` ${curr.value}`);
        if (curr.right != null)
            stk.push(curr.right);
        if (curr.left != null)
            stk.push(curr.left);
    }
    process.stdout.write("\n");
}

iterativePostOrder() {
    const stk = ([]);
    const visited = ([]);
    let curr;
    let vtd;

    if (this.root != null) {
        stk.push(this.root);
        visited.push(0);
    }

    process.stdout.write("Iterative Post Order : ");
    while (stk.length > 0) {
        curr = stk.pop();
        vtd = visited.pop();
        if (vtd === 1) {
            process.stdout.write(` ${curr.value}`);
        } else {
            stk.push(curr);
            visited.push(1);
            if (curr.right != null) {
                stk.push(curr.right);
                visited.push(0);
            }
            if (curr.left != null) {
                stk.push(curr.left);
                visited.push(0);
            }
        }
    }
    process.stdout.write("\n");
}

iterativeInOrder() {
    const stk = ([]);
    const visited = ([]);
    let curr;
    let vtd;

    if (this.root != null) {
        stk.push(this.root);
        visited.push(0);
    }

    process.stdout.write("Iterative In Order : ");
    while (stk.length > 0) {
        curr = stk.pop();
        vtd = visited.pop();
        if (vtd === 1) {
            process.stdout.write(` ${curr.value}`);
        } else {
            if (curr.right != null) {
                stk.push(curr.right);
                visited.push(0);
            }
            stk.push(curr);
            visited.push(1);
            if (curr.left != null) {
                stk.push(curr.left);
                visited.push(0);
            }
        }
    }
    process.stdout.write("\n");
}

isBST3(root) {
    if (root == null)
        return true;
    
    if (root.left != null && this.FindMaxNode(root.left).value > root.value)
        return false;
    
    if (root.right != null && this.FindMinNode(root.right).value <= root.value)
        return false;
    
    return (this.isBST3(root.left) && this.isBST3(root.right));
}

isBST() {
    return this.isBSTUtil(this.root, MIN_INT, MAX_INT);
}

isBSTUtil(curr, min, max) {
    if (curr == null)
        return true;
    
    if (curr.value < min || curr.value > max)
        return false;
    
    return this.isBSTUtil(curr.left, min, curr.value) && this.isBSTUtil(curr.right, curr.value, max);
}

isBST2() {
    const count = [0];
    return this.isBST2Util(this.root, count);
}

isBST2Util(root, count) {
    let ret;
    if (root != null) {
        ret = this.isBST2Util(root.left, count);
        if (!ret)
            return false;
        
        if (count[0] > root.value)
            return false;

        count[0] = root.value;
        ret = this.isBST2Util(root.right, count);
        if (!ret)
            return false;
    }
    return true;
}

isCompleteTree() {
    const que = new Queue();
    let temp = null;
    let noChild = 0;
    if (this.root != null)
        que.add(this.root);

    while (que.length() !== 0) {
        temp = que.remove();
        if (temp.left != null) {
            if (noChild === 1)
                return false;
            que.add(temp.left);
        } else
            noChild = 1;

        if (temp.right != null) {
            if (noChild === 1)
                return false;
            que.add(temp.right);
        } else
            noChild = 1;
    }
    return true;
}

isCompleteTreeUtil(curr, index, count) {
    if (curr == null)
        return true;
    
    if (index > count)
        return false;
    
    return this.isCompleteTreeUtil(curr.left, index * 2 + 1, count) && this.isCompleteTreeUtil(curr.right, index * 2 + 2, count);
}

isCompleteTree2() {
    const count = this.numNodes();
    return this.isCompleteTreeUtil(this.root, 0, count);
}

isHeapUtil(curr, parentValue) {
    if (curr == null)
        return true;
    
    if (curr.value < parentValue)
        return false;
    
    return (this.isHeapUtil(curr.left, curr.value) &&
        this.isHeapUtil(curr.right, curr.value));
}

isHeap() {
    const infi = MIN_INT;
    return (this.isCompleteTree() && this.isHeapUtil(this.root, infi));
}

isHeapUtil2(curr, index, count, parentValue) {
    if (curr == null)
        return true;
    
    if (index > count)
        return false;
    
    if (curr.value < parentValue)
        return false;
    
    return this.isHeapUtil2(curr.left, index * 2 + 1, count, curr.value) && this.isHeapUtil2(curr.right, index * 2 + 2, count, curr.value);
}

isHeap2() {
    const count = this.numNodes();
    const parentValue = MIN_INT;
    return this.isHeapUtil2(this.root, 0, count, parentValue);
}

treeToListRec() {
    const t2 = this.CopyTree();
    const root = this.treeToListRecUtil(t2.root);
    t2.root = root
    return t2;
}

treeToListRecUtil(curr) {
    let Head = null;
    let Tail = null;
    if (curr == null)
        return null;

    if (curr.left == null && curr.right == null) {
        curr.left = curr;
        curr.right = curr;
        return curr;
    }

    if (curr.left != null) {
        Head = this.treeToListRecUtil(curr.left);
        Tail = Head.left;
        curr.left = Tail;
        Tail.right = curr;
    } else
        Head = curr;

    if (curr.right != null) {
        const tempHead = this.treeToListRecUtil(curr.right);
        Tail = tempHead.left;
        curr.right = tempHead;
        tempHead.left = curr;
    } else
        Tail = curr;

    Head.left = Tail;
    Tail.right = Head;
    return Head;
}

printDLL() {
    if (this.root == null) {
        return;
    }
    let curr = this.root;
    let tail = curr.left;
    process.stdout.write(`DLL nodes are : `);
    while (curr !== tail) {
        process.stdout.write(`${curr.value} `);
        curr = curr.right;
    }
    process.stdout.write(`${curr.value}\n`);
}

printAllPath() {
    const stk = ([]);
    console.log("Print All Path : ");
    this.printAllPathUtil(this.root, stk);
}

printAllPathUtil(curr, stk) {
    if (curr == null)
        return;
    stk.push(curr.value);

    if (curr.left == null && curr.right == null) {
        console.log(stk);
        stk.pop();
        return;
    }

    this.printAllPathUtil(curr.right, stk);
    this.printAllPathUtil(curr.left, stk);
    stk.pop();
}

LCA(first, second) {
    const ans = this.LCAUtil(this.root, first, second);
    if (ans != null)
        return ans.value;
    else
        return MIN_INT;
}

LCAUtil(curr, first, second) {
    let left;
    let right;

    if (curr == null)
        return null;
    if (curr.value === first || curr.value === second)
        return curr;

    left = this.LCAUtil(curr.left, first, second);
    right = this.LCAUtil(curr.right, first, second);

    if (left != null && right != null)
        return curr;
    else if (left != null)
        return left;
    else
        return right;
}

LcaBST(first, second) {
    return this.LcaBSTUtil(this.root, first, second);
}

LcaBSTUtil(curr, first, second) {
    if (curr == null) {
        return MAX_INT;
    }

    if (curr.value > first && curr.value > second) {
        return this.LcaBSTUtil(curr.left, first, second);
    }

    if (curr.value < first && curr.value < second) {
        return this.LcaBSTUtil(curr.right, first, second);
    }

    return curr.value;
}

trimOutsideRange(min, max) {
    this.trimOutsideRangeUtil(this.root, min, max);
}

trimOutsideRangeUtil(curr, min, max) {
    if (curr == null)
        return null;

    curr.left = this.trimOutsideRangeUtil(curr.left, min, max);
    curr.right = this.trimOutsideRangeUtil(curr.right, min, max);

    if (curr.value < min) {
        return curr.right;
    }

    if (curr.value > max) {
        return curr.left;
    }

    return curr;
}

printInRange(min, max) {
    process.stdout.write("Print In Range : ");
    this.printInRangeUtil(this.root, min, max);
    process.stdout.write("\n");
}

printInRangeUtil(curr, min, max) {
    if (curr == null)
        return;
    
    this.printInRangeUtil(curr.left, min, max);
    if (curr.value >= min && curr.value <= max)
        process.stdout.write(`${curr.value} `);
    this.printInRangeUtil(curr.right, min, max);
}

FloorBST(val) {
    let curr = this.root;
    let floor = MAX_INT;
    while (curr != null) {
        if (curr.value === val) {
            floor = curr.value;
            break;
        } else if (curr.value > val) {
            curr = curr.left;
        } else {
            floor = curr.value;
            curr = curr.right;
        }
    }
    return floor;
}

CeilBST(val) {
    let curr = this.root;
    let ceil = MIN_INT;
    while (curr != null) {
        if (curr.value === val) {
            ceil = curr.value;
            break;
        } else if (curr.value > val) {
            ceil = curr.value;
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    return ceil;
}

findMaxBT() {
    const ans = this.findMaxBTUtil(this.root);
    return ans;
}

findMaxBTUtil(curr) {
    if (curr == null)
        return MIN_INT;

    let max = curr.value;
    const left = this.findMaxBTUtil(curr.left);
    const right = this.findMaxBTUtil(curr.right);

    if (left > max)
        max = left;
    
    if (right > max)
        max = right;
    
    return max;
}

searchBT(value) {
    return this.searchBTUtil(this.root, value);
}

searchBTUtil(curr, value) {
    if (curr == null)
        return false;

    if (curr.value === value)
        return true;

    const left = this.searchBTUtil(curr.left, value);
    if (left)
        return true;

    const right = this.searchBTUtil(curr.right, value);
    if (right)
        return true;

    return false;
}

CreateBinarySearchTree(arr) {
    this.root = this.CreateBinarySearchTreeUtil(arr, 0, arr.length - 1);
}

CreateBinarySearchTreeUtil(arr, start, end) {
    if (start > end)
        return null;

    const mid = Math.floor((start + end) / 2);
    const curr = new TreeNode(arr[mid]);
    curr.left = this.CreateBinarySearchTreeUtil(arr, start, mid - 1);
    curr.right = this.CreateBinarySearchTreeUtil(arr, mid + 1, end);
    return curr;
}
}

function isBSTArray(preorder, size) {
    const stk = ([]);
    let value;
    let root = MIN_INT;

    for (let i = 0; i < size; i++) {
        value = preorder[i];
        // If value of the right child is less than root.
        if (value < root)
            return false;
        // First left child values will be popped
        // Last popped value will be the root.
        while (stk.length > 0 && stk[stk.length - 1] < value) {
            root = stk.pop();
        }
        // add current value to the stack.
        stk.push(value);
    }
    return true;
}


const t = new Tree();
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
t.levelOrderBinaryTree(arr);
t.PrintPreOrder()
t.PrintPostOrder()
t.PrintInOrder()
t.PrintBredthFirst()
t.PrintDepthFirst()
t.PrintLevelOrderLineByLine()
t.PrintLevelOrderLineByLine2()
t.PrintSpiralTree()
t.NthPreOrder(5)
t.NthPostOrder(5)
t.NthInOrder(5)
t.printAllPath()
console.log(t.numNodes())
console.log(t.sumAllBT())
console.log(t.numLeafNodes())
console.log(t.numFullNodesBT())
console.log(t.searchBT(9))
console.log(t.findMaxBT())
console.log(t.TreeDepth())
console.log(t.maxLengthPathBT())
const t2 = t.CopyTree()
const t3 = t.CopyMirrorTree()
console.log(t.isEqual(t2))
console.log(t.isCompleteTree());
//console.log(t.isCompleteTree2());
//console.log(t.isHeap());
//console.log(t.isHeap2());

//t.PrintInOrder()
//t2 = t.treeToListRec(); 
//t2.printDLL()

//t.CreateBinarySearchTree(arr)
//t.PrintPreOrder()
//t.PrintPreOrder()
//console.log(t.Find(6))
//console.log(t.Find2(6))
//console.log(t.FindMin())
//console.log(t.FindMax())
//console.log(t.isBST());
//console.log(t.isBST2());
//console.log(t.isBST3());
//console.log("Before delete operation.")
//t.PrintInOrder()
//t.DeleteNode(2)
//console.log("After delete operation.")
//t.PrintInOrder()
//console.log(t.LcaBST(3, 4))
//console.log(t.LcaBST(1, 4))
//console.log(t.LcaBST(10, 4))
//t.trimOutsideRange(3, 9)
//t.PrintInOrder()
//t.printInRange(3, 9)
//console.log(t.CeilBST(8))
//console.log(t.FloorBST(8))

/* Testing Code */
///const t = new Tree();
//const arr = [5, 2, 4, 6, 9, 10];
//console.log(isBSTArray(arr, arr.length))

//const arr2 = [5, 2, 6, 4, 7, 9, 10];
//console.log(isBSTArray(arr2, arr2.length))
