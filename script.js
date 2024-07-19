//demo class 1
class Auth{
  constructor(){
    this.users=[];
  }

register(username,password){
  const newuser={username,password};
  this.users.push(newuser);
  console.log(`${username} registered successfully`);
}
login(username,password){
  const user = this.users.find(user=>user.username===username && user.password===password);
  if(user){
  console.log(`${username} login successfully`);
  }else{
    console.log('login failed');
  }
}
}
const auth = new Auth();
  auth.register("krish","123");
  auth.login("krish","123");
//demo class 2
class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(x){
        return x-this.year;
    }
}
 const date =new Date();
 let year = date.getFullYear();

 const thiscar =new car("ford",2018);

 console.log("this car is " + thiscar.age(year) + " years old.");
//demo class 3
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPriceWithTax(taxRate) {
        const taxAmount = this.price * (taxRate / 100);
        return this.price + taxAmount;
    }
}

const product = new Product("Laptop", 1000);
console.log(`Price with 10% tax: $${product.getPriceWithTax(10)}`);
//demo class 4
class DataFetcher {
    fetchData(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }
}

const dataFetcher = new DataFetcher();

dataFetcher.fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => {
        console.log('Data fetched successfully:', data);
        // Further processing of the fetched data if needed
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
//demo class 5
class EventHandler {
    constructor() {
        this.listeners = {};
    }

    addEventListener(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    fireEvent(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => callback(data));
        }
    }
}

const eventHandler = new EventHandler();
eventHandler.addEventListener('click', (data) => console.log(`Clicked with data: ${data}`));
eventHandler.fireEvent('click', 'Button Clicked');
//demo class 6
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person("Alice", 30, "female");
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
//demo class 7
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getInfo() {
        return `${this.name} - $${this.price} (${this.category})`;
    }
}

