// E 35
console.log("\nExercise 35 Solution\n");

const animals: Array<object> = [
  {
    name: "Cat",
    sound: '"meow"',
  },
  {
    name: "Dog",
    sound: '"bhaw"',
  },
  {
    name: "Cow",
    sound: '"moo"',
  },
];

for (let i: number = 0; i < animals.length; i++) {
  console.log(animals[i]["name"]);
}

for (let i: number = 0; i < animals.length; i++) {
  console.log(`The ${animals[i]["name"]} does ${animals[i]["sound"]}`);
}

console.log("Any of these animals would make a great pet!");
