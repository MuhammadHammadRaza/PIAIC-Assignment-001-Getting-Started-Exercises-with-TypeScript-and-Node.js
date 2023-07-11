let magicians: Array<string> = [
  "Good magician",
  "Bad magician",
  "Grand magician",
  "Aflatoon magician",
];

const make_great = (magicians: Array<string>) => {
  for (let i: number = 0; i < magicians.length; i++) {
    magicians[i] = `Great ${magicians[i]}`;
  }
};

make_great(magicians);

const show_magicians: Function = (magicianNames: Array<string>) => {
  for (let x in magicianNames) console.log(magicianNames[x]);
};

show_magicians(magicians)
