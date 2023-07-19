'use strict';

// const Person = function (firstName, birthYear) {
    // // Properties

//     this.firstName = firstName;
//     this.birthYear = birthYear;

// };

// const jonas = new Person ('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person ('Matilda', 2017);
// const jack = new Person ('Jack', 1975);
// console.log (matilda, jack);

// console.log(jonas instanceof Person);

// ** Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species)

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// ** Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`The ${this.make} is moving at ${this.speed} km/h.`)
// };

// car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`The ${this.make} is moving at ${this.speed} km/h.`)
// };

// const BMW = new car ('BMW', 100);
// const Mercedes = new car ('Mercedes', 75);

// BMW.accelerate();
// BMW.accelerate();
// BMW.accelerate();
// Mercedes.brake();
// Mercedes.accelerate();
// Mercedes.brake();
// BMW.brake();
// BMW.brake();

class PersonCl {
    constructor (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this.fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account)