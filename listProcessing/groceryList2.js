function buyFruit(groceryList) {
  let fruitArray = groceryList
    .map(items => {
      let [fruit, number] = [items[0], items[1]];

      return fruitStrings(fruit, number);
    })
    .reduce((prevFruits, curFruits) => prevFruits.concat(curFruits));

  return fruitArray;
}

function fruitStrings(fruit, number) {
  let stringsOfFruit = [];

  for (let occurences = 0; occurences < number; occurences++) {
    stringsOfFruit.push(fruit);
  }

  return stringsOfFruit;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]