// Даны два целых числа A и В (каждое в отдельной строке). Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let a = 5;
let b = 9;

function alertInt(a, b){
    return ( a < b ) ? ( ( a != b ) ? a + " " + alertInt ( (a+1), b ): b ) : (a !=b ) ?  a + " " + alertInt ( (a-1), b) : b;     
    // if ( a < b ) {
    //     return a + " " + alertInt ( (a+1), b );
    // } else return b;
    
    // if ( a > b ) {
    //     return a + " " + alertInt ( (a-1), b)
    // } else return b;

}
console.log(alertInt(a,b));