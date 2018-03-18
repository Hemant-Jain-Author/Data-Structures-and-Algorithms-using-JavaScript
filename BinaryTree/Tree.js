class Queue {
    constructor() {
        this.stk1 = [];
        this.stk2 = [];
    }

    add(value) {
        this.stk1.push(value);
    }

    remove() {
        let value;
        if ((this.stk2).length > 0) {
            return this.stk2.pop();
        }
        while ((this.stk1).length > 0) {
            value = this.stk1.pop();
            this.stk2.push(value);
        };
        return this.stk2.pop();
    }

    isEmpty() {
        return (this.stk1.length + this.stk2.length) === 0
    }
}

class TreeNode {
    constructor(data, left = null, right = null) {
        this.value = data;
        this.lChild = left;
        this.rChild = right;
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
            curr.lChild = this.levelOrderBinaryTreeUtil(arr, left);
        if (right < size)
            curr.rChild = this.levelOrderBinaryTreeUtil(arr, right);
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

            if (temp.lChild !== null)
                que.add(temp.lChild);
            if (temp.rChild !== null)
                que.add(temp.rChild);
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

            if (temp.lChild != null)
                stk.push(temp.lChild);
            if (temp.rChild != null)
                stk.push(temp.rChild);
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
                node.lChild = this.insertNodeUtil(value, node.lChild);
            }
            else {
                node.rChild = this.insertNodeUtil(value, node.rChild);
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
            this.printPreOrderUtil(node.lChild);
            this.printPreOrderUtil(node.rChild);
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
            retval = this.nthPreOrderUtil(node.lChild, index, counter);
            if(retval != null)
                return retval;
            retval = this.nthPreOrderUtil(node.rChild, index, counter);
            if(retval != null)
                return retval;
        }
        return null;
    }

    printPostOrder() {
        this.printPostOrderUtil(this.root);
    }

    printPostOrderUtil(node) {
        if (node != null) {
            this.printPostOrderUtil(node.lChild);
            this.printPostOrderUtil(node.rChild);
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
            retval = this.nthPostOrderUtil(node.lChild, index, counter);
            if(retval != null)
                return retval;
            retval = this.nthPostOrderUtil(node.rChild, index, counter);
            if(retval != null)
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
            this.printInOrderUtil(node.lChild);
            console.log(node.value);
            this.printInOrderUtil(node.rChild);
        }
    }

    nthInOrder(index) {
        const counter=[0];
        if (typeof index === 'number')
            return this.nthInOrderUtil(this.root, index, counter);
        else
            throw new Error('invalid input arguments');
    }

    nthInOrderUtil(node, index, counter) {
        let retval;
        if (node != null) {
            retval = this.nthInOrderUtil(node.lChild, index, counter);
            if(retval != null)
                return retval;
            counter[0]++;
            if (counter[0] === index) {
                return(node.value);
            }
            retval = this.nthInOrderUtil(node.rChild, index, counter);
            if(retval != null)
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
                curr = curr.lChild;
            }
            else {
                curr = curr.rChild;
            }
        }
        return false;
    }

    find2(value) {
        let curr = this.root;
        while ((curr != null && curr.value !== value))
            curr = (curr.value > value) ? curr.lChild : curr.rChild;
        return curr != null;
    }

    findMin() {
        let node = this.root;
        if (node == null) {
            throw new Error('Empty tree');
        }
        while ((node.lChild != null)) {
            node = node.lChild;
        };
        return node.value;
    }

    findMax() {
        let node = this.root;
        if (node == null) {
            throw new Error('Empty tree');
        }
        while ((node.rChild != null)) {
            node = node.rChild;
        };
        return node.value;
    }

    findMaxCurr(curr) {
        if (((curr != null && curr instanceof TreeNode) || curr === null)) {
            let node = curr;
            if (node == null) {
                return null;
            }
            while ((node.rChild != null)) {
                node = node.rChild;
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
            while ((node.lChild != null)) {
                node = node.lChild;
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
                if (node.lChild == null && node.rChild == null) {
                    return null;
                }
                else {
                    if (node.lChild == null) {
                        temp = node.rChild;
                        return temp;
                    }
                    if (node.rChild == null) {
                        temp = node.lChild;
                        return temp;
                    }
                    const maxNode = this.FindMax(node.lChild);
                    const maxValue = maxNode.value;
                    node.value = maxValue;
                    node.lChild = this.DeleteNodeUtil(node.lChild, maxValue);
                }
            }
            else {
                if (node.value > value) {
                    node.lChild = this.DeleteNodeUtil(node.lChild, value);
                }
                else {
                    node.rChild = this.DeleteNodeUtil(node.rChild, value);
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
            const lDepth = this.depth(root.lChild);
            const rDepth = this.depth(root.rChild);
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
            return (this.Identical(node1.lChild, node2.lChild) && this.Identical(node1.rChild, node2.rChild) && (node1.value === node2.value));
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
            return this.AncestorUtil(curr.lChild, first, second);
        }
        if (curr.value < first && curr.value < second) {
            return this.AncestorUtil(curr.rChild, first, second);
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
            temp.lChild = this.CopyTreeUtil(curr.lChild);
            temp.rChild = this.CopyTreeUtil(curr.rChild);
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
            temp.rChild = this.CopyMirrorTree(curr.lChild);
            temp.lChild = this.CopyMirrorTree(curr.rChild);
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
            return (1 + this.numNodesUtil(curr.rChild) + this.numNodesUtil(curr.lChild));
    }

    numFullNodesBT() {
        return this.numFullNodesBTUtil(this.root);
    }

    numFullNodesBTUtil(curr) {
        let count;
        if (curr == null)
            return 0;
        count = this.numFullNodesBTUtil(curr.rChild) + this.numFullNodesBTUtil(curr.lChild);
        if (curr.rChild != null && curr.lChild != null)
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
        leftPath = this.depthUtil(curr.lChild);
        rightPath = this.depthUtil(curr.rChild);
        max = leftPath + rightPath + 1;
        leftMax = this.maxLengthPathBTUtil(curr.lChild);
        rightMax = this.maxLengthPathBTUtil(curr.rChild);
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
        if (curr.lChild == null && curr.rChild == null)
            return 1;
        else
            return (this.numLeafNodesUtil(curr.rChild) + this.numLeafNodesUtil(curr.lChild));
    }

    printAllPath() {
        const stk = [];
        this.printAllPathUtil(this.root,stk);
    }

    printAllPathUtil(curr, stk) {
        if(curr == null)
            return;

        stk.push(curr.value);

        if(curr.lChild == null && curr.rChild == null)
        {
            console.log(stk);
            stk.pop();
            return;
        }

        this.printAllPathUtil(curr.lChild,stk);
        this.printAllPathUtil(curr.rChild,stk);
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
        rightSum = this.sumAllBTUtil(curr.rChild);
        leftSum = this.sumAllBTUtil(curr.lChild);
        sum = rightSum + leftSum + curr.value;
        return sum;
    }

    isBST3(root) {
        if (root == null)
            return true;
        if (root.lChild != null && this.FindMax(root.lChild).value > root.value)
            return false;
        if (root.rChild != null && this.FindMin(root.rChild).value <= root.value)
            return false;
        return (this.isBST3(root.lChild) && this.isBST3(root.rChild));
    }

    isBST() {
        return this.isBSTUtil(this.root, MIN_VALUE, MAX_VALUE);
    }

    isBSTUtil(curr, min, max) {
        if (curr == null)
            return true;
        if (curr.value < min || curr.value > max)
            return false;
        return this.isBSTUtil(curr.lChild, min, curr.value) && this.isBSTUtil(curr.rChild, curr.value, max);
    }

    isBST2() {
        const count=[MIN_VALUE];
        return this.isBST2Util(this.root, count);
    }

    isBST2Util(root, count) {
        let ret;
        if (root != null) {
            ret = this.isBST2Util(root.lChild, count);
            if (!ret)
                return false;
            if (count[0] > root.value)
                return false;
            count[0] = root.value;
            ret = this.isBST2Util(root.rChild, count);
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
        if (curr.lChild == null && curr.rChild == null) {
            curr.lChild = curr;
            curr.rChild = curr;
            return curr;
        }
        if (curr.lChild != null) {
            Head = this.treeToListRecUtil(curr.lChild);
            Tail = Head.lChild;
            curr.lChild = Tail;
            Tail.rChild = curr;
        }
        else
            Head = curr;
        if (curr.rChild != null) {
            const tempHead = this.treeToListRecUtil(curr.rChild);
            Tail = tempHead.lChild;
            curr.rChild = tempHead;
            tempHead.lChild = curr;
        }
        else
            Tail = curr;
        Head.lChild = Tail;
        Tail.rChild = Head;
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
        left = this.lcaUtil(curr.lChild, first, second);
        right = this.lcaUtil(curr.rChild, first, second);
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
            return this.lcaBSTUtil(curr.lChild, first, second);
        }
        if (curr.value < first && curr.value < second) {
            return this.lcaBSTUtil(curr.rChild, first, second);
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
        curr.lChild = this.trimOutsideRangeUtil(curr.lChild, min, max);
        curr.rChild = this.trimOutsideRangeUtil(curr.rChild, min, max);
        if (curr.value < min) {
            return curr.rChild;
        }
        if (curr.value > max) {
            return curr.lChild;
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
        this.printInRangeUtil(root.lChild, min, max);
        if (root.value >= min && root.value <= max)
            console.log(`${root.value} `);
        this.printInRangeUtil(root.rChild, min, max);
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
                curr = curr.lChild;
            }
            else {
                floor = curr.value;
                curr = curr.rChild;
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
                curr = curr.lChild;
            }
            else {
                curr = curr.rChild;
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
        left = this.findMaxBTUtil(curr.lChild);
        right = this.findMaxBTUtil(curr.rChild);
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
        left = this.searchBT(root.lChild, value);
        if (left)
            return true;
        right = this.searchBT(root.rChild, value);
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
            curr.lChild = this.createBinaryTreeUtil(arr, start, mid - 1);
            curr.rChild = this.createBinaryTreeUtil(arr, mid + 1, end);
            return curr;
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


