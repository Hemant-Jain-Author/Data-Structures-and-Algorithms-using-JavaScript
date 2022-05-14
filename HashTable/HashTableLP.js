EMPTY_VALUE = -1;
DELETED_VALUE = -2;
FILLED_VALUE = 0;

class HashTable {
    constructor(tSize, cmp, hashFun) {
        this.comp = (cmp === undefined || cmp === null) ? this.DefaultCompare : cmp;
        this.HashFun = (hashFun === undefined || hashFun === null) ? this.DefaultHashFun : hashFun; 
        this.tableSize = tSize;
        this.KeyArr = new Array(tSize + 1);
        this.DataArr = new Array(tSize + 1);
        this.FlagArr = new Array(tSize + 1).fill(EMPTY_VALUE);
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
    /* Other methods */

    add(key, value) {
        if (key === undefined || key === null)
            return false;

        if (value === undefined || value === null)
            value = key;

        let hashValue = this.ComputeHash(key);
        for (let i = 0; i < this.tableSize; i++) {
            if ((this.FlagArr[hashValue] === EMPTY_VALUE) || 
                (this.FlagArr[hashValue] === DELETED_VALUE)) {
                this.DataArr[hashValue] = value;
                this.KeyArr[hashValue] = key;
                this.FlagArr[hashValue] = FILLED_VALUE;
                return true;
            } else if (this.FlagArr[hashValue] === FILLED_VALUE && 
                            this.KeyArr[hashValue] === key) {
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

    remove(key) {
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
        let output = "Hash Table contains ::";
        for (let i = 0; i < this.tableSize; i++) {
            if (this.FlagArr[i] === FILLED_VALUE) {
                output += "(" + this.KeyArr[i] + "=>" + this.DataArr[i] + ") ";
            }
        }
        console.log(output);
    }
}

// Testing code.
const ht = new HashTable(1000);
ht.add(1, 10);
ht.add(2, 20);
ht.add(3, 30);
ht.print();

console.log("Find key 2 : ", ht.find(2));
console.log("Value at key 2 : ",ht.get(2))
ht.remove(1)
ht.print()

/*
Hash Table contains ::(1=>10) (2=>20) (3=>30) 
Find key 2 :  true
Value at key 2 :  20
Hash Table contains ::(2=>20) (3=>30) 
*/