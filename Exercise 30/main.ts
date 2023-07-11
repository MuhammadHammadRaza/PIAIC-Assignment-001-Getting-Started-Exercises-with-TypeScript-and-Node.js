// E 30
console.log("\nExercise 30 Solution\n");

let usernames = ["admin", "Eric", "Joseph", "Stephen", "Tom"];
for (let x in usernames) {
  if (usernames[x] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${usernames[x]}, thank you for logging in again.`);
  }
}