import { readFromFile, writeToFile } from "../utils.mjs";

const SYMBOLS = /[-_!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
const DIGITS = /^\d+$/;
const map = [];

export const gear = (fileName) => {
  const data = readFromFile(fileName);
  const lines = data.split("\n");
  var total = 0;

  lines.forEach((row, number) => {
    [...row].forEach((v, index) => {
      if (v.match(SYMBOLS)) {
        const indexes = [
          [number - 1, index],
          [number - 1, index + 1],
          [number - 1, index - 1],
          [number, index + 1],
          [number, index - 1],
          [number + 1, index],
          [number + 1, index + 1],
          [number + 1, index - 1],
        ];
        indexes.forEach(([line, index]) => {
          const neighbor = extractDigits(lines[line], index, line);
          if (neighbor != 0) {
            total += neighbor;
            const regExp = new RegExp(neighbor);
            lines[line] = lines[line].replace(
              regExp,
              ".".repeat(neighbor.toString().length)
            );
          }
        });
      }
    });
  });

  printSteps();

  return total;
};

export const extractDigits = (string, index, row) => {
  if (!string || index < 0 || index > string.length) return 0;

  let number = string[index];
  if (!number.match(DIGITS)) return 0;

  let i = index - 1;
  while (string[i] && number.match(DIGITS) && i >= 0) {
    number = string[i] + number;
    i -= 1;
    markMap(row, i);
  }

  if (!number.match(DIGITS)) number = number.slice(1);

  i = index + 1;
  while (string[i] && number.match(DIGITS) && i < string.length) {
    number = number + string[i];
    i += 1;
  }

  if (!number.match(DIGITS)) number = number.slice(0, -1);

  markMap(row, index);
  return parseInt(number);
};

const markMap = (i, j) => {
  try {
    map[i][j] = map[i][j] + 1;
  } catch {
    map[i][j] = [];
    map[i][j] = 1;
  }
};

const printSteps = () => {
  writeToFile("map", map.map((x) => x.join("")).join("\r\n"));
};
