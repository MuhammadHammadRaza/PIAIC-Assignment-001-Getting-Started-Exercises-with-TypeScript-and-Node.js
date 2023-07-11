// /*
// PIAIC Batch 46 : AI WMD TypeScript Assignment
// Name: Muhammad Hammad Raza
// Roll No: PIAIC196389
// */

// // E2
// console.log("Exercise 2 Solution\n");

// let personName: string = "Muhammad Hammad Raza";
// console.log(
//   `Hello ${personName}, would you like to learn some Typescript today?`
// );

// // E3
// console.log("\nExercise 3 Solution\n");

// let personName: string = "Muhammad Hammad Raza";
// let changeStringCase = (letterCase: string, str: string) => {
//   letterCase = letterCase.toLowerCase();
//   if (letterCase == "lowercase") {
//     return str.toLowerCase();
//   } else if (letterCase == "uppercase") {
//     return str.toUpperCase();
//   } else if (letterCase == "titlecase") {
//     let newStr: Array<string> = str.split(" ");
//     for (let word in newStr) {
//       word = word.charAt(0).toUpperCase() + word.slice(1);
//     }
//     str = newStr.join(" ");
//     return str;
//   } else {
//     throw new Error(
//       "Invalid letter case. \nLetter case is \n1. lowerCase \n2. upperCase \n3. titleCase"
//     );
//   }
// };

// console.log(changeStringCase("lowerCase", personName));
// console.log(changeStringCase("upperCase", personName));
// console.log(changeStringCase("titleCase", personName));
// console.log(changeStringCase("xyz", personName)); // invalid case type is given to generate error

// // E4
// console.log("\nExercise 4 Solution\n");
// console.log(
//   "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
// );

// // E5
// console.log("\nExercise 5 Solution\n");
// let famousPerson: string = "Albert Einstein";
// let quote: string =
//   "“A person who never made a mistake never tried anything new.”";
// console.log(`${famousPerson} once said, ${quote}`);

// // E6
// console.log("\nExercise 6 Solution\n");

// let personName = "\n \t \t Muhammad Hammad Raza";
// console.log(`Name with white spaces: ${personName}`);
// personName = personName.trim();
// console.log(`Name without white spaces: ${personName}`);

// // E7
// console.log("\nExercise 7 Solution\n");
// console.log(7 + 1); // Addition
// console.log(9 - 1); // Subtration
// console.log(4 * 2); // Multiplication
// console.log(16 / 2); // Division

// // E9
// console.log("\nExercise 9 Solution\n");
// let favoriteNumber: number = 8;
// console.log(`My favorite number: ${favoriteNumber}`);

// /**
//  * E 10
//  * comments already exist in this code file
//  */

// // E 11
// console.log("\nExercise 11 Solution\n");
// let friends: Array<string> = ["Talha", "Usman", "Waqee", "Wajdan"];
// for (let friend in friends) {
//   console.log(friends[friend]);
// }

// // E 12
// console.log("\nExercise 12 Solution\n");
// for (let friend in friends) {
//   console.log(`Hello ${friends[friend]}, nice to see you!`);
// }

// // E 13
// console.log("\nExercise 13 Solution\n");
// let favoriteVehicles: Array<string> = [
//   "Rolls Royce Phantom",
//   "Rolls Royce Ghost",
//   "Toyota Century",
//   "Mercedes-Benz S-Class",
// ];
// for (let favoriteVehicle in favoriteVehicles) {
//   console.log(`I would like to own a ${favoriteVehicles[favoriteVehicle]}`);
// }

// // E 14
// console.log("\nExercise 14 Solution\n");
// let guestList: Array<string> = ["Ali", "Ahmed", "Raja"];
// for (let guest in guestList) {
//   console.log(`Dear ${guestList[guest]}, you are invited for dinner.`);
// }

// // E 15
// console.log("\nExercise 15 Solution\n");
// console.log(`Ali can't make to the dinner\nAslam will now be invited instead`);
// let guestNotComing: string = "Ali";

// for (let i: number = 0; i < guestList.length; i++) {
//   if (guestList[i] == guestNotComing) {
//     guestList[i] = "Aslam";
//   }
//   console.log(`Dear ${guestList[i]}, you are invited for dinner.`);
// }

