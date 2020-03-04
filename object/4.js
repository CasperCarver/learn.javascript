let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  function offers(obj){
      let sum = 0;
      for (let key in obj){
          sum+=obj[key];
      }
      return sum;
  }
  console.log(offers(salaries));