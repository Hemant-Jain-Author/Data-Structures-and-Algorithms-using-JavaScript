
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

createCompleteBinaryTree(arr) {
    this.root = this.createCompleteBinaryTreeUtil(arr, 0);
}

createCompleteBinaryTreeUtil(arr, start) {
    const size = arr.length;
    const curr = new TreeNode(arr[start]);
    const left = 2 * start + 1;
    const right = 2 * start + 2;

    if (left < size)
        curr.left = this.createCompleteBinaryTreeUtil(arr, left);
    if (right < size)
        curr.right = this.createCompleteBinaryTreeUtil(arr, right);

    return curr;
}

printPreOrder() {
    process.stdout.write("Pre Order Tree: ");
    this.printPreOrderUtil(this.root);
    process.stdout.write("\n")
}

printPreOrderUtil(node) {
    if (node != null) {
        process.stdout.write(`${node.value} `);
        this.printPreOrderUtil(node.left);
        this.printPreOrderUtil(node.right);
    }
}

printPostOrder() {
    process.stdout.write("Post Order Tree: ");
    this.printPostOrderUtil(this.root);
    process.stdout.write("\n");
}

printPostOrderUtil(node) {
    if (node != null) {
        this.printPostOrderUtil(node.left);
        this.printPostOrderUtil(node.right);
        process.stdout.write(`${node.value} `);
    }
}

printInOrder() {
    process.stdout.write("In Order Tree: ");
    this.printInOrderUtil(this.root);
    process.stdout.write("\n")
}

printInOrderUtil(node) {
    if (node != null) {
        this.printInOrderUtil(node.left);
        process.stdout.write(`${node.value} `);
        this.printInOrderUtil(node.right);
    }
}