// // E 16
// console.log("\nExercise 16 Solution\n");
// console.log(
//   "Attention all guests, I have found a bigger dinner table, now more people will be in invited."
// );
// guestList.unshift("Akbar");
// console.log("Guest name inserted at the beginning");
// console.log(guestList);
// guestList.splice(2, 0, "Ejaz");
// console.log("Guest name inserted in the middle");
// console.log(guestList);
// guestList.push("Usaid");
// console.log("Guest name inserted at the end");
// console.log(guestList);

// // E 17
// console.log("\nExercise 17 Solution\n");
// console.log(
//   "Attention all guests, I am sorry to inform you that now I can only invite two guests for the dinner."
// );
// for (let i = guestList.length - 1; i >= 0; i--) {
//   if (guestList.length > 2) {
//     console.log(
//       `Dear ${guestList[i]}, I am sorry to inform that you are no more invited to dinner.`
//     );
//     guestList.pop();
//   } else {
//     console.log(
//       `Dear ${guestList[i]}, I am pleased to inform that you are still invited for the dinner.`
//     );
//   }
// }

// // emptying guestList
// guestList.splice(0, guestList.length);

// //displaying empty guest list
// console.log(`Displaying empty guest list: ${guestList}`);

// // E 18
// console.log("\nExercise 18 Solution\n");

// const locations: Array<string> = [
//   "Iraq",
//   "Skardu",
//   "Bareli",
//   "Ajmer",
//   "Dhoraji",
// ];

// // Print the array in its original order
// console.log("Original order:", locations);

// // Print the array in alphabetical order without modifying the actual list
// console.log("Alphabetical order:", [...locations].sort());

// // Print the array to show it's still in its original order
// console.log("Original order:", locations);

// // Print the array in reverse alphabetical order without changing the order of the original list
// console.log("Reverse alphabetical order:", [...locations].sort().reverse());

// // Print the array to show it's still in its original order
// console.log("Original order:", locations);

// // Reverse the order of the list
// locations.reverse();

// // Print the array to show that its order has changed
// console.log("Reversed order:", locations);

// // Reverse the order of the list again
// locations.reverse();

// // Print the array to show it's back to its original order
// console.log("Original order:", locations);

// // Sort the array in alphabetical order
// locations.sort();

// // Print the array to show that its order has been changed
// console.log("Alphabetical order:", locations);

// // Sort the array in reverse alphabetical order
// locations.reverse();

// // Print the array to show that its order has changed
// console.log("Reverse alphabetical order:", locations);

// // E 19
// console.log("\nExercise 19 Solution\n");

// // E 14 logic
// const guestList = ["Ali", "Ahmed", "Raja"];
// console.log(`In exercise 14, ${guestList.length} are invited for dinner.`);

// // E 15 logic
// const guestNotComing = "Ali";

// for (let i: number = 0; i < guestList.length; i++) {
//   if (guestList[i] == guestNotComing) {
//     guestList[i] = "Aslam";
//   }
// }
// console.log(`In exercise 15, ${guestList.length} are invited for dinner.`);

// // E 16 logic
// guestList.unshift("Akbar");
// guestList.splice(2, 0, "Ejaz");
// guestList.push("Usaid");

// console.log(`In exercise 16, ${guestList.length} are invited for dinner.`);

// // E 17 logic
// for (let i = guestList.length - 1; i >= 0; i--) {
//   if (guestList.length > 2) {
//     guestList.pop();
//   }
// }
// console.log(`In exercise 17, ${guestList.length} are invited for dinner.`);

// // emptying guestList
// guestList.splice(0, guestList.length);

// //displaying empty guest list
// console.log(`Displaying empty guest list: ${guestList}`);
// console.log(
//   `At the end of exercise 17, ${guestList.length} are invited for dinner.`
// );

// // E 20
// console.log("\nExercise 20 Solution\n");
// const createArr = (...values) => [...values]

// console.log(createArr("Karachi", "Lahore", "Islamabad"));

// // E 21
// console.log("\nExercise 21 Solution\n");

// const createStudent = (
//   rollNo: string,
//   name: string,
//   courseTitle: string,
//   courseBatch: number
// ) => ({
//   rollNo,
//   name,
//   status: "active",
//   course: [
//     {
//       title: courseTitle,
//       batch: courseBatch,
//     },
//   ],
// });

// console.log(
//   createStudent("PIAIC196389", "Muhammad Hammad Raza", "Web 3.0 AI WMD", 46)
// );

// // E 22 Creating an array index error;

