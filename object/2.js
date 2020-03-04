 function isEmpty(obj){
    for (let key in obj){
        return true;
    }
    return false;
}

let schedule = {};
console.log(isEmpty(schedule));