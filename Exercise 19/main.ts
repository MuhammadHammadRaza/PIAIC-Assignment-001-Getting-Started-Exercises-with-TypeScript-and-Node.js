// E 19
console.log("\nExercise 19 Solution\n");

// E 14 logic
const guestList = ["Ali", "Ahmed", "Raja"];
console.log(`In exercise 14, ${guestList.length} are invited for dinner.`);

// E 15 logic
const guestNotComing = "Ali";

for (let i: number = 0; i < guestList.length; i++) {
  if (guestList[i] == guestNotComing) {
    guestList[i] = "Aslam";
  }
}
console.log(`In exercise 15, ${guestList.length} are invited for dinner.`);

// E 16 logic
guestList.unshift("Akbar");
guestList.splice(2, 0, "Ejaz");
guestList.push("Usaid");

console.log(`In exercise 16, ${guestList.length} are invited for dinner.`);

// E 17 logic
for (let i = guestList.length - 1; i >= 0; i--) {
  if (guestList.length > 2) {
    guestList.pop();
  }
}
console.log(`In exercise 17, ${guestList.length} are invited for dinner.`);

// emptying guestList
guestList.splice(0, guestList.length);

//displaying empty guest list
console.log(`Displaying empty guest list: ${guestList}`);
console.log(
  `At the end of exercise 17, ${guestList.length} are invited for dinner.`
);