// console.log("\nExercise 20 Solution\n");
// const citiesArr: Array<string> = [
//   "Karachi",
//   "Lahore",
//   "Multan",
//   "Faisalabad",
//   "Islamabad",
// ];
// console.log("\nExercise 22 Solution\n");
// console.log(citiesArr[8]); // undefined

// // E 23
// console.log("\nExercise 23 Solution\n");

// console.log("\n5 Tests with result = True\n");
// let car: string = "Land Cruiser";
// console.log("Test 1\nIs car == 'Land Cruiser'? I predict True.");
// console.log(car == "Land Cruiser");

// car = "Land Rover";
// console.log("Test 2\nIs car == 'Land Rover'? I predict True.");
// console.log(car == "Land Rover");

// car = "Century";
// console.log("Test 5\nIs car == 'Century'? I predict True.");
// console.log(car == "Century");

// car = "S-Class";
// console.log("Test 3\nIs car == 'S-Class'? I predict True.");
// console.log(car == "S-Class");

// car = "5 Series";
// console.log("Test 4\nIs car == '5 Series'? I predict True.");
// console.log(car == "5 Series");

// console.log("\n5 Tests with result = False\n");

// car = "Land Cruiser";
// console.log("Test 1\nIs car == 'Land Cruiser'? I predict False.");
// console.log(car == "5 Series");

// car = "Land Rover";
// console.log("Test 2\nIs car == 'Land Rover'? I predict False.");
// console.log(car == "Land Cruiser");

// car = "Century";
// console.log("Test 5\nIs car == 'Century'? I predict False.");
// console.log(car == "Land Rover");

// car = "S-Class";
// console.log("Test 3\nIs car == 'S-Class'? I predict False.");
// console.log(car == "Century");

// car = "5 Series";
// console.log("Test 4\nIs car == '5 Series'? I predict False.");
// console.log(car == "S-Class");

// // E 24
// console.log("\nExercise 24 Solution\n");

// const citiesArr: Array<string> = [
//   "Karachi",
//   "Lahore",
//   "Multan",
//   "Faisalabad",
//   "Islamabad",
// ];

// console.log("• Tests for equality and inequality with strings");
// console.log("Lahore == lahore ? Without using lowercase, I predict False");
// let someString: string = "Lahore";
// console.log(someString == "lahore");

// console.log("• Tests using the lower case function");
// console.log("Lahore == lahore ? By using lowercase, I predict True");
// console.log(someString.toLowerCase() == "lahore");

// console.log(
//   "\n• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to"
// );
// let someNumber = 6;
// console.log("\ninvolving equality");
// console.log("6 === 6 ? I predict True");
// console.log(someNumber === 6);
// console.log("6 === 7 ? I predict False");
// console.log(someNumber === 7);

// console.log("\ninvolving inequality");
// console.log("6 !== 7 ? I predict True");
// console.log(someNumber !== 7);
// console.log("6 !== 6 ? I predict False");
// console.log(someNumber !== 6);

// console.log("\ninvolving greater than");
// console.log("\n6 > 5 ? I predict True");
// console.log(someNumber > 5);
// console.log("6 > 6 ? I predict False");
// console.log(someNumber > 6);

// console.log("\ninvolving less than");
// console.log("\n6 < 7 ? I predict True");
// console.log(someNumber < 7);
// console.log("6 < 6 ? I predict False");
// console.log(someNumber < 6);

// console.log("\ninvolving greater than or equal to");
// console.log("\n6 >= 6 ? I predict True");
// console.log(someNumber >= 6);
// console.log("6 >= 7 ? I predict False");
// console.log(someNumber >= 7);

// console.log("\ninvolving less than or equal to");
// console.log("\n6 <= 6 ? I predict True");
// console.log(someNumber <= 6);
// console.log("6 <= 5 ? I predict False");
// console.log(someNumber <= 5);

// console.log('\n• Tests using "and" and "or" operators');
// console.log("6 === 6 && Lahore == Lahore ? I predict true");
// console.log(someNumber == 6 && someString == "Lahore");

// console.log("6 === 8 && Lahore == Lahore ? I predict false");
// console.log(someNumber == 8 && someString == "Lahore");

// console.log("6 === 8 || Lahore == Lahore ? I predict true");
// console.log(someNumber == 8 || someString == "Lahore");

