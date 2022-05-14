const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(JSON.stringify(arr));

const arr2 = new Array(10).fill(0);
for (let i = 0; i < 10; i++)
    arr2[i] = i;

console.log(JSON.stringify(arr2));

/*
[1,2,3,4,5,6,7,8,9,10]
[0,1,2,3,4,5,6,7,8,9]
*/