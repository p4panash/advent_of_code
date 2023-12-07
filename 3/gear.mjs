import { readFromFile } from "../utils.mjs";

const SYMBOLS = /[-_!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
const DIGITS = /^\d+$/;

export const gear = (fileName) => {
  const data = readFromFile(fileName);
  const lines = data.split("\n");
  var total = 0;

  lines.forEach((row, number) => {
    [...row].forEach((v, index) => {
      if (v.match(SYMBOLS)) {
        [
          [number - 1, index],
          [number - 1, index + 1],
          [number - 1, index - 1],
          [number, index + 1],
          [number, index - 1],
          [number + 1, index],
          [number + 1, index + 1],
          [number + 1, index - 1],
        ].forEach(([line, index]) => {
          const neighbor = extractDigits(lines[line], index);
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

  return total;
};

export const extractDigits = (string, index) => {
  if (!string || index < 0 || index > string.length) return 0;

  let number = string[index];
  if (!number.match(DIGITS)) return 0;

  let i = index - 1;
  while (string[i] && number.match(DIGITS) && i >= 0) {
    number = string[i] + number;
    i -= 1;
  }

  if (!number.match(DIGITS)) number = number.slice(1);

  i = index + 1;
  while (string[i] && number.match(DIGITS) && i < string.length) {
    number = number + string[i];
    i += 1;
  }

  if (!number.match(DIGITS)) number = number.slice(0, -1);

  return parseInt(number);
};
