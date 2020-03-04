//Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

function count(user){
    let c = 0;
    for (key of Object.keys(user)){
        c+=1;
    }
    return c;
}

console.log( count(user) ); // 2