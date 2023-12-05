import assert from "assert";
import { cube } from "../2/cube.mjs";
import { appendReadMe } from "../utils.mjs";

describe("2nd day", function () {
  describe("#cube conundrum", function () {
    it("should solve sample", function () {
      assert.equal(cube("./2/sample.txt", 12, 13, 14), 8);
      appendReadMe("|6|2|Cube|Sample|✅|\n");
    });

    it("should solve puzzle", function () {
      assert.equal(cube("./2/data.txt", 12, 13, 14), 2265);
      appendReadMe("|7|2|Cube|Puzzle|✅|\n");
    });
  });
});
