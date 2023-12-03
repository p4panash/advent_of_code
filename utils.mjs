import fs from "fs";

export const readFromFile = (fileName) => {
  return fs.readFileSync(fileName, "utf8");
};

export const clearReadMe = () => {
  fs.writeFileSync(
    "./README.md",
    "This repo contains my solutions for the Advent of Code 2023. \n"
  );
};

export const appendReadMe = (text) => {
  fs.appendFileSync("./README.md", text);
};
