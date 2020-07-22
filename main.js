

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
    class Doctor extends Traveler {
        constructor(travelerName, health){
            this.health = health

    heal(traveler){
        if (this.isHealthy === false) {
            return this.isHealthy = true
        }
            }

// // join(traveler) {

//     if (this.passengers.length < this.capacity) {
//         this.passengers.push(traveler)
             

        }
    }
         
    }
}

let adam = new Traveler('Adam')
let baker = new Traveler('Baker')
let charles = new Traveler('Charles')
let david = new Traveler('David')
let edward = new Traveler('Edward')

console.log(adam, baker, charles, david, edward);

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
    //  totalFood() {
    //     let totalFood = 3
    //     for (let i = 1; i === this.passengers.length; i++) {
    //         let currentPassenger = this.passengersList[i]
    //         totalFood = totalFood + currentPassenger.food
    //     }
    //     return totalFood
    // }
}
    totalFood() {
        let totalFood = 3
        for (let i = 1; i === this.passengers.length; i++) {
             let currentPassenger = this.passengersList[i]
            totalFood = totalFood + currentPassenger.food
        }
             return totalFood 
         }
        



let myWagon = new Wagon(2)

console.log(myWagon);


let wagon = new Wagon(4)
// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);