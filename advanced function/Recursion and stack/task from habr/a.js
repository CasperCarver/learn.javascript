// Дано натуральное число n. Выведите все числа от 1 до n.
function alertN(n){
    return (n==1)? n: n+ " " + alertN(n-1);
}

console.log(alertN(10));