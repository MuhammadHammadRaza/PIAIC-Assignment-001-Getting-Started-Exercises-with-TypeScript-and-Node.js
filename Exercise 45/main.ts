const carMaker = (manufacturer: string, modelName: string, ...args) => {
  if (!manufacturer || !modelName) {
    throw new Error("Manufacturer on Model Name is missing");
    
  }
  let carObj: Object = { manufacturer, modelName };
  for(let i: number = 0; i < args.length; i++){
    carObj = {...carObj, ...args[i]}
  }
  return carObj;
};

console.log(carMaker("Toyota", "Corolla", {color: "White"}, {variant: "Grande"}))
