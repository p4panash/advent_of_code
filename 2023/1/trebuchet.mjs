import { readFromFile } from "../../utils.mjs";

const DIGIT_WORDS = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const DIGIT_CHAR = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const trebuchet = (fileName) => {
  const data = readFromFile(fileName);
  const lines = data.split("\n");
  var total_count = 0;

  lines.forEach((value) => {
    const digits = value.replace(/\D/g, "");
    const string = digits[0] + digits[digits.length - 1];

    total_count += parseInt(string);
  });

  return total_count;
};

export const trebuchet2 = (fileName) => {
  const data = readFromFile(fileName);
  const lines = data.split("\n");
  var total_count = 0;

  lines.forEach((value) => {
    var occurrences = [];
    for (let i = 0; i <= 8; i += 1) {
      const words = [...value.matchAll(new RegExp(DIGIT_WORDS[i], "gi"))].map(
        (v) => ({ value: i + 1, pos: v.index })
      );
      occurrences.push(...words);

      const chars = [...value.matchAll(new RegExp(DIGIT_CHAR[i], "gi"))].map(
        (v) => ({ value: i + 1, pos: v.index })
      );
      occurrences.push(...chars);
    }
    occurrences.sort((a, b) => a.pos - b.pos);

    total_count +=
      occurrences[0].value * 10 + occurrences[occurrences.length - 1].value;
  });

  return total_count;
};
