class CountMap {
    constructor() {
        this.hm = new Map();
    }

    add(key) {
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

    size(key) {
        return this.hm.size;
    }
}

/* Testing Code */
const cm = new CountMap();
cm.insert(2);
cm.insert(2);
console.log(`count of 2 is : ${cm.get(2)}`);
cm.remove(2);
console.log(`count of 2 is : ${cm.get(2)}`);
cm.remove(2);
console.log(`count of 2 is : ${cm.get(2)}`);
console.log(`count of 3 is : ${cm.get(3)}`);

function isAnagram(str1, str2){
    const size1 = str1.length;
    const size2 = str2.length;
    if (size1 !== size2)
        return false;

    const cm = new CountMap();
    for (let index = 0; index < str1.length; index++) {
        let ch = str1[index];
        cm.add(ch);
    }
    for (let index = 0; index < str2.length; index++) {
        let ch = str2[index];
        cm.remove(ch);
    }
    return (cm.size() === 0);
}

// Testing code.
function test1(){
    const first = "hello";
    const second = "elloh";
    const third = "world";
    console.log(`isAnagram : ${isAnagram(first, second)}`);
    console.log(`isAnagram : ${isAnagram(first, third)}`);
}

test1()
/*
isAnagram : true
isAnagram : false
*/

function removeDuplicate(str){
    let str2 = "";
    const hs = new Set();
    for (let ind = 0; ind < str.length; ind++) {
        const ch = str[ind];
        if (hs.has(ch.charCodeAt(0)) === false) {
            str2 += ch;
            hs.add(ch.charCodeAt(0));
        }
    }
    return str2;
}

// Testing code.
function test2(){
    const first = "hello";
    console.log(removeDuplicate(first));
}

test2()
/*
helo
*/

function findMissing(arr, start, end){
    const hs = new Set();
    for (let index = 0; index < arr.length; index++) {
        hs.add(arr[index]);
    }
    for (let curr = start; curr <= end; curr++) {
        if (hs.has(curr) === false)
            return curr;
    }
    return -1;
}

// Testing code.
function test3(){
    const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
    console.log("Missing element is :", findMissing(arr, 1, 10));
}

test3()
/*
Missing element is : 4
*/

function printRepeating(arr) {
    const hs = new Set();
    console.log("Repeating elements are:");
    for (let insert = 0; insert < arr.length; insert++) {
        const val = arr[insert];

        if (hs.has(val))
            console.log(val);
        else
            hs.add(val);
    }
}

function printFirstRepeating(arr){
    const size = arr.length;
    const hs = new CountMap();
    for (let i = 0; i < size; i++) {
        hs.add(arr[i]);
    }
    for (let i = 0; i < size; i++) {
        hs.remove(arr[i]);
        if (hs.find(arr[i])) {
            console.log(`First Repeating number is : ${arr[i]}`);
            return;
        }
    }
}

// Testing code.
function test4(){
    const arr1 = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 1];
    printRepeating(arr1);
    printFirstRepeating(arr1);
}

test4()
/*
Repeating elements are:
4
1
First Repeating number is : 1
*/

function hornerHash(key, tableSize){
    const size = key.length;
    let h = 0;
    for (let i = 0;  i < size; i++) {
        h = (32 * h + key[i]) % tableSize;
    }
    return h;
}