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


