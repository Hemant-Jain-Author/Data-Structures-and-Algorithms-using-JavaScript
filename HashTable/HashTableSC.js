class HashTableNode {
    constructor(k, v, n) {
        this.key = k;
        this.value = v;
        this.next = n;
    }
}

class HashTable {
    constructor(cmp, hashFun) {
        this.comp = (cmp === undefined || cmp === null) ? this.DefaultCompare : cmp;
        this.HashFun = (hashFun === undefined || hashFun === null) ? this.DefaultHashFun : hashFun; 
        this.tableSize = 512;
        this.listArray = new Array(this.tableSize).fill(null);
    }

    ComputeHash(key) {
        return this.HashFun(key) % this.tableSize;
    }

    DefaultCompare(first, second) {
        return first - second;
    }

    DefaultHashFun(key) {
        return key;
    }
    /* Other methods */
    
    add(key, value) {
        if (key === undefined || key === null)
            return false;

        if (value === undefined || value === null)
            value = key;

        const index = this.ComputeHash(key);
        this.listArray[index] = new HashTableNode(key, value,this.listArray[index]);
    }

    remove(key) {
        const index = this.ComputeHash(key);
        let nextNode;
        let head = this.listArray[index];
        if (head != null && head.key === key) {
            this.listArray[index] = head.next;
            return true;
        }

        while (head != null) {
            nextNode = head.next;
            if (nextNode != null && nextNode.key === key) {
                head.next = nextNode.next;
                return true;
            } else {
                head = nextNode;
            }
        }
        return false;
    }

    print() {
        let output = "Hash Table contains ::";
        for (let i = 0; i < this.tableSize; i++) {
            let head = this.listArray[i];
            while (head != null) {
                output += "(" + head.key + "=>" +head.value + ") "
                head = head.next;
            }
        }
        console.log(output);
    }

    find(key) {
        const index = this.ComputeHash(key);
        let head = this.listArray[index];
        while (head != null) {
            if (head.key === key) {
                return true;
            }
            head = head.next;
        }
        return false;
    }

    get(key) {
        const index = this.ComputeHash(key);
        let head = this.listArray[index];
        while (head != null) {
            if (head.key === key) {
                return head.value;
            }
            head = head.next;
        }
        return 0;
    }
}


// Testing code.
const ht = new HashTable();
ht.add(1, 10);
ht.add(2, 20);
ht.add(3, 30);
ht.print();

console.log("Find key 2 : ", ht.find(2));
console.log("Value at key 2 : ",ht.get(2))
ht.remove(1)
ht.print()