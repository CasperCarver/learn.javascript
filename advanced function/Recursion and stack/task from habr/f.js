// Дано натуральное число N. Выведите все его цифры по одной, в обратном порядке, разделяя их пробелами или новыми строками.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется). 
// Разрешена только рекурсия и целочисленная арифметика.

function reverse(n){
    n = Math.floor(n);
    if (n < 10){
        return n;
    } else {
       return n % 10 + ','+ reverse(n/10); 
    }
}
console.log(reverse(123));