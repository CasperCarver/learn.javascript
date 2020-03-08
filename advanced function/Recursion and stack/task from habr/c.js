function ankerMan(m,n){
    if(m==0) return n+1;
    if( m>0 && n == 0 ) return ankerMan(m-1, 1);
    if ( m > 0 && n > 0 ) return ankerMan(m - 1, ankerMan(m, n-1));
}
console.log(ankerMan(3,4));