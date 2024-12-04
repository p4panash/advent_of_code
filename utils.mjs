import fs from "fs";

export const readFromFile = (fileName) => {
  return fs.readFileSync(fileName, "utf8");
};

export const clearReadMe = () => {
  fs.writeFileSync(
    "./README.md",
    `
# Advent of Code 2023

This uses \`pnpm\`. Available commands:

- \`start\`
- \`test\`

| No  | Day | Name         | Data     | Result |
`
  );
};

export const appendReadMe = (text) => {
  fs.appendFileSync("./README.md", text);
};

export const writeToFile = (fileName, text) => {
  fs.writeFileSync(`./${fileName}.txt`, text);
};
