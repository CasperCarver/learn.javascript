function unique(arr) {
    /* ваш код */

    let uni = new Set();
    for (keys of arr){
        uni.add(keys);
    }
    return uni;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O