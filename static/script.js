// static = keyword that defines properties or methods that belong 
//               to a class itself rather than the objects created
//               from that class (class owns anything static, not the objects)

// ---> Example: 1

class MathUtil {
    static Pi = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.Pi * radius;
    }

    static getArea(radius) {
        return this.Pi * radius * radius;
    }
}

// console.log(MathUtil.Pi);
// console.log(MathUtil.getDiameter(20));
// console.log(MathUtil.getCircumference(20));
// console.log(MathUtil.getArea(20));



// ---> Example: 2

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        this.user = User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online.`);
    }

    sayHello() {
        console.log(`${this.user++ + 1}. Hello, my username is ${this.username}`);
    }
}

const user1 = new User("SpongeBob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();