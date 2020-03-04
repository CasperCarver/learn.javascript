let x = prompt("введите аргумент для степени", 1),
    n = prompt("Введите степень для возведения", 1);

function pow(x, n){
    return Math.pow(x,n);
}
alert (pow(x, n));