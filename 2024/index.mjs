import { historian } from "./1/historian.mjs";

export const start = () => {
  console.log(`Historian answer: ${historian("@2024/1/puzzle1.txt")}`);
};
