// E 32
console.log("\nExercise 32 Solution\n");

let current_users: Array<string> = [
  "ahmed",
  "ali",
  "hammad",
  "peter",
  "joseph",
];
let new_users: Array<string> = ["Ahmed", "Ali", "Akbar", "Ejaz", "Usaid"];

for (let i: number = 0; i < new_users.length; i++) {
  console.log(`username: ${new_users[i]}`);
  let isNameTaken = current_users.indexOf(new_users[i].toLowerCase());
  if (isNameTaken != -1) {
    console.log("enter a new username");
  } else {
    console.log("the username is available.");
  }
}
