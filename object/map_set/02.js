let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      let sorted = word.toLowerCase().split("").sort().join(""); 
      map.set(sorted, word);
      console.log( map);
    }
  
    return Array.from(map.values());
  }
  
console.log( aclean(arr) );