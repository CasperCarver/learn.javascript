function random(min, max){
   let r = min + Math.random()*(max-min);
    return r;
}

console.log(random(900,1000));