

class Traveler {
    constructor(travelerName) {
        this.name = travelerName
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food = this.food + 2;
    }
    eat() {
        this.eat = this.eat - 1;
        if (this.food === 0) {
            return this.isHealthy = false
        }
    }
}

let adam = new Traveler('Adam')
let baker = new Traveler('Baker')
let charles = new Traveler('Charles')
let david = new Traveler('David')

console.log(adam, baker, charles, david);

class Wagon {
    constructor(wagonCapacity) {
        this.capacity = wagonCapacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        return this.passengers - this.passengers + 1
        if (this.passengers.length >= this.capacity) {
            return null
        }
        this.passengers.push(traveler)
    }
}
    shouldQuarantine(){
    return this.passengers = this.passengers > 1
         
        if (this.food === 0) {
            return this.isHealthy = false

            if (this.isHealthy = false) {
        return shouldQuarantine = yes
    }
}

    totalFood() {
        this.food = 
    }
}


let myWagon = new Wagon(2)

console.log(myWagon);
