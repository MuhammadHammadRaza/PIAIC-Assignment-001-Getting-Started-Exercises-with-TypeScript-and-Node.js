// E 38
console.log("\nExercise 38 Solution\n");
const describe_city: Function = (city: string, country: string = "Pakistan") =>
  console.log(`${city} is in ${country}.`);
describe_city("Karachi");
describe_city("Lahore");
describe_city("Delhi", "India");