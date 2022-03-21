function buyFruit(groceries) {
  let groceryList = groceries.map(pair => {
    let [fruit, number] = [pair[0], pair[1]];
    return (fruit + ', ').repeat(number);
  });

  let results = groceryList.reduce((a, b) => a + b);
  let resultsArr = [];
  resultsArr.push(results);
  return resultsArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]