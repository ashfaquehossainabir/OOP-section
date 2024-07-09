// class = (ES6 feature) provides a more structured and cleaner way to 
//               work with objects compared to traditional constructor functions
//               ex. static keyword, encapsulation, inheritance

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;
const product1 = new Product("Shirt", 1500);
const product2 = new Product("Pants", 1000);
const total = product1.calculateTotal(salesTax);

product1.displayProduct();
console.log(`Total Price (with Tax): $${total.toFixed(2)}`);