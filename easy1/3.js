/*let evenLog = function () {
  for (let int = 2; int < 100; int += 2){
    console.log(int);
  }
}
evenLog(); */

/* for (let int = 1; int < 100; int += 1){
  if (int % 2 === 1) continue;

  console.log(int);
} */

let evenLog = () => {
  let int = 1;
    do {
      if (int % 2 === 0) {
        console.log(int);
      }  
      int += 1;
    }  
  while (int <= 99);
}

evenLog();
