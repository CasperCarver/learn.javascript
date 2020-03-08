function reverse(n){
    n = Math.floor(n);
    if (n < 10){
        return n;
    } else {
       return reverse(n/10) + ' ' +n % 10 ; 
    }
}
console.log(reverse(123));