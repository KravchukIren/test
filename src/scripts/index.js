import "../styles/index.scss";

const user = {
  name: "Midori",
  surname: "Lau",
  age: 25,
  birth: "24.11.1994",
  height: 170,
  havePets: true,
  favfood1: "sushi",
  favfood2: "ramen",
  favfood3: "chicken",
  favFood: ["sushi", "ramen", "chicken"],
  getNameSurnameBirth: function() {
    console.log(
      "Name, Surname, Birth - ",
      this.name + this.surname + this.birth
    );
  }
};
console.log(typeof user);
console.log(user.havePets);
console.log(user.favFood);
console.log(favFood[0]);

user.getNameSurnameBirth();
