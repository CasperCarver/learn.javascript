let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


 function Calculator(){
    this.read = function() {
        this.a = +prompt('введите А', 1);
        this.b = +prompt('Введите B', 2);
        
    },
    this.sum = function(){
        return this.a+this.b;
    },
    this.mul = function(){
        return this.a*this.b;
    }
  };
  
  