function readNumber(){

let n;

    do {
         n = prompt ('Введите число');
    } while (!isFinite(n));
    
    if (n === null || n === '') return  null;
    
      return +n;
}
alert(readNumber());