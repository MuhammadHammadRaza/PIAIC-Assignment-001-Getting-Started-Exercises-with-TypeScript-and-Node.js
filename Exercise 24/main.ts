// E 24
console.log("\nExercise 24 Solution\n");

const citiesArr: Array<string> = [
  "Karachi",
  "Lahore",
  "Multan",
  "Faisalabad",
  "Islamabad",
];

console.log("• Tests for equality and inequality with strings");
console.log("Lahore == lahore ? Without using lowercase, I predict False");
let someString: string = "Lahore";
console.log(someString == "lahore");

console.log("• Tests using the lower case function");
console.log("Lahore == lahore ? By using lowercase, I predict True");
console.log(someString.toLowerCase() == "lahore");

console.log(
  "\n• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to"
);
let someNumber = 6;
console.log("\ninvolving equality");
console.log("6 === 6 ? I predict True");
console.log(someNumber === 6);
console.log("6 === 7 ? I predict False");
console.log(someNumber === 7);

console.log("\ninvolving inequality");
console.log("6 !== 7 ? I predict True");
console.log(someNumber !== 7);
console.log("6 !== 6 ? I predict False");
console.log(someNumber !== 6);

console.log("\ninvolving greater than");
console.log("\n6 > 5 ? I predict True");
console.log(someNumber > 5);
console.log("6 > 6 ? I predict False");
console.log(someNumber > 6);

console.log("\ninvolving less than");
console.log("\n6 < 7 ? I predict True");
console.log(someNumber < 7);
console.log("6 < 6 ? I predict False");
console.log(someNumber < 6);

console.log("\ninvolving greater than or equal to");
console.log("\n6 >= 6 ? I predict True");
console.log(someNumber >= 6);
console.log("6 >= 7 ? I predict False");
console.log(someNumber >= 7);

console.log("\ninvolving less than or equal to");
console.log("\n6 <= 6 ? I predict True");
console.log(someNumber <= 6);
console.log("6 <= 5 ? I predict False");
console.log(someNumber <= 5);

console.log('\n• Tests using "and" and "or" operators');
console.log("6 === 6 && Lahore == Lahore ? I predict true");
console.log(someNumber == 6 && someString == "Lahore");

console.log("6 === 8 && Lahore == Lahore ? I predict false");
console.log(someNumber == 8 && someString == "Lahore");

console.log("6 === 8 || Lahore == Lahore ? I predict true");
console.log(someNumber == 8 || someString == "Lahore");

console.log("6 === 8 || Lahore == Karachi ? I predict false");
console.log(someNumber == 8 || someString == "Karachi");

console.log(
  "• Test whether an item is in a array\nKarachi is in array, I predict to return it true"
);
let findInArray = "Karachi";
let findingInArray: boolean = citiesArr.some((city) => city === findInArray);
console.log(findingInArray);

console.log(
  "• Test whether an item is not in a array\nKabul is not in array, I predict to return it true"
);
findInArray = "Kabul";
const notInArray = citiesArr.some((city) => city !== findInArray);
console.log(findingInArray);
