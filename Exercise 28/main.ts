// E 28
console.log("\nExercise 28 Solution\n");

let stagesOfLife: Function = (age: number) => {
  if (age >= 0 && age < 2) {
    console.log(`person's age is ${age} and person is a baby.`);
  } else if (age <= 2 && age < 4) {
    console.log(`person's age is ${age} and person is a toddler.`);
  } else if (age <= 4 && age < 13) {
    console.log(`person's age is ${age} and person is a kid.`);
  } else if (age <= 13 && age < 20) {
    console.log(`person's age is ${age} and person is a teenager.`);
  } else if (age <= 20 && age < 65) {
    console.log(`person's age is ${age} and person is an adult.`);
  } else if (age <= 65) {
    console.log(`person's age is ${age} and person is an elder.`);
  } else {
    console.log("Age cannot be negative");
  }
};

console.log(
  "\n• If the person is less than 2 years old, print a message that the person is a baby."
);
stagesOfLife(1);

console.log(
  "\n• If the person is at least 2 years old but less than 4, print a message that the person is a toddler."
);
stagesOfLife(2);

console.log(
  "\n• If the person is at least 4 years old but less than 13, print a message that the person is a kid."
);
stagesOfLife(4);

console.log(
  "\n• If the person is at least 13 years old but less than 20, print a message that the person is a teenager."
);
stagesOfLife(13);

console.log(
  "\n• If the person is at least 20 years old but less than 65, print a message that the person is an adult."
);
stagesOfLife(20);

console.log(
  "\n• If the person is age 65 or older, print a message that the person is an elder."
);
stagesOfLife(65);
