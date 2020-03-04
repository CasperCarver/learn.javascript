let calculator = {
    read() {
        this.a = +prompt('введите А', 1);
        this.b = +prompt('Введите B', 2);
        
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );