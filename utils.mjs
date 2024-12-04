import fs from "fs";
import path from "path";

const resolveRootPath = (filePath) => {
  if (filePath.startsWith("@")) {
    const projectRoot = path.resolve();
    return path.join(projectRoot, filePath.slice(1));
  }
  return filePath;
};

export const readFromFile = (fileName) => {
  return fs.readFileSync(resolveRootPath(fileName), "utf8");
};

export const clearReadMe = (year = "2023") => {
  fs.writeFileSync(
    resolveRootPath(`@${year}/README.md`),
    `
# Advent of Code ${year}

This uses \`pnpm\`. Available commands:

- \`start\`
- \`test\`

| No  | Day | Name         | Data     | Result |\n
`
  );
};

export const appendReadMe = (text, year = "2023") => {
  fs.appendFileSync(resolveRootPath(`@${year}/README.md`), text);
};

export const writeToFile = (fileName, text) => {
  fs.writeFileSync(`./${fileName}.txt`, text);
};
