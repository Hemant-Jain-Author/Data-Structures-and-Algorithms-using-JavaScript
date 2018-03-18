function isAnagram(str1, str2) {
    const size1 = str1.length;
    const size2 = str2.length;
    if (size1 !== size2)
        return false;

    const cm = new CountMap();
    for (var index = 0; index < str1.length; index++) {
        var ch = str1[index];
        cm.insert(ch);
    }
    for (var index = 0; index < str2.length; index++) {
        var ch = str2[index];
        cm.remove(ch);
    }
    return (cm.size() === 0);
};

function removeDuplicate(str) {
    let str2 = "";
    const hs = new HashTable();

    for (const ch of str) {
        if (hs.find(ch.charCodeAt(0)) === false) {
            str2 += ch;
            hs.insert(ch.charCodeAt(0));
        }
    }

    return str2;
};

function findMissing(arr, start, end) {
    const hs = new HashTable();
    for (const i of arr) {
        hs.insert(i);
    }

    for (let curr = start; curr <= end; curr++) {
        if (hs.find(curr) === false)
            return curr;
    }
    return MAX_VALUE;
};

function printRepeating(arr) {
    const hs = new HashTable();
    console.log("Repeating elements are:");

    for (const val of arr) {
        {
            if (hs.find(val))
                console.log(val);
            else
                hs.insert(val);
        }
    }
};

function printFirstRepeating(arr) {
    let i;
    const size = arr.length;
    const hs = new CountMap();
    for (i = 0; i < size; i++) {
        hs.insert(arr[i]);
    }
    for (i = 0; i < size; i++) {
        hs.remove(arr[i]);
        if (hs.find(arr[i])) {
            console.log(`First Repeating number is : ${arr[i]}`);
            return;
        }
    }
};

const first = "hello";
const second = "elloh";
const third = "world";
console.log(`isAnagram : ${isAnagram(first, second)}`);
console.log(`isAnagram : ${isAnagram(first, third)}`);
removeDuplicate(first);
console.log(first);
const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
console.log(findMissing(arr, 1, 10));
const arr1 = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 1];
printRepeating(arr1);
printFirstRepeating(arr1);