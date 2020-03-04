
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    
  };
  function sumSalaries(salaries){
      let sum = 0;
      for( value of Object.values(salaries)){
        sum+=value;
      }
      return sum;
  }

  console.log( sumSalaries(salaries) ); 