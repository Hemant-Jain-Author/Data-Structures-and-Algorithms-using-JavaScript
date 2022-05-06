const que = [];
que.push(1);
que.push(2);
que.push(3);
console.log(`Queue : ${que}`);
console.log(`Queue isEmpty : ${que.length == 0}`);
console.log(`Queue size : ${que.length}`);
console.log(`Queue front : ${que[0]}`);
console.log(`Queue remove : ${que.shift()}`);

/*
Queue : 1,2,3
Queue isEmpty : false
Queue size : 3
Queue front : 1
Queue remove : 1
*/