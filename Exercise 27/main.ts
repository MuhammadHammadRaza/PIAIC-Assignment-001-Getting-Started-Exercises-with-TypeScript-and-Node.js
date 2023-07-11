// E 27
console.log("\nExercise 27 Solution\n");

const alienGame = (alien_color: string) => {
  if (alien_color.toLowerCase() === "green") {
    console.log("the player just earned 5 points.");
  } else if (alien_color.toLowerCase() === "yellow") {
    console.log("the player just earned 10 points.");
  } else if (alien_color.toLowerCase() === "red") {
    console.log("the player just earned 15 points.");
  }
};

alienGame("green");
alienGame("yellow");
alienGame("red");
