const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 10; i++) {
    arr[i] = i;
}
console.log(JSON.stringify(arr));

const arr2 = new Array(10).fill(0);
for (let i = 0; i < 10; i++) {
    arr2[i] = i;
}
console.log(JSON.stringify(arr2));