printBreadthFirst() {
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

printDepthFirst() {
    const stk = [];
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

printLevelOrderLineByLine() {
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

printLevelOrderLineByLine2() {
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

printSpiralTree() {
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

nthPreOrder(index) {
    const counter = [0];
    this.nthPreOrderUtil(this.root, index, counter);
}

nthPreOrderUtil(node, index, counter) {
    if (node != null) {
        counter[0]++;
        if (counter[0] === index) {
            console.log(`Nth Preorder node is :: ${node.value}`);
        }
        this.nthPreOrderUtil(node.left, index, counter);
        this.nthPreOrderUtil(node.right, index, counter);
    }
}

nthPostOrder(index) {
    const counter = [0];
    this.nthPostOrderUtil(this.root, index, counter);
}

nthPostOrderUtil(node, index, counter) {
    if (node != null) {
        this.nthPostOrderUtil(node.left, index, counter);
        this.nthPostOrderUtil(node.right, index, counter);
        counter[0]++;
        if (counter[0] === index) {
            console.log(`Nth Post order : ${node.value}`);
        }
    }
}

nthInOrder(index) {
    const counter = [0];
    this.nthInOrderUtil(this.root, index, counter);
}

nthInOrderUtil(node, index, counter) {
    if (node != null) {
        this.nthInOrderUtil(node.left, index, counter);
        counter[0]++;
        if (counter[0] === index) {
            console.log(`Nth InOrder Node : ${node.value}`);
        }
        this.nthInOrderUtil(node.right, index, counter);
    }
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

numNodes() {
    return this.numNodesUtil(this.root);
}

numNodesUtil(curr) {
    if (curr == null)
        return 0;
    else
        return (1 + this.numNodesUtil(curr.right) + this.numNodesUtil(curr.left));
}

sumAllBT() {
    return this.sumAllBTUtil(this.root);
}

sumAllBTUtil(curr) {
    if (curr == null)
        return 0;
    return (curr.value + this.sumAllBTUtil(curr.left) + this.sumAllBTUtil(curr.right));
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

searchBT(value) {
    return this.searchBTUtil(this.root, value);
}

searchBTUtil(curr, val) {
    if (curr == null)
        return false;

    if (curr.value === val || this.searchBTUtil(curr.left, val) || this.searchBTUtil(curr.right, val))
        return true;

    return false;
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

treeDepth() {
    return this.treeDepthUtil(this.root);
}

treeDepthUtil(curr) {
    if (curr == null)
        return 0;
    else {
        const lDepth = this.treeDepthUtil(curr.left);
        const rDepth = this.treeDepthUtil(curr.right);

        if (lDepth > rDepth)
            return lDepth + 1;
        else
            return rDepth + 1;
    }
}
 
maxLengthPathBT() {
    return this.maxLengthPathBTUtil(this.root);
}

maxLengthPathBTUtil(curr) {
    if (curr == null)
        return 0;

    const leftPath = this.treeDepthUtil(curr.left);
    const rightPath = this.treeDepthUtil(curr.right);
    let max = leftPath + rightPath + 1;

    const leftMax = this.maxLengthPathBTUtil(curr.left);
    const rightMax = this.maxLengthPathBTUtil(curr.right);

    if (leftMax > max)
        max = leftMax;

    if (rightMax > max)
        max = rightMax;

    return max;
} 
    
copyTree() {
    const tree2 = new Tree();
    tree2.root = this.copyTreeUtil(this.root);
    return tree2;
}

copyTreeUtil(curr) {
    if (curr != null) {
        const temp = new TreeNode(curr.value);
        temp.left = this.copyTreeUtil(curr.left);
        temp.right = this.copyTreeUtil(curr.right);
        return temp;
    }
    else
        return null;
}

copyMirrorTree() {
    const tree2 = new Tree();
    tree2.root = this.copyMirrorTreeUtil(this.root);
    return tree2;
}

copyMirrorTreeUtil(curr) {
    if (curr != null) {
        const temp = new TreeNode(curr.value);
        temp.right = this.copyMirrorTreeUtil(curr.left);
        temp.left = this.copyMirrorTreeUtil(curr.right);
        return temp;
    }
    else
        return null;
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

free() {
    this.root = null;
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


treeToListRec() {
    const t2 = this.copyTree();
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


createBinarySearchTree(arr) {
    this.root = this.createBinarySearchTreeUtil(arr, 0, arr.length - 1);
}

createBinarySearchTreeUtil(arr, start, end) {
    if (start > end)
        return null;

    const mid = Math.floor((start + end) / 2);
    const curr = new TreeNode(arr[mid]);
    curr.left = this.createBinarySearchTreeUtil(arr, start, mid - 1);
    curr.right = this.createBinarySearchTreeUtil(arr, mid + 1, end);
    return curr;
}  
   
insertNode(value) {
    this.root = this.insertNodeUtil(this.root, value);
}

insertNodeUtil(node, value) {
    if (node == null) {
        node = new TreeNode(value, null, null);
    }
    else {
        if (node.value > value) {
            node.left = this.insertNodeUtil(node.left, value);
        } else {
            node.right = this.insertNodeUtil(node.right, value);
        }
    }
    return node;
}

find(value) {
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

findMin() {
    let node = this.root;
    if (node == null) {
        return MAX_INT;
    }
    while (node.left != null) {
        node = node.left;
    }
    return node.value;
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

findMax() {
    let node = this.root;
    if (node == null) {
        return MIN_INT;
    }
    while (node.right != null) {
        node = node.right;
    }
    return node.value;
}

findMaxNode(curr) {
    let node = curr;
    if (node == null) {
        return null;
    }

    while (node.right != null) {
        node = node.right;
    }

    return node;
}

isBST3() {
    return this.isBST3Util(this.root);
}

isBST3Util(root) {
    if (root == null)
        return true;
    
    if (root.left != null && this.findMaxNode(root.left).value > root.value)
        return false;
    
    if (root.right != null && this.findMinNode(root.right).value <= root.value)
        return false;
    
    return (this.isBST3Util(root.left) && this.isBST3Util(root.right));
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
                const minNode = this.findMinNode(node.right);
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

lcaBST(first, second) {
    let result;
    if (first > second)
        result = this.lcaBSTUtil(this.root, second, first);
    else
        result = this.lcaBSTUtil(this.root, first, second);
    
    return result;
}

lcaBSTUtil(curr, first, second) {
    if (curr == null) {
        return MAX_INT;
    }

    if (curr.value > second) {
        return this.lcaBSTUtil(curr.left, first, second);
    }

    if (curr.value < first) {
        return this.lcaBSTUtil(curr.right, first, second);
    }

    if (this.find(first) && this.find(second))
        return curr.value;
    
    return MAX_INT;
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


ceilBST(val) {
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

floorBST(val) {
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

ancestor(first, second) {
    if (first > second) {
        const temp = first;
        first = second;
        second = temp;
    }
    return this.ancestorUtil(this.root, first, second);
}

ancestorUtil(curr, first, second) {
    if (curr == null) {
        return null;
    }
    if (curr.value > first && curr.value > second) {
        return this.ancestorUtil(curr.left, first, second);
    }
    if (curr.value < first && curr.value < second) {
        return this.ancestorUtil(curr.right, first, second);
    }
    return curr;
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
}

function isBSTArray(preorder, size) {
    const stk = [];
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

function main1() {
let t = new Tree();
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
t.createCompleteBinaryTree(arr);
t.printPreOrder();
	// 1 2 4 8 9 5 10 3 6 7 

t.printPostOrder();
	// 8 9 4 10 5 2 6 7 3 1 

t.printInOrder();
	// 8 4 9 2 10 5 1 6 3 7 

	t.iterativePreOrder();
	// 1 2 4 8 9 5 10 3 6 7 

	t.iterativePostOrder();
	// 8 9 4 10 5 2 6 7 3 1 

	t.iterativeInOrder();
	// 8 4 9 2 10 5 1 6 3 7 

	t.printBreadthFirst();
	// 1 2 3 4 5 6 7 8 9 10 

	t.printDepthFirst();
	// 1 3 7 6 2 5 10 4 9 8

	t.printLevelOrderLineByLine();
	/*
	1 
	2 3 
	4 5 6 7 
	8 9 10 
	*/

	t.printLevelOrderLineByLine2();
	/*
	1 
	2 3 
	4 5 6 7 
	8 9 10 
	*/

	t.printSpiralTree();
	// 1 2 3 7 6 5 4 8 9 10 

	t.nthInOrder(2);
	t.nthPostOrder(2);
	t.nthPreOrder(2);

	/*
	4
	9
	2
	*/

	t.printAllPath();

	/*
[1, 3, 7]
[1, 3, 6]
[1, 2, 5, 10]
[1, 2, 4, 9]
[1, 2, 4, 8]
	*/
}

function main2() {
	let t = new Tree();
	let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	t.createCompleteBinaryTree(arr);

	console.log(t.numNodes());
	// 10

	console.log(t.sumAllBT());
	// 55

	console.log(t.numLeafNodes());
	// 5

	console.log(t.numFullNodesBT());
	// 4

	console.log(t.searchBT(9));
	// true

	console.log(t.findMaxBT());
	// 10

	console.log(t.treeDepth());
	// 4

	console.log(t.maxLengthPathBT());
	// 6
}

function main3() {
	let t = new Tree();
	let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	t.createCompleteBinaryTree(arr);

	let t2 = t.copyTree();
	t2.printInOrder();
	/*
8 4 9 2 10 5 1 6 3 7 
	*/
let t3 = t.copyMirrorTree();
t3.printInOrder();
	/*
7 3 6 1 5 10 2 9 4 8
	*/
	console.log(t.isEqual(t2));
	/*
	true
	*/
	console.log(t.isHeap());
	console.log(t.isHeap2());
	console.log(t.isCompleteTree());
	console.log(t.isCompleteTree2());
	/*
	true
	true
	true
	true
	*/
}

function main4() {
let t = new Tree();
t.insertNode(6);
t.insertNode(4);
t.insertNode(2);
t.insertNode(5);
t.insertNode(1);
t.insertNode(3);
t.insertNode(8);
t.insertNode(7);
t.insertNode(9);
t.insertNode(10);
t.printInOrder();

	/*
	1 2 3 4 5 6 7 8 9 10 

	*/
console.log(t.find(3));
console.log(t.find(16));
	/*
	true
	false
	*/
	console.log(t.isBST());
	console.log(t.isBST2());
	console.log(t.isBST3());
	/*
	true
	true
	true
	*/

}

function main8() {
let t = new Tree();
t.insertNode(2);
t.insertNode(1);
t.insertNode(3);
t.insertNode(4);

console.log("Before delete operation.");
t.printInOrder();
t.deleteNode(2);
console.log("After delete operation.");
t.printInOrder();
}
/*
Before delete operation.
1 2 3 4 
After delete operation.
1 3 4 
*/

function main5() {
	let t = new Tree();
	let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	t.createBinarySearchTree(arr);
	console.log(t.findMin());
	console.log(t.findMax());
console.log("LCA :", t.lcaBST(3, 4));
console.log("LCA :", t.lcaBST(1, 4));
console.log("LCA :", t.lcaBST(10, 4));
}

/*
1
10
LCA : 3
LCA : 2
LCA : 5
*/

function main6() {
let t = new Tree();
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
t.createBinarySearchTree(arr);
t.printInOrder();
t.printInRange(4, 7);
t.trimOutsideRange(4, 7);
t.printInOrder();
}

/*
1 2 3 4 5 6 7 8 9 10 
4 5 6 7 
4 5 6 7 
*/

function main7() {
	let t = new Tree();
	let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	t.createBinarySearchTree(arr);
	console.log(t.ancestor(1, 10).value);
	// 5

	console.log(t.ceilBST(5.5));
	// 6

	console.log(t.floorBST(5.5));
	// 5

let arr1 = [ 5, 2, 4, 6, 9, 10 ];
let arr2 = [ 5, 2, 6, 4, 7, 9, 10 ];
console.log(isBSTArray(arr1));
console.log(isBSTArray(arr2));
	/*
	true
	false
	*/
}

main1();
main2();
main3();
main4();
main5();
main6();
main7();


const t = new Tree();
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
t.createCompleteBinaryTree(arr);
t.printPreOrder()
t.printPostOrder()
t.printInOrder()
t.printBreadthFirst()
t.printDepthFirst()
t.printLevelOrderLineByLine()
t.printLevelOrderLineByLine2()
t.printSpiralTree()
t.nthPreOrder(5)
t.nthPostOrder(5)
t.nthInOrder(5)
t.printAllPath()
console.log(t.numNodes())
console.log(t.sumAllBT())
console.log(t.numLeafNodes())
console.log(t.numFullNodesBT())
console.log(t.searchBT(9))
console.log(t.findMaxBT())
console.log(t.treeDepth())
console.log(t.maxLengthPathBT())
const t2 = t.copyTree()
const t3 = t.copyMirrorTree()
console.log(t.isEqual(t2))
console.log(t.isCompleteTree());
//console.log(t.isCompleteTree2());
//console.log(t.isHeap());
//console.log(t.isHeap2());

//t.printInOrder()
//t2 = t.treeToListRec(); 
//t2.printDLL()

//t.createBinarySearchTree(arr)
//t.printPreOrder()
//t.printPreOrder()
//console.log(t.find(6))
//console.log(t.find2(6))
//console.log(t.findMin())
//console.log(t.findMax())
//console.log(t.isBST());
//console.log(t.isBST2());
//console.log(t.isBST3());
//console.log("Before delete operation.")
//t.printInOrder()
//t.DeleteNode(2)
//console.log("After delete operation.")
//t.printInOrder()
//console.log(t.lcaBST(3, 4))
//console.log(t.lcaBST(1, 4))
//console.log(t.lcaBST(10, 4))
//t.trimOutsideRange(3, 9)
//t.printInOrder()
//t.printInRange(3, 9)
//console.log(t.ceilBST(8))
//console.log(t.floorBST(8))

/* Testing Code */
///const t = new Tree();
//const arr = [5, 2, 4, 6, 9, 10];
//console.log(isBSTArray(arr, arr.length))

//const arr2 = [5, 2, 6, 4, 7, 9, 10];
//console.log(isBSTArray(arr2, arr2.length))
