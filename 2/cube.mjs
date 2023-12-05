import { readFromFile } from "../utils.mjs";

export const cube = (fileName, red, green, blue) => {
  const CUBES = { red: red, green: green, blue: blue };
  const data = readFromFile(fileName);
  const lines = data.split("\n");
  var total = 0;

  lines.forEach((value) => {
    const line = value.split(":")[0].replace(/^\D+/g, "");
    const games = value.split(":")[1].split(";");
    let valid = true;
    games.forEach((game) => {
      const colors = game.split(",");
      colors.forEach((color) => {
        const [value, key] = color.split(" ").slice(1);
        if (CUBES[key] < parseInt(value)) valid = false;
      });
    });

    if (valid) total += parseInt(line);
  });

  return total;
};
