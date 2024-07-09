// inheritance = allows a new class to inherit properties and methods 
//                from an existing class. Helps with code reusability

class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating.`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }

    bark() {
        console.log(`This ${this.name} is barking.`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";

    run() {
        console.log(`This ${this.name} is running.`);
    }
}

class Fish extends Animal {
    name = "fish";

    swim() {
        console.log(`This ${this.name} is swimming.`);
    }
}

class Hawk extends Animal {
    name = "hawk";

    fly() {
        console.log(`This ${this.name} is flying.`);
    }
}

class Dog extends Animal {
    name = "dog";

    run() {
        console.log(`This ${this.name} is running.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
const dog = new Dog();

// rabbit.alive = false;

// console.log(rabbit.alive);

// rabbit.eat();
// rabbit.sleep();

// dog.bark();

// hawk.fly();