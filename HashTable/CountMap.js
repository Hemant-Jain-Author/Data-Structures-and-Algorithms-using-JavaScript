function DemoHashFun(key) {
    return key;
}

function DemoCompare(first, second) {
    return first - second;
}

class CountMap {
    constructor() {
        this.count = 0;
        this.hm = new HashTable(DemoCompare, DemoHashFun);
    }

    insert(key) {
        this.count++;
        if (this.hm.find(key)) {
            const cnt = this.hm.get(key);
            this.hm.insert(key, cnt + 1);
        }
        else {
            this.hm.insert(key, 1);
        }
    }

    remove(key) {
        if (this.hm.find(key)) {
            if (this.hm.get(key) === 1)
                this.hm.remove(key);
            else {
                const count = this.hm.get(key);
                this.hm.insert(key, count - 1);
            }
            this.count--;
        }
    }

    get(key) {
        if (this.hm.find(key))
            return this.hm.get(key);
        return 0;
    }

    size() {
        return this.count;
    }

    find(key) {
        return this.hm.find(key);
    }
}

const cm = new CountMap();
cm.insert(2);
cm.insert(2);
cm.remove(2);
console.log(`count is : ${cm.get(2)}`);
console.log(`count is : ${cm.get(3)}`);
