let accumulator = new Accumulator(1); // начальное значение 1

function Accumulator(startingValue){
    this.value = startingValue,
    this.read = function(){
         return this.value+=+prompt('Введите число');
    }
}

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений