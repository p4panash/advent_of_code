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

export const cube_power = (fileName) => {
  const data = readFromFile(fileName);
  const lines = data.split("\n");
  var total = 0;

  lines.forEach((value) => {
    const cubes = {
      red: 0,
      green: 0,
      blue: 0,
    };

    const games = value.split(":")[1].split(";");
    games.forEach((game) => {
      const colors = game.split(",");
      colors.forEach((color) => {
        const [value, key] = color.split(" ").slice(1);
        if (cubes[key] < parseInt(value)) cubes[key] = parseInt(value);
      });
    });

    let power = 1;
    if (cubes.red != 0) power *= cubes.red;
    if (cubes.green != 0) power *= cubes.green;
    if (cubes.blue != 0) power *= cubes.blue;

    total += power;
  });

  return total;
};
