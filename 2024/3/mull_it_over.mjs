import { readFromFile } from "../../utils.mjs";

export const mull_it = (filename) => {
  const data = readFromFile(filename);
  let matches = data.match(/mul\([0-9]{1,3}\,[0-9]{1,3}\)/g);

  return matches.reduce((acc, curr) => acc + value(curr), 0);
};

export const mull_it_conditionally = (filename) => {
  const data = readFromFile(filename);
  let matches = data.match(
    /(do\(\))|(don\'t\(\))|(mul\([0-9]{1,3}\,[0-9]{1,3}\))/g
  );

  let enabled = true;
  return matches.reduce((acc, curr) => {
    if (curr == "do()" || curr == "don't()") {
      enabled = curr == "do()";
      return acc;
    }
    if (!enabled) return acc;

    return acc + value(curr);
  }, 0);
};

const value = (match) => {
  const string = match.slice(4, match.length - 1);
  const numbers = string.split(",").map(Number);

  return numbers[0] * numbers.at(-1);
};
