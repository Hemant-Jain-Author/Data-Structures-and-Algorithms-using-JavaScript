class HashTableNode {
    constructor(k, v, n) {
        this.key = k;
        this.value = v;
        this.next = n;
    }
}


class HashTable {
    constructor(cmp, hashFun) {
        if (cmp === undefined || cmp === null)
            cmp = this.DefaultCompare;
        
        this.comp = cmp;  

        if (hashFun === undefined || hashFun === null)
            hashFun = this.DefaultHashFun;

        this.HashFun = hashFun;

        this.tableSize = 512;
        this.listArray = new Array(this.tableSize).fill(null);
    }

    ComputeHash(key) {
        return this.HashFun(key) % this.tableSize;
    }

    resolverFun(index) {
        return index;
    }

    DefaultCompare(first, second) {
        return first - second;
    }

    DefaultHashFun(key) {
        return key;
    }

    add(key, value) {
        if (key === undefined || key === null)
            return false;

        if (value === undefined || value === null)
            value = key;

        const index = this.ComputeHash(key);
        this.listArray[index] = new HashTableNode(key, value,
            this.listArray[index]);
    }

    delete(key) {
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
            }
            else {
                head = nextNode;
            }
        };
        return false;
    }

    print() {
        for (let i = 0; i < this.tableSize; i++) {
            let head = this.listArray[i];
            let data = "";

            while (head != null) {
                data += (`${head.value} `)
                head = head.next;
            }

            if (data != "") {
                console.log(`Index value :: ${i} Data :: ${data}`);
            }
        }
    }

    find(key) {
        const index = this.ComputeHash(key);
        let head = this.listArray[index];
        while (head != null) {
            if (head.key === key) {
                return true;
            }
            head = head.next;
        };
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
        };
        return 0;
    }
}


const ht = new HashTable();
for (var i = 1; i < 110; i++) {
    ht.add(i);
}
console.log(`search 100 :: ${ht.find(100)}`);
console.log(`Value at key 100 :: ${ht.get(100)}`);
console.log(`Remove 100 :: ${ht.delete(100)}`);
console.log(`Search 100 :: ${ht.find(100)}`);
console.log(`Remove 100 :: ${ht.delete(100)}`);

for (var i = 2; i < 190;) {
    ht.delete(i);
    i += 1
}
ht.print()