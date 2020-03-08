function simpleN( n , i);{
    if ( n < 2 ) return false;
    if ( n == 2 ) return true;
    if (n % i == 0) return false;
    if ( i < n/2){
    return simpleN(n, i+1);
    } else return true;
}
