const hs = new Set();
hs.add("India")
hs.add("USA")
hs.add("Brazil")

console.info(hs);

for (const value of hs.values()) {
    console.info(value);
}

console.info(`Hash Table contains USA : ${hs.has("USA")}`);
console.info(`Hash Table contains UK : ${hs.has("UK")}`);

hs.delete("USA")    

console.info(hs);
console.info(`Hash Table contains USA : ${hs.has("USA")}`);