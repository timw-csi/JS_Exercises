function repeater(string) {
  let doubledStr = string.split('').map(char => char + char).join('');

  console.log(doubledStr);
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""