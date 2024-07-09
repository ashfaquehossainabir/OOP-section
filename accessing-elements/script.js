function Person(fullName, faveColour) { 
    this.name = fullName; 
    this.favouriteColour = faveColour; 
    this.greet = function () { 
      return ` Hello, my name is ${this.name} 
      and my favourite colour is 
      <span style="color:${faveColour}">${this.favouriteColour}</span>`;
    }; 
}

const john = new Person('John Doe', 'red'); 
const jane = new Person('Jane Doe', 'orange');
const div1 = document.getElementById("app1");
const div2 = document.getElementById("app2");
const red = '#ff0000'; 
const orange = '#ffa500'; 

div1.innerHTML = john.greet();
div2.innerHTML = jane.greet();