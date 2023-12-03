import assert from "assert";
import { trebuchet } from "../1/trebuchet.mjs";
import { appendReadMe, clearReadMe } from "../utils.mjs";

describe("1st day", function () {
  describe("#trebuchet", function () {
    it("should solve puzzle", function () {
      clearReadMe();
      assert.equal(trebuchet("./1/test.txt"), 142);
      appendReadMe("|1|1|Trebuchet|Sample|✅|\n");

      assert.equal(trebuchet("./1/data.txt"), 55002);
      appendReadMe("|2|1|Trebuchet|Puzzle|✅|\n");
    });
  });
});
