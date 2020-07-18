

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
        
        if (this.food === 0) {
            return this.isHealthy = false;
        }    else {
            this.food = this.food - 1
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

        if (this.passengers.length < this.capacity) {
            this.passengers.push(traveler)

        }
    }
 
    shouldQuarantine() {
        console.log(this)
        for (let counter = 0; counter < this.passengers.length; counter++){
            let currentPassenger = this.passengers[counter]
            if (currentPassenger.isHealthy === false) {
                return true
            }
     }return false
     }

    totalFood() {
        for (let counter = 0; counter < this.passengers.length; counter++) {
             let currentPassengers = this.passengers[counter]
            return this.totalFood 
         }
        
    }
}

let myWagon = new Wagon(2)

console.log(myWagon);


let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`)