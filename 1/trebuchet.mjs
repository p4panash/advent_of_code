import { readFromFile } from "../utils.mjs";

export const trebuchet = () => {
  const data = readFromFile("./1/data.txt");
  const lines = data.split("\n");
  var total_count = 0;

  lines.forEach((value) => {
    const digits = value.replace(/\D/g, "");
    const string = digits[0] + digits[digits.length - 1];

    total_count += parseInt(string);
  });

  return total_count;
};
