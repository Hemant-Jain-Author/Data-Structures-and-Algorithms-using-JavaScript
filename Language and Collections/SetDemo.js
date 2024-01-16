const hs = new Set();
hs.add("Banana")
hs.add("Apple")
hs.add("Mango")
console.log(hs);
console.log(`Set size : ${hs.size}`);
console.log(`Apple present : ${hs.has("Apple")}`);
console.log(`Grapes present : ${hs.has("Grapes")}`);
hs.delete("Apple")    
console.log(hs);
console.log(`Apple present : ${hs.has("Apple")}`);

/*
Set(3) { 'Banana', 'Apple', 'Mango' }
Apple present : true
Grapes present : false
Set(2) { 'Banana', 'Mango' }
Apple present : false
*/