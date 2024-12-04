import assert from "assert";
import { historian } from "../../2024/1/historian.mjs";
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
      assert.equal(historian("@2024/1/puzzle1.txt"), 2057374);
      // appendReadMe("|1|1|Historian|Sample|✅|\n\n");
    });
  });
});
