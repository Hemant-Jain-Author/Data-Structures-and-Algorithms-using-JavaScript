
function main1() {
    const hm = {};
    hm["Mason"] = 55;
    hm["Jacob"] = 77;
    hm["William"] = 99;
    hm["Emma"] = 65;

    const keys = Object.keys(hm);
    const count = keys.length;
    console.info(`Students count :: ${count}`);

    for (let index = 0; index < count; index++) {
        key = keys[index]
        console.info(`${key} score marks :${hm[key]}`);
    }
    console.info(`Emma score available ::${hm.hasOwnProperty("Emma")}`);
    console.info(`John score available :: ${hm.hasOwnProperty("John")}`);

    delete hm["Emma"]
    console.info(`Emma score available ::${hm.hasOwnProperty("Emma")}`);
};


main1();
