EMPTY_VALUE = -1;
DELETED_VALUE = -2;
FILLED_VALUE = 0;

class HashTable {
    constructor(tSize, cmp, hashFun) {
        if (cmp === undefined || cmp === null)
            cmp = this.DefaultCompare;
        
        this.comp = cmp;

        if (hashFun === undefined || hashFun === null)
            hashFun = this.DefaultHashFun;
        
        this.HashFun = hashFun;
        this.tableSize = tSize;
        this.KeyArr = new Array(tSize + 1);
        this.DataArr = new Array(tSize + 1);
        this.FlagArr = new Array(tSize + 1).fill(EMPTY_VALUE);
    }
    /* Other methods */

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

        let hashValue = this.ComputeHash(key);
        for (let i = 0; i < this.tableSize; i++) {
            if ((this.FlagArr[hashValue] === EMPTY_VALUE) || 
                (this.FlagArr[hashValue] === DELETED_VALUE))
            {
                this.DataArr[hashValue] = value;
                this.KeyArr[hashValue] = key;
                this.FlagArr[hashValue] = FILLED_VALUE;
                return true;
            } 
            else if (this.FlagArr[hashValue] === FILLED_VALUE && 
                this.KeyArr[hashValue] === key) 
            {
                this.DataArr[hashValue] = value;
                return true;
            }

            hashValue += this.resolverFun(i);
            hashValue %= this.tableSize;
        }
        return false;
    }

    find(key) {
        if (key === undefined || key === null)
            return false;

        let hashValue = this.ComputeHash(key);
        for (let i = 0; i < this.tableSize; i++) {
            if (this.FlagArr[hashValue] === EMPTY_VALUE) {
                return false;
            }
            if (this.FlagArr[hashValue] === FILLED_VALUE
                && this.KeyArr[hashValue] === key) {
                return true;
            }
            hashValue += this.resolverFun(i);
            hashValue %= this.tableSize;
        }
        return false;
    }

    get(key) {
        if (key === undefined || key === null)
            return false;

        let hashValue = this.ComputeHash(key);
        for (let i = 0; i < this.tableSize; i++) {
            if (this.FlagArr[hashValue] === EMPTY_VALUE) {
                return 0;
            }
            if (this.FlagArr[hashValue] === FILLED_VALUE
                && this.KeyArr[hashValue] === key) {
                return this.DataArr[hashValue];
            }
            hashValue += this.resolverFun(i);
            hashValue %= this.tableSize;
        }
        return 0;
    }

    delete(key) {
        if (key === undefined || key === null)
            return false;

        let hashValue = this.ComputeHash(key);
        for (let i = 0; i < this.tableSize; i++) {
            if (this.FlagArr[hashValue] === EMPTY_VALUE) {
                return false;
            }
            if (this.FlagArr[hashValue] === FILLED_VALUE
                && this.KeyArr[hashValue] === key) {
                this.FlagArr[hashValue] = DELETED_VALUE;
                return true;
            }
            hashValue += this.resolverFun(i);
            hashValue %= this.tableSize;
        }
        return false;
    }

    print() {
        for (let i = 0; i < this.tableSize; i++) {
            if (this.FlagArr[i] === FILLED_VALUE) {
                console.log(`Node at index [${i} ] :: ${this.DataArr[i]}`);
            }
        }
    }
}

const ht = new HashTable(1000);
ht.add(1, 10);
ht.add(2, 20);
ht.add(3, 30);
ht.print();

console.log("Find key 2 : ", ht.find(2));
console.log("Value at key 2 : ",ht.get(2))
ht.delete(1)
ht.print()