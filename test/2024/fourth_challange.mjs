import assert from "assert";
import { clearReadMe } from "../../utils.mjs";
import { ceres } from "../../2024/4/ceres_search.mjs";

describe("3rd day", () => {
  describe("#Mull it over", () => {
    it("should solve sample", () => {
      // clearReadMe("2024");
      assert.equal(ceres("@2024/4/sample.txt"), 18);
      // appendReadMe("|1|1|Historian|Sample|✅|\n\n");
    });
    // it("should solve puzzle input", () => {
    //   // clearReadMe("2024");
    //   assert.equal(mull_it("@2024/3/puzzle.txt"), 173419328);
    //   // appendReadMe("|1|1|Historian|Sample|✅|\n\n");
    // });
  });
});
