import { readFromFile } from "../../utils.mjs";

export const historian = (fileName) => {
  const [leftList, rightList] = buildLists(fileName);
  leftList.sort();
  rightList.sort();

  let distance = 0;

  for (var i = 0; i < leftList.length; i++) {
    let value = leftList[i] - rightList[i];
    if (value < 0) value = value * -1;
    distance += value;
  }

  return distance;
};

export const historian2 = (fileName) => {
  const [leftList, rightList] = buildLists(fileName);

  const appearances = rightList.reduce(
    (acc, curr) => (acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc),
    {}
  );

  return leftList.reduce((acc, curr) => {
    return acc + curr * (appearances[curr] || 0);
  }, 0);
};

const buildLists = (fileName) => {
  const data = readFromFile(fileName);
  const lines = data.split("\n");
  const leftList = [];
  const rightList = [];

  lines.forEach((line) => {
    const numbers = line.split(" ").map(Number);

    leftList.push(numbers[0]);
    rightList.push(numbers.pop());
  });

  return [leftList, rightList];
};
