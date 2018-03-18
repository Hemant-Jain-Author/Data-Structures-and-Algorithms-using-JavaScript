class HashTableNode {
    constructor(v, n) {
        this.value = v;
        this.next = n;
    }
}

class HashTable {
    constructor() {
        this.tableSize = 0;
        this.tableSize = 512;
        this.listArray = new Array(this.tableSize);
        for (let i = 0; i < this.tableSize; i++) {
            this.listArray[i] = null;
        }
    }

    ComputeHash(key) {
        let hashValue = 0;
        hashValue = key;
        return hashValue % this.tableSize;
    }

    resolverFun(i) {
        return i;
    }

    resolverFun2(i) {
        return i * i;
    }

    insert(value) {
        const index = this.ComputeHash(value);
        this.listArray[index] = new HashTableNode(value, this.listArray[index]);
    }

    delete(value) {
        const index = this.ComputeHash(value);
        let nextNode;
        let head = this.listArray[index];
        if (head != null && head.value === value) {
            this.listArray[index] = head.next;
            return true;
        }
        while ((head != null)) {
            nextNode = head.next;
            if (nextNode != null && nextNode.value === value) {
                head.next = nextNode.next;
                return true;
            }
            else {
                head = nextNode;
            }
        };
        return false;
    }

    print() {
        for (let i = 0; i < this.tableSize; i++) {
            console.log(`Printing for index value :: ${i}List of value printing :: `);
            let head = this.listArray[i];
            while ((head != null)) {
                console.log(head.value);
                head = head.next;
            };
        }
    }

    find(value) {
        const index = this.ComputeHash(value);
        let head = this.listArray[index];
        while ((head != null)) {
            if (head.value === value) {
                return true;
            }
            head = head.next;
        };
        return false;
    }
}

const ht = new HashTable();
for (let i = 100; i < 110; i++) {
    ht.insert(i);
}
console.log(`search 100 :: ${ht.find(100)}`);
console.log(`remove 100 :: ${ht.delete(100)}`);
console.log(`search 100 :: ${ht.find(100)}`);
console.log(`remove 100 :: ${ht.delete(100)}`);