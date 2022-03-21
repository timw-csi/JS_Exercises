function stringy (int) {
  let bitArray = [];
  bitArray.length = int;

  /*  couldn't figure this out on 1/17/
      1/18 update: looking back to (Lesson 3, easy1, #1 ) it's bc empty array entries
      ,created by setting array length like on line 3 here, can't be operated on by
      map method. it leaves empty slots empty.but if a slot is defined as undefined,
      it will operate on that.
      
  let finalArray = bitArray.map((_, index) => {
    if (index % 2 === 0) {
      bitArray[index] = '1';
    } else {
      bitArray[index] = '0';
    }
    return bitArray[index];
  });
  */

  for (let index = 0; index < int; index += 1) {
    if (index % 2 === 0) {
      bitArray[index] = '1';
    } else bitArray[index] = '0';
  }
  console.log(bitArray.join(''));

}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"