const hm = new Map();
hm.set("Apple", 10)
hm.set("Banana", 20)
hm.set("Mango", 30)
console.log(hm)
console.log(`Map size : ${hm.size}`);
console.log(hm.has("Apple"))
console.log(hm.get("Apple"))
console.log(hm.has("Grape"))


const hm2 = {};
hm2["Apple"] = 10
hm2["Banana"] = 20
hm2["Mango"] = 30
console.log(hm2)
console.log(`Map size : ${Object.keys(hm2).length}`);
console.log(hm2.hasOwnProperty("Apple"))
console.log(hm2["Apple"])
console.log(hm2.hasOwnProperty("Grape"))


/*
Map(3) { 'Apple' => 10, 'Banana' => 20, 'Mango' => 30 }
Map size : 3
true
10
false
*/

/*
{ Apple: 10, Banana: 20, Mango: 30 }
Map size : 3
true
10
false
*/
