import { trebuchet, trebuchet2 } from "./1/trebuchet.mjs";
import { cube, cube_power } from "./2/cube.mjs";
import { gear } from "./3/gear.mjs";

export const start = () => {
  console.log(`Trebuchet answer: ${trebuchet("@2023/1/data.txt")}`);
  console.log(`Trebuchet p.2 answer: ${trebuchet2("@2023/1/data.txt")}`);
  console.log(`Cube answer: ${cube("@2023/2/data.txt", 12, 13, 14)}`);
  console.log(`Cube p.2 answer: ${cube_power("@2023/2/data.txt")}`);
  console.log(`Gear answer: ${gear("@2023/3/handmade.txt")}`);
};
