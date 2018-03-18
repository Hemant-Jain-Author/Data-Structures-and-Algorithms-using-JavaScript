const BulbSize = { "SMALL": 0, "MEDIUM": 1, "LARGE": 2 };
Object.freeze(BulbSize)

//Constructor
class Bulb {
    constructor() {
        //Instance Variables 
        this.isOn = false;
        this.size = BulbSize.MEDIUM;
        
        //Class Variables 
        Bulb.TotalBulbCount++;
    }

    //Class Method
    static getBulbCount() {
        return Bulb.TotalBulbCount;
    }

    //Instance Method
    turnOn() {
        this.isOn = true;
    }

    //Instance Method
    turnOff() {
        this.isOn = false;
    }

    //Instance Method
    isOnFun() {
        return this.isOn;
    }
}

//Class Variables initialization
Bulb.TotalBulbCount = 0;

class AdvanceBulb extends Bulb {
    constructor() {
        super();
        this.intensity = 0;
    }

    setIntersity(i) {
        this.intensity = i;
    }

    getIntersity(i) {
        return this.intensity;
    }

}

const b = new AdvanceBulb();
console.log(`Bulb count :${AdvanceBulb.getBulbCount()}`);
console.log(`Bulb Size :${b.size}`);
b.size = BulbSize.SMALL;
console.log(`Bulb Size :${b.size}`);
console.log(`bulb is on return : ${b.isOnFun()}`);
b.turnOn();
console.log(`bulb is on return : ${b.isOnFun()}`);
console.log(`bulb intersity : ${b.getIntersity()}`);
b.setIntersity(10);
console.log(`bulb intersity : ${b.getIntersity()}`);