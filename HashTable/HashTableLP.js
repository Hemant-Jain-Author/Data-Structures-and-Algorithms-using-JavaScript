const Node = { "EMPTY_NODE": 0, "LAZY_DELETED": 1, "FILLED_NODE": 2 };
Object.freeze(Node)

class HashTable {
    constructor(tSize) {
        this.tableSize = 0;
        this.tableSize = tSize;
        this.Arr = new Array(tSize + 1);
        this.Flag = new Array(tSize + 1);
        for (let i = 0; i <= tSize; i++) {
            this.Flag[i] = Node.EMPTY_NODE;
        }
    }

    ComputeHash(key) {
        return key % this.tableSize;
    }

    resolverFun(index) {
        return index;
    }

    InsertNode(value) {
        let hashValue = this.ComputeHash(value);
        for (let i = 0; i < this.tableSize; i++) {
            if (this.Flag[hashValue] === Node.EMPTY_NODE || this.Flag[hashValue] === Node.LAZY_DELETED) {
                this.Arr[hashValue] = value;
                this.Flag[hashValue] = Node.FILLED_NODE;
                return true;
            }
            hashValue += this.resolverFun(i);
            hashValue %= this.tableSize;
        }
        return false;
    }

    FindNode(value) {
        let hashValue = this.ComputeHash(value);
        for (let i = 0; i < this.tableSize; i++) {
            if (this.Flag[hashValue] === Node.EMPTY_NODE) {
                return false;
            }
            if (this.Flag[hashValue] === Node.FILLED_NODE && this.Arr[hashValue] === value) {
                return true;
            }
            hashValue += this.resolverFun(i);
            hashValue %= this.tableSize;
        }
        return false;
    }

    DeleteNode(value) {
        let hashValue = this.ComputeHash(value);
        for (let i = 0; i < this.tableSize; i++) {
            if (this.Flag[hashValue] === Node.EMPTY_NODE) {
                return false;
            }
            if (this.Flag[hashValue] === Node.FILLED_NODE && this.Arr[hashValue] === value) {
                this.Flag[hashValue] = Node.LAZY_DELETED;
                return true;
            }
            hashValue += this.resolverFun(i);
            hashValue %= this.tableSize;
        }
        return false;
    }

    Print() {
        for (let i = 0; i < this.tableSize; i++) {
            if (this.Flag[i] === Node.FILLED_NODE) {
                console.log(`Node at index [${i} ] :: ${this.Arr[i]}`);
            }
        }
    }
}

const ht = new HashTable(1000);
ht.InsertNode(89);
ht.InsertNode(18);
ht.Print();
ht.DeleteNode(89);
ht.DeleteNode(18);