const product1 = new Product("Laptop", 1200, "Electronics");
console.log(product1.getInfo()) // Output: Laptop - $1200 (Electronics)
//demo class 8
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle1 = new Circle(5);
console.log(circle1.getArea()); // Output: 78.54
console.log(circle1.getCircumference()); // Output: 31.42
//demo class 9
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295);
console.log(book1.getInfo()); // Output: The Hobbit by J.R.R. Tolkien, 295 pages
//demo class 10
class Employee {
    constructor(name, role, salary) {
        this.name = name;
        this.role = role;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name} is a ${this.role} earning $${this.salary} per year.`;
    }
}

const emp1 = new Employee("John Doe", "Software Developer", 80000);
console.log(emp1.getDetails()); // Output: John Doe is a Software Developer earning $80000 per year.
//demo class 11
class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    getInfo() {
        return `${this.title} (${this.year}), directed by ${this.director}`;
    }
}

const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
console.log(movie1.getInfo()); // Output: Inception (2010), directed by Christopher Nolan
//demo class 12
class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }
}

const triangle1 = new Triangle(8, 5);
console.log(triangle1.getArea()); // Output: 20
//demo class 13
class Student {
    constructor(name, grade, subjects) {
        this.name = name;
        this.grade = grade;
        this.subjects = subjects;
    }

    getStudentInfo() {
        return `${this.name} is in grade ${this.grade}. Subjects: ${this.subjects.join(', ')}`;
    }
}

const student1 = new Student("Emma", 9, ["Math", "Science", "History"]);
console.log(student1.getStudentInfo()); // Output: Emma is in grade 9. Subjects: Math, Science, History
//demo class 14
class BankAccount {
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }

    getAccountInfo() {
        return `Account Number: ${this.accountNumber}, Balance: $${this.balance}, Owner: ${this.owner}`;
    }
}

const acc1 = new BankAccount("123456789", 5000, "Alice");
console.log(acc1.getAccountInfo()); // Output: Account Number: 123456789, Balance: $5000, Owner: Alice
//demo class 15
class Ship {
    constructor(name, type, maxSpeed) {
        this.name = name;
        this.type = type;
        this.maxSpeed = maxSpeed;
    }

    getInfo() {
        return `${this.name} (${this.type}), Max Speed: ${this.maxSpeed} knots`;
    }
}

const ship1 = new Ship("Titanic", "Passenger Ship", 30);
console.log(ship1.getInfo()); // Output: Titanic (Passenger Ship), Max Speed: 30 knots
//demo class 16
class Playlist {
    constructor(name, songs) {
        this.name = name;
        this.songs = songs;
    }

    getTotalSongs() {
        return `${this.name} has ${this.songs.length} songs.`;
    }
}

const playlist1 = new Playlist("Road Trip", ["Song 1", "Song 2", "Song 3"]);
console.log(playlist1.getTotalSongs()); // Output: Road Trip has 3 songs.
//demo class 17
class CoffeeMachine {
    constructor(make, model, cupsCapacity) {
        this.make = make;
        this.model = model;
        this.cupsCapacity = cupsCapacity;
        this.cupsBrewed = 0;
    }

    brewCoffee() {
        this.cupsBrewed++;
        return `Brewing coffee with ${this.make} ${this.model}. Total cups brewed: ${this.cupsBrewed}`;
    }
}

const coffeeMachine1 = new CoffeeMachine("Keurig", "K-Elite", 12);
console.log(coffeeMachine1.brewCoffee()); // Output: Brewing coffee with Keurig K-Elite. Total cups brewed: 1
// demo class 18
class GymMembership {
    constructor(memberId, name, startDate, endDate) {
        this.memberId = memberId;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    getMembershipInfo() {
        return `Member ID: ${this.memberId}, Name: ${this.name}, Valid from ${this.startDate} to ${this.endDate}`;
    }
}

const member1 = new GymMembership(1001, "John Doe", "2024-01-01", "2024-12-31");
console.log(member1.getMembershipInfo()); // Output: Member ID: 1001, Name: John Doe, Valid from 2024-01-01 to 2024-12-31
//demo class 19
class Smartphone {
    constructor(brand, model, screenSize, price) {
        this.brand = brand;
        this.model = model;
        this.screenSize = screenSize;
        this.price = price;
    }

    getInfo() {
        return `${this.brand} ${this.model}, ${this.screenSize} inches, $${this.price}`;
    }
}

const phone1 = new Smartphone("Samsung", "Galaxy S21", 6.2, 999);
console.log(phone1.getInfo()); // Output: Samsung Galaxy S21, 6.2 inches, $999
// demo class 20
class Recipe {
    constructor(name, ingredients, instructions) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }

    getRecipeInfo() {
        return `${this.name}: ${this.ingredients.length} ingredients, ${this.instructions.length} steps`;
    }
}

const recipe1 = new Recipe("Chocolate Cake", ["Flour", "Sugar", "Cocoa Powder"], ["Mix dry ingredients", "Bake at 350°F"]);
console.log(recipe1.getRecipeInfo()); // Output: Chocolate Cake: 3 ingredients, 2 steps
// demo class 21
class Podcast {
    constructor(title, host, durationMinutes, genre) {
        this.title = title;
        this.host = host;
        this.durationMinutes = durationMinutes;
        this.genre = genre;
    }

    getInfo() {
        return `${this.title} hosted by ${this.host}, ${this.durationMinutes} minutes, ${this.genre}`;
    }
}

const podcast1 = new Podcast("Tech Talks", "Alice Smith", 45, "Technology");
console.log(podcast1.getInfo()); // Output: Tech Talks hosted by Alice Smith, 45 minutes, Technology
//demo class 22
class Telescope {
    constructor(name, apertureSize, focalLength) {
        this.name = name;
        this.apertureSize = apertureSize;
        this.focalLength = focalLength;
    }

    getTelescopeInfo() {
        return `${this.name}: Aperture ${this.apertureSize} mm, Focal Length ${this.focalLength} mm`;
    }
}

const telescope1 = new Telescope("Celestron NexStar 8SE", 203, 2032);
console.log(telescope1.getTelescopeInfo()); // Output: Celestron NexStar 8SE: Aperture 203 mm, Focal Length 2032 mm
// demo class 23
class BankLoan {
    constructor(loanId, borrowerName, amount, interestRate, durationMonths) {
        this.loanId = loanId;
        this.borrowerName = borrowerName;
        this.amount = amount;
        this.interestRate = interestRate;
        this.durationMonths = durationMonths;
    }

    getLoanDetails() {
        return `Loan ID: ${this.loanId}, Borrower: ${this.borrowerName}, Amount: $${this.amount}, Interest Rate: ${this.interestRate}%, Duration: ${this.durationMonths} months`;
    }
}

const loan1 = new BankLoan(1001, "Jane Doe", 5000, 5.5, 12);
console.log(loan1.getLoanDetails()); // Output: Loan ID: 1001, Borrower: Jane Doe, Amount: $5000, Interest Rate: 5.5%, Duration: 12 months
// demo class 24
class Restaurant {
    constructor(name, cuisine, location, rating) {
        this.name = name;
        this.cuisine = cuisine;
        this.location = location;
        this.rating = rating;
    }

    getRestaurantInfo() {
        return `${this.name} (${this.cuisine}), Location: ${this.location}, Rating: ${this.rating}/5`;
    }
}

const restaurant1 = new Restaurant("Italiano's", "Italian", "123 Main St", 4.7);
console.log(restaurant1.getRestaurantInfo()); // Output: Italiano's (Italian), Location: 123 Main St, Rating: 4.7/5
//demo class 25
class Bicycle {
    constructor(brand, type, color, price) {
        this.brand = brand;
        this.type = type;
        this.color = color;
        this.price = price;
    }

    getBicycleInfo() {
        return `${this.color} ${this.brand} ${this.type}, $${this.price}`;
    }
}

const bike1 = new Bicycle("Trek", "Mountain Bike", "Red", 1200);
console.log(bike1.getBicycleInfo()); // Output: Red Trek Mountain Bike, $1200
// demo class 26
class Event {
    constructor(name, date, location, attendees) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.attendees = attendees;
    }

    getEventInfo() {
        return `${this.name}, Date: ${this.date}, Location: ${this.location}, Attendees: ${this.attendees}`;
    }
}

const event1 = new Event("Tech Conference", "2024-09-15", "Convention Center", 500);
console.log(event1.getEventInfo()); // Output: Tech Conference, Date: 2024-09-15, Location: Convention Center, Attendees: 500
//demo class 27
class Student {
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }

    averageGrade() {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }
}

// Example Usage
const student = new Student('Bob', [85, 90, 78]);
console.log(`The average grade for ${student.name} is ${student.averageGrade()}`); // Output: The average grade for Bob is 84.33333333333333
// demo 28
class Vegetable {
  constructor(name, color) {
      this.name = name;
      this.color = color;
  }

  describe() {
      return `The ${this.name} is ${this.color}.`;
  }

  changeColor(newColor) {
      this.color = newColor;
      console.log(`The color of the ${this.name} has been changed to ${this.color}.`);
  }
}

// Example Usage
const carrot = new Vegetable('carrot', 'orange');
console.log(carrot.describe()); // Output: The carrot is orange.

carrot.changeColor('lightred');
console.log(carrot.describe()); // Output: The carrot is purple.
//demo class 29
class Lamp {
    constructor(isOn = false) {
        this.isOn = isOn;
    }

    turnOn() {
        this.isOn = true;
        return 'The lamp is now on.';
    }

    turnOff() {
        this.isOn = false;
        return 'The lamp is now off.';
    }

    checkState() {
        return this.isOn ? 'The lamp is currently on.' : 'The lamp is currently off.';
    }
}

// Example Usage
const lamp = new Lamp();
console.log(lamp.checkState()); // Output: The lamp is currently off.
console.log(lamp.turnOn()); // Output: The lamp is now on.
console.log(lamp.checkState()); // Output: The lamp is currently on.
console.log(lamp.turnOff()); // Output: The lamp is now off.
console.log(lamp.checkState()); // Output: The lamp is currently off.
//demo 30
class Counter {
    constructor(initialCount = 0) {
        this.count = initialCount;
    }

    increment() {
        this.count += 1;
        return this.count;
    }

    decrement() {
        if (this.count > 0) {
            this.count -= 1;
        }
        return this.count;
    }

    reset() {
        this.count = 0;
        return this.count;
    }

    getCount() {
        return this.count;
    }
}

// Example Usage
const counter = new Counter(5);
console.log(counter.getCount()); // Output: 5
console.log(counter.increment()); // Output: 6
console.log(counter.decrement()); // Output: 5
console.log(counter.reset());    // Output: 0
console.log(counter.getCount()); // Output: 0



