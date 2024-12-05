import assert from "assert";
import { historian, historian2 } from "../../2024/1/historian.mjs";
import { clearReadMe } from "../../utils.mjs";

describe("1st day", () => {
  describe("#historian", () => {
    it("should solve sample", () => {
      // clearReadMe("2024");
      assert.equal(historian("@2024/1/sample.txt"), 11);
      // appendReadMe("|1|1|Historian|Sample|✅|\n\n");
    });
    it("should solve puzzle input", () => {
      // clearReadMe("2024");
      assert.equal(historian("@2024/1/puzzle.txt"), 2057374);
      // appendReadMe("|1|1|Historian|Sample|✅|\n\n");
    });
  });
  describe("#historian p2", () => {
    it("should solve sample", () => {
      assert.equal(historian2("@2024/1/sample2.txt"), 31);
    });
    it("should solve sample", () => {
      assert.equal(historian2("@2024/1/puzzle.txt"), 23177084);
    });
  });
});
