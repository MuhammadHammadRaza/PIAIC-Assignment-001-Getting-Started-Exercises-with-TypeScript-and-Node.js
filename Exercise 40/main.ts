// E 40
console.log("\nExercise 40 Solution\n");
const make_album: Function = (
  artistName: string,
  albumTitle: string,
  numberOfTracks: number
) => {
  const obj = { artistName, albumTitle };
  if (numberOfTracks) {
    obj["numberOfTracks"] = numberOfTracks;
  }
  return obj;
};

console.log(make_album("Ali Zafar", "Random Title"));
console.log(make_album("Atif Aslam", "Another Title"));
console.log(make_album("Abida Parveen", "Sufi Title", 5));
