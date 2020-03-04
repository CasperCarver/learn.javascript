//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

let userJson = JSON.stringify(user , null, 4);
console.log(userJson);
let userFromJson =JSON.parse(userJson);
console.log(userFromJson);