import { readFromFile } from "../../utils.mjs";

export const historian = (fileName) => {
  const data = readFromFile(fileName);
  const lines = data.split("\n");
  const leftList = [];
  const rightList = [];
  let distance = 0;

  lines.forEach((line) => {
    const numbers = line.split(" ").map(Number);

    leftList.push(numbers[0]);
    rightList.push(numbers.pop());
  });

  leftList.sort();
  rightList.sort();

  for (var i = 0; i < leftList.length; i++) {
    let value = leftList[i] - rightList[i];
    if (value < 0) value = value * -1;
    distance += value;
  }

  return distance;
};
