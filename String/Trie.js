class TrieNode {
    constructor(c) {
        this.child = new Array(Trie.CharCount).fill(null);
        this.isLastChar = false;
        this.ch = c;
    }
}

class Trie {
    constructor() {
        Trie.CharCount = 26;
        this.root = new TrieNode(' ');
    }

    insert(str) {
        if (str == null) {
            return this.root;
        }
        const temp = str.toString().toLowerCase();
        return this.insertUtil(this.root, temp, 0);
    }

    insertUtil(curr, str, index) {
        if (curr == null) {
            curr = new TrieNode(this, str[index - 1]);
        }

        if (str.length === index) {
            curr.isLastChar = true;
        } else {
            curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)] = this.insertUtil(curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)], str, index + 1);
        }
        return curr;
    }

    remove(str) {
        if (str == null) {
            return;
        }
        str = str.toLowerCase();
        this.removeUtil(this.root, str, 0);
    }

    removeUtil(curr, str, index) {
        if (curr == null) {
            return;
        }
        
        if (str.length === index) {
            if (curr.isLastChar) {
                curr.isLastChar = false;
            }
            return;
        }
        this.removeUtil(curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)], str, index + 1);
    }

    find(str) {
        if (str == null) {
            return false;
        }
        str = str.toLowerCase();
        return this.findUtil(this.root, str, 0);
    }

    findUtil(curr, str, index) {
        if (curr == null) {
            return false;
        }
        if (str.length === index) {
            return curr.isLastChar;
        }
        return this.findUtil(curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)], str, index + 1);
    }
}

// Testing code.
const tt = new Trie();
tt.insert("banana");
tt.insert("apple");
tt.insert("mango");
console.log("Apple Found :", tt.find("apple"));
console.log("Grapes Found :", tt.find("grapes"));
console.log("Banana Found :", tt.find("banana"));

/*
Apple Found : true
Grapes Found : false
Banana Found : true
*/