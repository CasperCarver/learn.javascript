// Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

function nPower(n){
    return ( n == 2 ) ? 'yes' : ( n > 2 ) ? nPower(n/2) : "no";  

//     //Math.sqrt(n);
//  if(n!=2 && n > 2 ){
//      return nPower(n/2);
//  } else return n;
}

console.log(nPower(2));