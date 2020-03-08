// Дано натуральное число n>1.
// Выведите все простые множители этого числа в порядке неубывания с учетом кратности. 
// Алгоритм должен иметь сложность O(logn).
function mnojN(n, k){
    n=Math.floor(n);
    
    if (k > n/2) return n + ' ';

    if ( n % k == 0){
        return n + ' ' + mnojN(n/k , k);
    } else {
       return mnojN(n, k+1);
    }
}
console.log(mnojN(100, 2));