// E 26
console.log("\nExercise 26 Solution\n");

const alienGame = (alien_color: string) => {
  if (alien_color.toLowerCase() === "green") {
    console.log("the player just earned 5 points.");
  } else {
    console.log("the player just earned 10 points.");
  }
};

alienGame("green");
alienGame("red");
