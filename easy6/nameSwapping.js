/*function swapName(name) {
  name = name.split(' ');
  console.log(name.reverse().join(', '));
}

swapName('Joe Roberts');    // "Roberts, Joe"
*/

//Further Exploration

function swapName(name) {
  name = name.split(' ');
  let firstAndMids = name.slice(0, -1).join(' ');
  console.log(`${name[name.length - 1]}, ${firstAndMids}`);
}
swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"