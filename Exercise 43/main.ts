let magicians: Array<string> = [
  "Good magician",
  "Bad magician",
  "Grand magician",
  "Aflatoon magician",
];

const make_great = (magicians: Array<string>) => {
  const greatMagicians: Array<string> = [];
  for (let i: number = 0; i < magicians.length; i++) {
    greatMagicians[i] = `Great ${magicians[i]}`;
  }
  return greatMagicians;
};

const show_magicians: Function = (magicianNames: Array<string>) => {
  for (let x in magicianNames) console.log(magicianNames[x]);
};

const greatMagicians = make_great(magicians);

console.log('Great added')
show_magicians(greatMagicians);
console.log('Original Array')
show_magicians(magicians);
