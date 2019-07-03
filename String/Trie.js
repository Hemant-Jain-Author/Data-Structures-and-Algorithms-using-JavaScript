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

    Insert(str) {
        if (str == null) {
            return this.root;
        }
        const temp = str.toString().toLowerCase();
        return this.InsertUtil(this.root, temp, 0);
    }

    InsertUtil(curr, str, index) {
        if (curr == null) {
            curr = new TrieNode(this, str[index - 1]);
        }
        if (str.length === index) {
            curr.isLastChar = true;
        }
        else {
            curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)] = this.InsertUtil(curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)], str, index + 1);
        }
        return curr;
    }

    Remove(str) {
        if (str == null) {
            return;
        }
        str = str.toLowerCase();
        this.RemoveUtil(this.root, str, 0);
    }

    RemoveUtil(curr, str, index) {
        if (curr == null) {
            return;
        }
        if (str.length === index) {
            if (curr.isLastChar) {
                curr.isLastChar = false;
            }
            return;
        }
        this.RemoveUtil(curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)], str, index + 1);
    }

    Find(str) {
        if (str == null) {
            return false;
        }
        str = str.toLowerCase();
        return this.FindUtil(this.root, str, 0);
    }

    FindUtil(curr, str, index) {
        if (curr == null) {
            return false;
        }
        if (str.length === index) {
            return curr.isLastChar;
        }
        return this.FindUtil(curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)], str, index + 1);
    }
}

const t = new Trie();
const a = "apple";
const b = "app";
const c = "appletree";
const d = "tree";

t.Insert(a)
t.Insert(d)

console.log(t.Find(a));
console.log(t.Find(b));
console.log(t.Find(c));
console.log(t.Find(d));