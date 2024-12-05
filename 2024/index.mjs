import { historian, historian2 } from "./1/historian.mjs";
import { red_reports } from "./2/red_reports.mjs";

export const start = () => {
  console.log(`Historian answer: ${historian("@2024/1/puzzle.txt")}`);
  console.log(`Historian pt 2 answer: ${historian2("@2024/1/puzzle.txt")}`);
  console.log(`Red-Nosed Reports answer: ${red_reports("@2024/2/puzzle.txt")}`);
};
