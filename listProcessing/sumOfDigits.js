function sum(num) {
  let strArray = Array.from(String(num));

  console.log(strArray.reduce((prevVal, curVal) => Number(prevVal) + Number(curVal)));
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45