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

    levelOrderBinaryTree(arr) {
        if (arr != null && arr instanceof Array)
            this.root = this.levelOrderBinaryTreeUtil(arr, 0);
        else
            throw new Error('invalid input arguments');
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

    printBredthFirst() {
        const que = new Queue();
        let str = "";
        if (this.root !== null)
            que.add(this.root);
        let temp;
        while (que.isEmpty() === false) {
            let temp = que.remove();
            str += temp.value
            str += " "

            if (temp.left !== null)
                que.add(temp.left);
            if (temp.right !== null)
                que.add(temp.right);
        }
        console.log(str)
    }

    printDepthFirst() {
        const stk = [];
        let str = "";
        if (this.root != null)
            stk.push(this.root);

        while (stk.length !== 0) {
            let temp = stk.pop();
            str += temp.value
            str += " "

            if (temp.rChild != null)
                stk.push(temp.rChild);
            if (temp.lChild != null)
                stk.push(temp.lChild);
        }
        console.log(str)
    }

    insertNode(value) {
        if (typeof value === 'number')
            this.root = this.insertNodeUtil(value, this.root);
        else
            throw new Error('invalid input arguments');
    }

    insertNodeUtil(value, node) {
        if (node == null) {
            node = new TreeNode(value);
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

    printPreOrder() {
        this.printPreOrderUtil(this.root);
    }

    printPreOrderUtil(node) {
        if (node != null) {
            console.log(node.value);
            this.printPreOrderUtil(node.left);
            this.printPreOrderUtil(node.right);
        }
    }

    nthPreOrder(index) {
        const counter = [0];
        if (typeof index === 'number')
            return this.nthPreOrderUtil(this.root, index, counter);
        else
            throw new Error('invalid input arguments');
    }

    nthPreOrderUtil(node, index, counter) {
        let retval;
        if (node != null) {
            counter[0]++;
            if (counter[0] === index) {
                return (node.value);
            }
            retval = this.nthPreOrderUtil(node.left, index, counter);
            if (retval != null)
                return retval;
            retval = this.nthPreOrderUtil(node.right, index, counter);
            if (retval != null)
                return retval;
        }
        return null;
    }

    printPostOrder() {
        this.printPostOrderUtil(this.root);
    }

    printPostOrderUtil(node) {
        if (node != null) {
            this.printPostOrderUtil(node.left);
            this.printPostOrderUtil(node.right);
            console.log(node.value);
        }
    }

    nthPostOrder(index) {
        const counter = [0];
        if (typeof index === 'number')
            return this.nthPostOrderUtil(this.root, index, counter);
        else
            throw new Error('invalid input arguments');
    }

    nthPostOrderUtil(node, index, counter) {
        let retval;
        if (node != null) {
            retval = this.nthPostOrderUtil(node.left, index, counter);
            if (retval != null)
                return retval;
            retval = this.nthPostOrderUtil(node.right, index, counter);
            if (retval != null)
                return retval;
            counter[0]++;
            if (counter[0] === index) {
                return (node.value);
            }
        }
        return null;
    }

    printInOrder() {
        this.printInOrderUtil(this.root);
    }

    printInOrderUtil(node) {
        if (node != null) {
            this.printInOrderUtil(node.left);
            console.log(node.value);
            this.printInOrderUtil(node.right);
        }
    }

    nthInOrder(index) {
        const counter = [0];
        if (typeof index === 'number')
            return this.nthInOrderUtil(this.root, index, counter);
        else
            throw new Error('invalid input arguments');
    }

    nthInOrderUtil(node, index, counter) {
        let retval;
        if (node != null) {
            retval = this.nthInOrderUtil(node.left, index, counter);
            if (retval != null)
                return retval;
            counter[0]++;
            if (counter[0] === index) {
                return (node.value);
            }
            retval = this.nthInOrderUtil(node.right, index, counter);
            if (retval != null)
                return retval;

        }
        return null;
    }

    find(value) {
        let curr = this.root;
        while ((curr != null)) {
            if (curr.value === value) {
                return true;
            }
            else if (curr.value > value) {
                curr = curr.left;
            }
            else {
                curr = curr.right;
            }
        }
        return false;
    }

    find2(value) {
        let curr = this.root;
        while ((curr != null && curr.value !== value))
            curr = (curr.value > value) ? curr.left : curr.right;
        return curr != null;
    }

    findMin() {
        let node = this.root;
        if (node == null) {
            throw new Error('Empty tree');
        }
        while ((node.left != null)) {
            node = node.left;
        };
        return node.value;
    }

    findMax() {
        let node = this.root;
        if (node == null) {
            throw new Error('Empty tree');
        }
        while ((node.right != null)) {
            node = node.right;
        };
        return node.value;
    }

    findMaxCurr(curr) {
        if (((curr != null && curr instanceof TreeNode) || curr === null)) {
            let node = curr;
            if (node == null) {
                return null;
            }
            while ((node.right != null)) {
                node = node.right;
            };
            return node;
        }
        else
            throw new Error('invalid input arguments');
    }

    findMinCurr(curr) {
        if (((curr != null && curr instanceof TreeNode) || curr === null)) {
            let node = curr;
            if (node == null) {
                return null;
            }
            while ((node.left != null)) {
                node = node.left;
            };
            return node;
        }
        else
            throw new Error('invalid input arguments');
    }

    free() {
        this.root = null;
    }

    deleteNode(value) {
        if (typeof value === 'number')
            this.root = this.DeleteNodeUtil(this.root, value);
        else
            throw new Error('invalid input arguments');
    }

    deleteNodeUtil(node, value) {
        let temp = null;
        if (node != null) {
            if (node.value === value) {
                if (node.left == null && node.right == null) {
                    return null;
                }
                else {
                    if (node.left == null) {
                        temp = node.right;
                        return temp;
                    }
                    if (node.right == null) {
                        temp = node.left;
                        return temp;
                    }
                    const maxNode = this.FindMax(node.left);
                    const maxValue = maxNode.value;
                    node.value = maxValue;
                    node.left = this.DeleteNodeUtil(node.left, maxValue);
                }
            }
            else {
                if (node.value > value) {
                    node.left = this.DeleteNodeUtil(node.left, value);
                }
                else {
                    node.right = this.DeleteNodeUtil(node.right, value);
                }
            }
        }
        return node;
    }

    depth() {
        return this.depthUtil(this.root);
    }

    depthUtil(root) {
        if (root == null)
            return 0;
        else {
            const lDepth = this.depth(root.left);
            const rDepth = this.depth(root.right);
            if (lDepth > rDepth)
                return lDepth + 1;
            else
                return rDepth + 1;
        }
    }

    isEqual(T2) {
        if (T2 instanceof Tree)
            return this.Identical(this.root, T2.root);
        else
            throw new Error('invalid input arguments');
    }

    identical(node1, node2) {
        if (node1 == null && node2 == null)
            return true;
        else if (node1 == null || node2 == null)
            return false;
        else
            return (this.Identical(node1.left, node2.left) && this.Identical(node1.right, node2.right) && (node1.value === node2.value));
    }

    ancestor(first, second) {
        if ((typeof first === 'number') && (typeof second === 'number')) {
            if (first > second) {
                const temp = first;
                first = second;
                second = temp;
            }
            return this.AncestorUtil(this.root, first, second);
        }
        else {
            throw new Error('invalid input arguments');
        }
    }

    ancestorUtil(curr, first, second) {
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

    copyTree() {
        const tree = new Tree();
        tree.root = this.CopyTreeUtil(this.root);
        return tree;
    }

    copyTreeUtil(curr) {
        let temp;
        if (curr != null) {
            temp = new TreeNode(curr.value);
            temp.left = this.CopyTreeUtil(curr.left);
            temp.right = this.CopyTreeUtil(curr.right);
            return temp;
        }
        else
            return null;
    }

    copyMirrorTree() {
        const tree2 = new Tree();
        tree2.root = this.CopyMirrorTreeUtil(this.root);
        return tree2;
    }

    copyMirrorTreeUtil(curr) {
        let temp;
        if (curr != null) {
            temp = new TreeNode(curr.value);
            temp.right = this.CopyMirrorTree(curr.left);
            temp.left = this.CopyMirrorTree(curr.right);
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
        let max;
        let leftPath;
        let rightPath;
        let leftMax;
        let rightMax;
        if (curr == null)
            return 0;
        leftPath = this.depthUtil(curr.left);
        rightPath = this.depthUtil(curr.right);
        max = leftPath + rightPath + 1;
        leftMax = this.maxLengthPathBTUtil(curr.left);
        rightMax = this.maxLengthPathBTUtil(curr.right);
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

    printAllPath() {
        const stk = [];
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

        this.printAllPathUtil(curr.left, stk);
        this.printAllPathUtil(curr.right, stk);
        stk.pop();
    }

    sumAllBT() {
        return this.sumAllBTUtil(this.root);
    }

    sumAllBTUtil(curr) {
        let sum;
        let leftSum;
        let rightSum;
        if (curr == null)
            return 0;
        rightSum = this.sumAllBTUtil(curr.right);
        leftSum = this.sumAllBTUtil(curr.left);
        sum = rightSum + leftSum + curr.value;
        return sum;
    }

    isBST3(root) {
        if (root == null)
            return true;
        if (root.left != null && this.FindMax(root.left).value > root.value)
            return false;
        if (root.right != null && this.FindMin(root.right).value <= root.value)
            return false;
        return (this.isBST3(root.left) && this.isBST3(root.right));
    }

    isBST() {
        return this.isBSTUtil(this.root, MIN_VALUE, MAX_VALUE);
    }

    isBSTUtil(curr, min, max) {
        if (curr == null)
            return true;
        if (curr.value < min || curr.value > max)
            return false;
        return this.isBSTUtil(curr.left, min, curr.value) && this.isBSTUtil(curr.right, curr.value, max);
    }

    isBST2() {
        const count = [MIN_VALUE];
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

    treeToListRec() {
        const head = this.treeToListRecUtil(this.root);
        const temp = head;
        return temp;
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
        }
        else
            Head = curr;
        if (curr.right != null) {
            const tempHead = this.treeToListRecUtil(curr.right);
            Tail = tempHead.left;
            curr.right = tempHead;
            tempHead.left = curr;
        }
        else
            Tail = curr;
        Head.left = Tail;
        Tail.right = Head;
        return Head;
    }

    lca(first, second) {
        const ans = this.lcaUtil(this.root, first, second);
        if (ans != null)
            return ans.value;
        else
            return MIN_VALUE;
    }

    lcaUtil(curr, first, second) {
        let left;
        let right;
        if (curr == null)
            return null;
        if (curr.value === first || curr.value === second)
            return curr;
        left = this.lcaUtil(curr.left, first, second);
        right = this.lcaUtil(curr.right, first, second);
        if (left != null && right != null)
            return curr;
        else if (left != null)
            return left;
        else
            return right;
    }

    /* fair practive code 
     * banking codes & standerd board of india codes(bcsbi).
     * 
     */
    lcaBST(first, second) {
        if ((typeof first === 'number') && (typeof second === 'number')) {
            return this.lcaBSTUtil(this.root, first, second);
        }
        else
            throw new Error('invalid input arguments');
    }

    lcaBSTUtil(curr, first, second) {
        if (curr == null) {
            return MAX_VALUE;
        }
        if (curr.value > first && curr.value > second) {
            return this.lcaBSTUtil(curr.left, first, second);
        }
        if (curr.value < first && curr.value < second) {
            return this.lcaBSTUtil(curr.right, first, second);
        }
        return curr.value;
    }

    trimOutsideRange(min, max) {
        if ((typeof min === 'number') && (typeof max === 'number')) {
            this.trimOutsideRangeUtil(this.root, min, max);
        }
        else
            throw new Error('invalid input arguments');
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
        if ((typeof min === 'number') && (typeof max === 'number')) {
            this.printInRangeUtil(this.root, min, max);
        }
        else
            throw new Error('invalid input arguments');
    }

    printInRangeUtil(root, min, max) {
        if (root == null)
            return;
        this.printInRangeUtil(root.left, min, max);
        if (root.value >= min && root.value <= max)
            console.log(`${root.value} `);
        this.printInRangeUtil(root.right, min, max);
    }

    floorBST(val) {
        let curr = this.root;
        let floor = MAX_VALUE;
        while ((curr != null)) {
            if (curr.value === val) {
                floor = curr.value;
                break;
            }
            else if (curr.value > val) {
                curr = curr.left;
            }
            else {
                floor = curr.value;
                curr = curr.right;
            }
        };
        return floor;
    }

    ceilBST(val) {
        let curr = this.root;
        let ceil = MIN_VALUE;
        while ((curr != null)) {
            if (curr.value === val) {
                ceil = curr.value;
                break;
            }
            else if (curr.value > val) {
                ceil = curr.value;
                curr = curr.left;
            }
            else {
                curr = curr.right;
            }
        };
        return ceil;
    }

    findMaxBT() {
        const ans = this.findMaxBTUtil(this.root);
        return ans;
    }

    findMaxBTUtil(curr) {
        let left;
        let right;
        if (curr == null)
            return javaemul.internal.IntegerHelper.MIN_VALUE;
        let max = curr.value;
        left = this.findMaxBTUtil(curr.left);
        right = this.findMaxBTUtil(curr.right);
        if (left > max)
            max = left;
        if (right > max)
            max = right;
        return max;
    }

    searchBT(root, value) {
        let left;
        let right;
        if (root == null)
            return false;
        if (root.value === value)
            return true;
        left = this.searchBT(root.left, value);
        if (left)
            return true;
        right = this.searchBT(root.right, value);
        if (right)
            return true;
        return false;
    }

    createBinaryTree(arr) {
        if (arr != null && arr instanceof Array) {
            this.root = this.createBinaryTreeUtil(arr, 0, arr.length - 1);
        }
        else
            throw new Error('invalid input arguments');
    }

    createBinaryTreeUtil(arr, start, end) {
        let curr = null;
        if (start > end)
            return null;
        const mid = Math.floor((start + end) / 2);
        curr = new TreeNode(arr[mid]);
        curr.left = this.createBinaryTreeUtil(arr, start, mid - 1);
        curr.right = this.createBinaryTreeUtil(arr, mid + 1, end);
        return curr;
    }
}

class Queue {
    constructor() {
        this.frontIndex = 0;
        this.data = [];
    }

    add(value) {
        this.data.push(value);
    }

    remove() {
        const value = this.data[this.frontIndex];
        this.frontIndex++;
        if (this.data.length > 0 && this.frontIndex * 2 >= this.data.length) {
            this.data = this.data.slice(this.frontIndex);
            this.frontIndex = 0;
        }
        return value;
    }

    isEmpty() {
        return (this.data.length - this.frontIndex) === 0;
    }

    length() {
        return (this.data.length - this.frontIndex);
    }
}


const t = new Tree();
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
t.createBinaryTree(arr);
t.printAllPath();
t.printBredthFirst();
t.printDepthFirst();
t.printInOrder()
t.printPreOrder();
console.log("========" + t.nthPreOrder(4));
t.printPostOrder();
console.log("========" + t.nthPostOrder(4));
t.printInOrder();
console.log("========" + t.nthInOrder(4));
console.log(t.find(10));
console.log(t.find2(10));
console.log(t.find(11));
console.log(t.find2(0));
console.log(t.findMax());
console.log(t.findMin());


