function main1(){
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
}

function main() {
    let hm = new Map();
    hm.set(1, 10)
    hm.set(2, 20)
    hm.set(3, 30)
    console.log(hm)
    console.log(hm.get(2))
    console.log(hm.has(2))
    console.log(hm.has(4))
}

/*
Map { 1 => 10, 2 => 20, 3 => 30 }
20
true
false
*/

main()