import assert from "assert";
import { extractDigits, gear } from "../../2023/3/gear.mjs";
import { appendReadMe } from "../../utils.mjs";

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
      assert.equal(gear("@2023/3/sample.txt"), 4361);
      appendReadMe("|10|3|Gear Ratios|Sample|✅|\n");
    });
    it("should pass handmade", function () {
      assert.equal(gear("@2023/3/handmade.txt"), 23995);
      appendReadMe("|11|3|Gear Ratios|Handmade|✅|\n");
    });
    it("should pass edge case", function () {
      assert.equal(gear("@2023/3/edgecase.txt"), 96);
      appendReadMe("|11|3|Gear Ratios|Handmade|✅|\n");
    });
  });
});
