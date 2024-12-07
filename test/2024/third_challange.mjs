import assert from "assert";
import { mull_it, mull_it_conditionally } from "../../2024/3/mull_it_over.mjs";
import { clearReadMe } from "../../utils.mjs";

describe("3rd day", () => {
  describe("#Mull it over", () => {
    it("should solve sample", () => {
      // clearReadMe("2024");
      assert.equal(mull_it("@2024/3/sample.txt"), 161);
      // appendReadMe("|1|1|Historian|Sample|✅|\n\n");
    });
    it("should solve puzzle input", () => {
      // clearReadMe("2024");
      assert.equal(mull_it("@2024/3/puzzle.txt"), 173419328);
      // appendReadMe("|1|1|Historian|Sample|✅|\n\n");
    });
  });
  describe("#Mull it over pt 2", () => {
    it("should solve sample", () => {
      // clearReadMe("2024");
      assert.equal(mull_it_conditionally("@2024/3/sample2.txt"), 48);
      // appendReadMe("|1|1|Historian|Sample|✅|\n\n");
    });
    it("should solve puzzle input", () => {
      // clearReadMe("2024");
      assert.equal(mull_it_conditionally("@2024/3/puzzle.txt"), 90669332);
      // appendReadMe("|1|1|Historian|Sample|✅|\n\n");
    });
  });
});
