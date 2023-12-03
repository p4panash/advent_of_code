import fs from "fs";

export const readFromFile = (fileName) => {
  return fs.readFileSync(fileName, "utf8");
};
