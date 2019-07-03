const hm = {};
hm["Apple"] = 150;
hm["Mango"] = 70;
hm["Banana"] = 40;

const keys = Object.keys(hm);
const count = keys.length;
console.info(`Fruits count :: ${count}`);

for (let index = 0; index < count; index++) {
    key = keys[index]
    console.info(`${key} price :${hm[key]}`);
}
console.info(`Apple price available ::${hm.hasOwnProperty("Apple")}`);
console.info(`Grapes price available :: ${hm.hasOwnProperty("Grapes")}`);

delete hm["Apple"]
console.info(`Apple price available ::${hm.hasOwnProperty("Apple")}`);