// console.log("6 === 8 || Lahore == Karachi ? I predict false");
// console.log(someNumber == 8 || someString == "Karachi");

// console.log(
//   "• Test whether an item is in a array\nKarachi is in array, I predict to return it true"
// );
// let findInArray = "Karachi";
// let findingInArray: boolean = citiesArr.some((city) => city === findInArray);
// console.log(findingInArray);

// console.log(
//   "• Test whether an item is not in a array\nKabul is not in array, I predict to return it true"
// );
// findInArray = "Kabul";
// const notInArray = citiesArr.some((city) => city !== findInArray);
// console.log(findingInArray);

// // E 25
// console.log("\nExercise 25 Solution\n");

// let alienGame: Function = (alien_color: string) => {
//   if (alien_color.toLowerCase() === "green") {
//     console.log("the player just earned 5 points.");
//   } else {
//   }
// };

// alienGame("green");
// alienGame("red");

// // E 26
// console.log("\nExercise 26 Solution\n");

// const alienGame = (alien_color: string) => {
//   if (alien_color.toLowerCase() === "green") {
//     console.log("the player just earned 5 points.");
//   } else {
//     console.log("the player just earned 10 points.");
//   }
// };

// alienGame("green");
// alienGame("red");

// // E 27
// console.log("\nExercise 27 Solution\n");

// const alienGame = (alien_color: string) => {
//   if (alien_color.toLowerCase() === "green") {
//     console.log("the player just earned 5 points.");
//   } else if (alien_color.toLowerCase() === "yellow") {
//     console.log("the player just earned 10 points.");
//   } else if (alien_color.toLowerCase() === "red") {
//     console.log("the player just earned 15 points.");
//   }
// };

// alienGame("green");
// alienGame("yellow");
// alienGame("red");

// // E 28
// console.log("\nExercise 28 Solution\n");

// let stagesOfLife: Function = (age: number) => {
//   if (age >= 0 && age < 2) {
//     console.log(`person's age is ${age} and person is a baby.`);
//   } else if (age <= 2 && age < 4) {
//     console.log(`person's age is ${age} and person is a toddler.`);
//   } else if (age <= 4 && age < 13) {
//     console.log(`person's age is ${age} and person is a kid.`);
//   } else if (age <= 13 && age < 20) {
//     console.log(`person's age is ${age} and person is a teenager.`);
//   } else if (age <= 20 && age < 65) {
//     console.log(`person's age is ${age} and person is an adult.`);
//   } else if (age <= 65) {
//     console.log(`person's age is ${age} and person is an elder.`);
//   } else {
//     console.log("Age cannot be negative");
//   }
// };

// console.log(
//   "\n• If the person is less than 2 years old, print a message that the person is a baby."
// );
// stagesOfLife(1);

// console.log(
//   "\n• If the person is at least 2 years old but less than 4, print a message that the person is a toddler."
// );
// stagesOfLife(2);

// console.log(
//   "\n• If the person is at least 4 years old but less than 13, print a message that the person is a kid."
// );
// stagesOfLife(4);

// console.log(
//   "\n• If the person is at least 13 years old but less than 20, print a message that the person is a teenager."
// );
// stagesOfLife(13);

// console.log(
//   "\n• If the person is at least 20 years old but less than 65, print a message that the person is an adult."
// );
// stagesOfLife(20);

// console.log(
//   "\n• If the person is age 65 or older, print a message that the person is an elder."
// );
// stagesOfLife(65);

// // E 29
// console.log("\nExercise 29 Solution\n");

// let favoriteFruits: Array<string> = ["Peach", "Mango", "Banana"];

// for (let i: number = 0; i < favoriteFruits.length; i++) {
//   if (favoriteFruits[i].toLowerCase() === "apple") {
//     console.log("You really like Apples");
//   }
//   if (favoriteFruits[i].toLowerCase() === "banana") {
//     console.log("You really like Bananas");
//   }
//   if (favoriteFruits[i].toLowerCase() === "mango") {
//     console.log("You really like Mangoes");
//   }
//   if (favoriteFruits[i].toLowerCase() === "blue berry") {
//     console.log("You really like Blue Berries");
//   }
//   if (favoriteFruits[i].toLowerCase() === "peach") {
//     console.log("You really like Peaches");
//   }
// }

// // E 30
// console.log("\nExercise 30 Solution\n");

