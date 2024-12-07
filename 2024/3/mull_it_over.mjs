import { readFromFile } from "../../utils.mjs";

export const mull_it = (filename) => {
  const data = readFromFile(filename);

  let matches = data.match(/mul\([0-9]{1,3}\,[0-9]{1,3}\)/g);

  return matches.reduce((acc, curr) => acc + value(curr), 0);
};

const value = (match) => {
  const string = match.slice(4, match.length - 1);
  const numbers = string.split(",").map(Number);

  return numbers[0] * numbers.at(-1);
};
