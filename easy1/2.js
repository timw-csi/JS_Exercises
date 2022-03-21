/* function oddLog() {
  for (let int = 1; int <= 99; int += 2) {
    console.log(int);
  }
}  */

let oddLog = () => {
  let int = 1;
  do {
    console.log(int);
    int +=2;
  } while (int < 100);
}  
oddLog();