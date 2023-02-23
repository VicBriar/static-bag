
class Bag {
    static maxWeight = 23;
    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        } else if(weight > Bag.maxWeight) {
            throw new Error('bag cannot excede 23 kg!')
        }
        this.weight = weight
    }
}

module.exports = Bag