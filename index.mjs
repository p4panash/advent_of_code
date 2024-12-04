import { trebuchet, trebuchet2 } from "./1/trebuchet.mjs";
import { cube, cube_power } from "./2/cube.mjs";
import { gear } from "./3/gear.mjs";

const start = () => {
  console.log(`Trebuchet answer: ${trebuchet("./1/data.txt")}`);
  console.log(`Trebuchet p.2 answer: ${trebuchet2("./1/data.txt")}`);
  console.log(`Cube answer: ${cube("./2/data.txt", 12, 13, 14)}`);
  console.log(`Cube p.2 answer: ${cube_power("./2/data.txt")}`);
  console.log(`Gear answer: ${gear("./3/handmade.txt")}`);
};

start();
