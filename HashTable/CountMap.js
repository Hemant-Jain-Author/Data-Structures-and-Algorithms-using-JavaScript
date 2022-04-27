class CountMap {
    constructor() {
        this.hm = new Map();
    }

    insert(key) {
        if (this.hm.has(key)) {
            const cnt = this.hm.get(key);
            this.hm.set(key, cnt + 1);
        } else {
            this.hm.set(key, 1);
        }
    }

    remove(key) {
        if (this.hm.has(key)) {
            if (this.hm.get(key) === 1)
                this.hm.delete(key);
            else {
                const cnt = this.hm.get(key);
                this.hm.set(key, cnt - 1);
            }
        }
    }

    get(key) {
        if (this.hm.has(key))
            return this.hm.get(key);
        return 0;
    }

    find(key) {
        return this.hm.has(key);
    }
}

// Testing code.
const cm = new CountMap();
cm.insert(2);
cm.insert(2);
cm.remove(2);
console.log(`count is : ${cm.get(2)}`);
cm.remove(2);
console.log(`count is : ${cm.get(2)}`);
console.log(`count is : ${cm.get(3)}`);