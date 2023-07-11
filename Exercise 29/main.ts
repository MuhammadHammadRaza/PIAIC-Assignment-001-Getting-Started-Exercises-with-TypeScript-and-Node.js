// E 29
console.log("\nExercise 29 Solution\n");

let favoriteFruits: Array<string> = ["Peach", "Mango", "Banana"];

for (let i: number = 0; i < favoriteFruits.length; i++) {
  if (favoriteFruits[i].toLowerCase() === "apple") {
    console.log("You really like Apples");
  }
  if (favoriteFruits[i].toLowerCase() === "banana") {
    console.log("You really like Bananas");
  }
  if (favoriteFruits[i].toLowerCase() === "mango") {
    console.log("You really like Mangoes");
  }
  if (favoriteFruits[i].toLowerCase() === "blue berry") {
    console.log("You really like Blue Berries");
  }
  if (favoriteFruits[i].toLowerCase() === "peach") {
    console.log("You really like Peaches");
  }
}
