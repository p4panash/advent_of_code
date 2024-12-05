import assert from "assert";
import { red_reports } from "../../2024/2/red_reports.mjs";
import { clearReadMe } from "../../utils.mjs";

describe("2nd day", () => {
  describe("#Red-Nosed Reports", () => {
    it("should solve sample", () => {
      // clearReadMe("2024");
      assert.equal(red_reports("@2024/2/sample.txt"), 2);
      // appendReadMe("|1|1|Historian|Sample|✅|\n\n");
    });
    it("should solve puzzle input", () => {
      // clearReadMe("2024");
      assert.equal(red_reports("@2024/2/puzzle.txt"), 442);
      // appendReadMe("|1|1|Historian|Sample|✅|\n\n");
    });
  });
  // describe("#historian p2", () => {
  //   it("should solve sample", () => {
  //     assert.equal(historian2("@2024/1/sample2.txt"), 31);
  //   });
  //   it("should solve sample", () => {
  //     assert.equal(historian2("@2024/1/puzzle.txt"), 23177084);
  //   });
  // });
});
