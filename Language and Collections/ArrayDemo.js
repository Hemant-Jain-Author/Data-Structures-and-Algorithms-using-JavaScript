const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (var i = 0; i < 10; i++) {
    arr[i] = i;
}
console.info(arr);

const arr2 = new Array(10).fill(0);
for (var i = 0; i < 10; i++) {
    arr2[i] = i;
}
console.info(arr2);