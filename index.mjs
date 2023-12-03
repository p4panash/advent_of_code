import { trebuchet, trebuchet2 } from "./1/trebuchet.mjs";

const start = () => {
  console.log(`Trebuchet answer: ${trebuchet("./1/data.txt")}`);
  console.log(`Trebuchet p.2 answer: ${trebuchet2("./1/data.txt")}`);
};

start();
