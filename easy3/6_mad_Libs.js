const rl = require('readline-sync');

function madlib() {
  let noun = rl.question('Enter a noun: ');
  let verb = rl.question('Enter a verb: ');
  let adj = rl.question('Enter an adjective: ');
  let adverb = rl.question('Enter an adverb: ');

  console.log(`A cold, ${adj} dawn ${verb} ${adverb} over the ${noun}, but was missed by the villagers, busy with their chores.`);
}

madlib();