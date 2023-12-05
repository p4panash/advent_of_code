import { trebuchet, trebuchet2 } from "./1/trebuchet.mjs";
import { cube } from "./2/cube.mjs";

const start = () => {
  console.log(`Trebuchet answer: ${trebuchet("./1/data.txt")}`);
  console.log(`Trebuchet p.2 answer: ${trebuchet2("./1/data.txt")}`);
  console.log(`Cube answer: ${cube("./2/data.txt", 12, 13, 14)}`);
};

start();
