// E 33
console.log("\nExercise 33 Solution\n");
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i: number = 0; i < num.length; i++) {
  if (num[i] === 1) console.log(`${num[i]}st`);
  else if (num[i] === 2) console.log(`${num[i]}nd`);
  else if (num[i] === 3) console.log(`${num[i]}rd`);
  else console.log(`${num[i]}th`);
}
