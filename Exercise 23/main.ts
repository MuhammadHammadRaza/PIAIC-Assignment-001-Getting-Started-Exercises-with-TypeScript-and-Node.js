// E 23
console.log("\nExercise 23 Solution\n");

console.log("\n5 Tests with result = True\n");
let car: string = "Land Cruiser";
console.log("Test 1\nIs car == 'Land Cruiser'? I predict True.");
console.log(car == "Land Cruiser");

car = "Land Rover";
console.log("Test 2\nIs car == 'Land Rover'? I predict True.");
console.log(car == "Land Rover");

car = "Century";
console.log("Test 5\nIs car == 'Century'? I predict True.");
console.log(car == "Century");

car = "S-Class";
console.log("Test 3\nIs car == 'S-Class'? I predict True.");
console.log(car == "S-Class");

car = "5 Series";
console.log("Test 4\nIs car == '5 Series'? I predict True.");
console.log(car == "5 Series");

console.log("\n5 Tests with result = False\n");

car = "Land Cruiser";
console.log("Test 1\nIs car == 'Land Cruiser'? I predict False.");
console.log(car == "5 Series");

car = "Land Rover";
console.log("Test 2\nIs car == 'Land Rover'? I predict False.");
console.log(car == "Land Cruiser");

car = "Century";
console.log("Test 5\nIs car == 'Century'? I predict False.");
console.log(car == "Land Rover");

car = "S-Class";
console.log("Test 3\nIs car == 'S-Class'? I predict False.");
console.log(car == "Century");

car = "5 Series";
console.log("Test 4\nIs car == '5 Series'? I predict False.");
console.log(car == "S-Class");
