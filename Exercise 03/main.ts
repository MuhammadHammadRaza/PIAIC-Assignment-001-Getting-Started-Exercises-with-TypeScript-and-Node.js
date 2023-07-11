// E3
console.log("\nExercise 3 Solution\n");

let personName: string = "Muhammad Hammad Raza";
let changeStringCase = (letterCase: string, str: string) => {
  letterCase = letterCase.toLowerCase();
  if (letterCase == "lowercase") {
    return str.toLowerCase();
  } else if (letterCase == "uppercase") {
    return str.toUpperCase();
  } else if (letterCase == "titlecase") {
    let newStr: Array<string> = str.split(" ");
    for (let word in newStr) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    str = newStr.join(" ");
    return str;
  } else {
    throw new Error(
      "Invalid letter case. \nLetter case is \n1. lowerCase \n2. upperCase \n3. titleCase"
    );
  }
};

console.log(changeStringCase("lowerCase", personName));
console.log(changeStringCase("upperCase", personName));
console.log(changeStringCase("titleCase", personName));
console.log(changeStringCase("xyz", personName)); // invalid case type is given to generate error
