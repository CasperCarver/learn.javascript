// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

function sumTo1(n){
    let sum =0;
    for ( let i = 0; i<n+1; i++){
        sum+=i;
    }
    return sum;
}

function sumTo2(n){
    return (n==1)? n : n+sumTo2(n-1);
}
console.log(sumTo2(100));

function sumTo3(n){
    return (2+1*(n-1))*n/2
}
console.log(sumTo3(100));