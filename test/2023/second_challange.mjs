import assert from "assert";
import { cube, cube_power } from "../../2023/2/cube.mjs";
import { appendReadMe } from "../../utils.mjs";

describe("2nd day", function () {
  describe("#cube conundrum", function () {
    it("should solve sample", function () {
      assert.equal(cube("@2023/2/sample.txt", 12, 13, 14), 8);
      appendReadMe("|6|2|Cube|Sample|✅|\n\n");
    });

    it("should solve puzzle", function () {
      assert.equal(cube("@2023/2/data.txt", 12, 13, 14), 2265);
      appendReadMe("|7|2|Cube|Puzzle|✅|\n\n");
    });
  });
  describe("#cube conundrum pt 2", function () {
    it("should solve sample", function () {
      assert.equal(cube_power("@2023/2/sample.txt"), 2286);
      appendReadMe("|8|2|Cube pt.2|Sample|✅|\n\n");
    });
    it("should solve puzzle", function () {
      assert.equal(cube_power("@2023/2/data.txt"), 64097);
      appendReadMe("|9|2|Cube pt.2|Puzzle|✅|\n\n");
    });
  });
});
