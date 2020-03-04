function randomInteger(min, max){
    let r = min + Math.random()*(max-min);
     return parseInt(r);
 }
 
 console.log(randomInteger(900,1000));