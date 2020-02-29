import "../styles/index.scss";

// const a = 8;
// console.log("const = ", a);

// let b = 44;
// console.log("Let = ", b);

// const sum = a + b;
// console.log("сумма = ", sum);

// const razn = a - b;
// console.log("разница = ", razn);

// const pro = a * b;
// console.log("произведение = ", pro);

// const chas = a / b;
// console.log("частное = ", chas);

// const name = "Midori";
// console.log(typeof name);
// const age = 25;
// console.log(typeof age);
// const height = 170;
// console.log(typeof height);
// const isHuman = true;
// console.log(typeof isHuman);
// const isAnimal = false;
// console.log(typeof isAnimal);
// let foodAlergy;
// console.log(typeof foodAlergy);
// let alergy = null;
// console.log(typeof alergy);

const user = {
  name: "Midori",
  surname: "Lau",
  age: 25,
  birth: 24111994,
  height: 170,
  getNameSurnameBirth: function() {
    console.log(
      "Name, Surname, Birth - ",
      this.name + this.surname + this.birth
    );
  }
};
console.log(typeof user);

user.getNameSurnameBirth();

const havePets = true;
console.log(typeof havePets);

let sushi;
console.log(typeof sushi);

let ramen;
console.log(typeof ramen);

let chicken;
console.log(typeof chicken);

const favFood = [sushi, ramen, chicken];
console.log(typeof favFood);
console.log(favFood[0]);

// const car = {
//   color: "Red",
//   numberOfDoors: 4,
//   maxSpeed: 300,
//   "Max speed": 200,
//   getMaxSpeed: function() {
//     console.log("Max speed", this.maxSpeed);
//   }
// };
// console.log(typeof car);
// console.log(car.color);
// console.log(car["Max speed"]);

// const car2 = {
//   color: "Blue",
//   numberOfDoors: 4,
//   maxSpeed: 500,
//   "Max speed": 200,
//   getMaxSpeed: function() {
//     console.log("Max speed", this.maxSpeed);
//   }
// };

// const myCars = [car, car2];
// console.log(typeof myCars);
// console.log(myCars[0]);
// console.log(myCars[0].color);

// whatIsMyAge(50);

// function whatIsMyAge(age) {
//   console.log("your age is ", age);
// }

// whatIsMyAge(age);
// whatIsMyAge(30);

// car.getMaxSpeed();
//car2.getMaxSpeed();

console.log("________________");

console.log("camelCase");
// console.log("PascalCase");
// console.log("kebab-case");
// console.log("snake_case");

// var c = 16;
/* console.log("Var = ", c); */

// console.log("Desktop => Electron");
// console.log("Smartphone & Tablet => Cordova");
// console.log("Server => Node.js");
// console.log("---History---");
// console.info("1995 - Netscape");
// console.info("1997 - ECMA Strardt");
// console.log("Ecma Script = JavaScript");
// console.log("1999 - EcmaScript 3");
// console.log("2009 - EcmaScript 5 ==> ES5");
// console.log("2015 - EcmaScript 2015 ==> ES6");
// console.log(">2015 - new release");