// let usernames = ["admin", "Eric", "Joseph", "Stephen", "Tom"];
// for (let x in usernames) {
//   if (usernames[x] === "admin") {
//     console.log("Hello admin, would you like to see a status report?");
//   } else {
//     console.log(`Hello ${usernames[x]}, thank you for logging in again.`);
//   }
// }

// // E 31
// console.log("\nExercise 31 Solution\n");

// const usernames = [];
// if (usernames.length == 0) {
//   console.log("We need to find some users!");
// }

// // E 32
// console.log("\nExercise 32 Solution\n");

// let current_users: Array<string> = [
//   "ahmed",
//   "ali",
//   "hammad",
//   "peter",
//   "joseph",
// ];
// let new_users: Array<string> = ["Ahmed", "Ali", "Akbar", "Ejaz", "Usaid"];

// for (let i: number = 0; i < new_users.length; i++) {
//   console.log(`username: ${new_users[i]}`);
//   let isNameTaken = current_users.indexOf(new_users[i].toLowerCase());
//   if (isNameTaken != -1) {
//     console.log("enter a new username");
//   } else {
//     console.log("the username is available.");
//   }
// }

// // E 33
// console.log("\nExercise 33 Solution\n");
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i: number = 0; i < num.length; i++) {
//   if (num[i] === 1) console.log(`${num[i]}st`);
//   else if (num[i] === 2) console.log(`${num[i]}nd`);
//   else if (num[i] === 3) console.log(`${num[i]}rd`);
//   else console.log(`${num[i]}th`);
// }

// // E 34
// console.log("\nExercise 34 Solution\n");
// let favPizza: Array<string> = ["Cheesy pizza", "Veg pizza", "Meaty pizza"];
// for (let i: number = 0; i < favPizza.length; i++) {
//   console.log(favPizza[i]);
// }

// for (let i: number = 0; i < favPizza.length; i++) {
//   console.log(`I love ${favPizza[i]}.`);
// }

// console.log(`I love cheesy pizza very much
// adding one more line to appreciate my favorite pizzas
// and another line to emphasize on HOW MUCH I LIKE PIZZA`);
// console.log("I really like pizza");

// // E 35
// console.log("\nExercise 35 Solution\n");

// const animals: Array<object> = [
//   {
//     name: "Cat",
//     sound: '"meow"',
//   },
//   {
//     name: "Dog",
//     sound: '"bhaw"',
//   },
//   {
//     name: "Cow",
//     sound: '"moo"',
//   },
// ];

// for (let i: number = 0; i < animals.length; i++) {
//   console.log(animals[i]["name"]);
// }

// for (let i: number = 0; i < animals.length; i++) {
//   console.log(`The ${animals[i]["name"]} does ${animals[i]["sound"]}`);
// }

// console.log("Any of these animals would make a great pet!");

// // E 36
// console.log("\nExercise 36 Solution\n");

// const make_shirt: Function = (size: string, message: string) =>
//   console.log(`The shirt is ${size} sized with this message: "${message}"`);
// make_shirt("Medium", "Hello world!");

// // E 37
// console.log("\nExercise 37 Solution\n");
// const make_shirt = (size: string = "Large", message: string = "I love TypeScript") =>
//   console.log(`The shirt is ${size} sized with this message: "${message}"`);
// make_shirt();
// make_shirt("Medium");
// make_shirt("Small", "Hello world!");

// // E 38
// console.log("\nExercise 38 Solution\n");
// const describe_city: Function = (city: string, country: string = "Pakistan") =>
//   console.log(`${city} is in ${country}.`);
// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("Delhi", "India");

// // E 39
// console.log("\nExercise 39 Solution\n");
// const city_country: Function = (city: string, country: string) =>
//   console.log(`${city}, ${country}`);
// city_country("Karachi", "Pakistan");
// city_country("Lahore", "Pakistan");
// city_country("Delhi", "India");

// // E 40
// console.log("\nExercise 40 Solution\n");
// const make_album: Function = (
//   artistName: string,
//   albumTitle: string,
//   numberOfTracks: number
// ) => {
//   const obj = { artistName, albumTitle };
//   if (numberOfTracks) {
//     obj["numberOfTracks"] = numberOfTracks;
//   }
//   return obj;
// };

// console.log(make_album("Ali Zafar", "Random Title"));
// console.log(make_album("Atif Aslam", "Another Title"));
// console.log(make_album("Abida Parveen", "Sufi Title", 5));
