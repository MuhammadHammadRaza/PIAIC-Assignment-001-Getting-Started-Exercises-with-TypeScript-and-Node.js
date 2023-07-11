const makeSandwich = (...items) => {
  console.log("This person wants following items for their sandwich:");
  for (let i: number = 0; i < items.length; i++) {
    console.log(items[i]);
  }
};

makeSandwich("Lettuce", "Cheese", "Tomato", "Cucumber")
makeSandwich("Lettuce", "Cheese", "Tomato")
makeSandwich("Lettuce", "Cheese")
