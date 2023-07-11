// E 18
console.log("\nExercise 18 Solution\n");

const locations: Array<string> = [
  "Iraq",
  "Skardu",
  "Bareli",
  "Ajmer",
  "Dhoraji",
];

// Print the array in its original order
console.log("Original order:", locations);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...locations].sort());

// Print the array to show it's still in its original order
console.log("Original order:", locations);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...locations].sort().reverse());

// Print the array to show it's still in its original order
console.log("Original order:", locations);

// Reverse the order of the list
locations.reverse();

// Print the array to show that its order has changed
console.log("Reversed order:", locations);

// Reverse the order of the list again
locations.reverse();

// Print the array to show it's back to its original order
console.log("Original order:", locations);

// Sort the array in alphabetical order
locations.sort();

// Print the array to show that its order has been changed
console.log("Alphabetical order:", locations);

// Sort the array in reverse alphabetical order
locations.reverse();

// Print the array to show that its order has changed
console.log("Reverse alphabetical order:", locations);
