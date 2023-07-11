// E 41
console.log("\nExercise 41 Solution\n");

const show_magicians: Function = (magicianNames: Array<string>) => {
  for (let x in magicianNames) console.log(magicianNames[x]);
};

let magicians: Array<string> = [
  "Good magician",
  "Bad magician",
  "Grand magician",
  "Aflatoon magician",
];
show_magicians(magicians);