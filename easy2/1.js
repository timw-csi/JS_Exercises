/* function greetings(nameArray, jobObject) {
  let name;
  name = nameArray.forEach(element => {
    name += element + ' ';
  });
  return `Hello, ${name}! Nice to have a ${jobObject[0]} ${jobObject[1]} around.`;
} */

function greetings(name, job) {
  return `Hello ${name.join(' ')}! Nice to have a ${job.title} ${job.occupation} around.`;
}

console.log(
  greetings(["Billy", "Ray", "Shaver"], { title: "Master", occupation: "Comedian" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.