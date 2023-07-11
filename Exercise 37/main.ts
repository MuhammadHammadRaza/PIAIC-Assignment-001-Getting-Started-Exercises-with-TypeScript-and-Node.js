// E 37
console.log("\nExercise 37 Solution\n");
const make_shirt = (
  size: string = "Large",
  message: string = "I love TypeScript"
) => console.log(`The shirt is ${size} sized with this message: "${message}"`);
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Hello world!");
