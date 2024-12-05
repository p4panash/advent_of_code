import { historian, historian2 } from "./1/historian.mjs";

export const start = () => {
  console.log(`Historian answer: ${historian("@2024/1/puzzle.txt")}`);
  console.log(`Historian pt 2 answer: ${historian2("@2024/1/puzzle.txt")}`);
};
