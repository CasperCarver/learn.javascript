// function fib(n){
    
//     return (n<=1)?n:fib(n-2)+ fib(n-1);

// }

// console.log(fib(40));

function fibC(n) {
    let a = 1;
    let b = 1;
    let c;
    for (let i = 3; i <= n; i++) {
     c = a + b;
      a = b;
      b = c;
    }
    return c;
  }

  console.log(fibC(77));