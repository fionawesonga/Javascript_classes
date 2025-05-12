// class User {
//     constructor(name){
//         this.name = name;
//         this.greet = function sayHi(){
//             return `Hello my name is ${this.name}`;
//         }
//     }
    
// }
// const user = new User("John");
// console.log (user);
// console.log(user.sayHi);

// function Person (name,age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         return `Hello my name is ${this.name} and I am ${this.age} years old`;
//     }
// };

// const anne = new Person('Anne',20);
// console.log({anne});
// Person.prototype.nationality ='Kenyan';
// console.log({anne});
// console.log(anne.nationality)

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// mySecond();
// myFirst();
function myDisplayer(something){
    document.getElementById("demo").innerHTML = something;
}
function myCalculator(num1,num2,myCallback){
    let sum = num1+num2;
    myCallback(sum);
}
myCalculator(5,5,myDisplayer);
console.log(myCalculator)