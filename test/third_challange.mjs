import assert from "assert";
import { extractDigits, gear } from "../3/gear.mjs";
import { appendReadMe } from "../utils.mjs";

describe("3rd day", function () {
  describe("#extractDigits", function () {
    it("should extract the correct number", function () {
      assert.equal(extractDigits("467..114..", 2), 467);
      assert.equal(extractDigits("467..114..", 5), 114);
      assert.equal(extractDigits("467..114..", 4), 0);
    });
  });
  describe("#Gear Ratio", function () {
    it("should pass sample", function () {
      assert.equal(gear("./3/sample.txt"), 4361);
      appendReadMe("|10|3|Gear Ratios|Sample|✅|\n");
    });
  });
});
