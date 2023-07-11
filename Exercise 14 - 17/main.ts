// E 14
console.log("\nExercise 14 Solution\n");
let guestList: Array<string> = ["Ali", "Ahmed", "Raja"];
for (let guest in guestList) {
  console.log(`Dear ${guestList[guest]}, you are invited for dinner.`);
}

// E 15
console.log("\nExercise 15 Solution\n");
console.log(`Ali can't make to the dinner\nAslam will now be invited instead`);
let guestNotComing: string = "Ali";

for (let i: number = 0; i < guestList.length; i++) {
  if (guestList[i] == guestNotComing) {
    guestList[i] = "Aslam";
  }
  console.log(`Dear ${guestList[i]}, you are invited for dinner.`);
}

// E 16
console.log("\nExercise 16 Solution\n");
console.log(
  "Attention all guests, I have found a bigger dinner table, now more people will be in invited."
);
guestList.unshift("Akbar");
console.log("Guest name inserted at the beginning");
console.log(guestList);
guestList.splice(2, 0, "Ejaz");
console.log("Guest name inserted in the middle");
console.log(guestList);
guestList.push("Usaid");
console.log("Guest name inserted at the end");
console.log(guestList);

// E 17
console.log("\nExercise 17 Solution\n");
console.log(
  "Attention all guests, I am sorry to inform you that now I can only invite two guests for the dinner."
);
for (let i = guestList.length - 1; i >= 0; i--) {
  if (guestList.length > 2) {
    console.log(
      `Dear ${guestList[i]}, I am sorry to inform that you are no more invited to dinner.`
    );
    guestList.pop();
  } else {
    console.log(
      `Dear ${guestList[i]}, I am pleased to inform that you are still invited for the dinner.`
    );
  }
}

// emptying guestList
guestList.splice(0, guestList.length);

//displaying empty guest list
console.log(`Displaying empty guest list: ${guestList}`);
