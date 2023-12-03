import assert from "assert";
import { trebuchet, trebuchet2 } from "../1/trebuchet.mjs";
import { appendReadMe, clearReadMe } from "../utils.mjs";

describe("1st day", function () {
  describe("#trebuchet", function () {
    it("should solve sample", function () {
      clearReadMe();
      assert.equal(trebuchet("./1/test.txt"), 142);
      appendReadMe("|1|1|Trebuchet|Sample|✅|\n");
    });

    it("should solve puzzle", function () {
      assert.equal(trebuchet("./1/data.txt"), 55002);
      appendReadMe("|2|1|Trebuchet|Puzzle|✅|\n");
    });
  });
  describe("#trebuchet p2", function () {
    it("should solve sample", function () {
      assert.equal(trebuchet2("./1/test2.txt"), 281);
      appendReadMe("|3|1|Trebuchet p2|Sample|✅|\n");
    });

    it("should solve handmade test", function () {
      assert.equal(trebuchet2("./1/p2_handmade.txt"), 525);
      appendReadMe("|4|1|Trebuchet p2|Handmade|✅|\n");
    });

    it("should solve puzzle", function () {
      assert.equal(trebuchet2("./1/data.txt"), 55093);
      appendReadMe("|5|1|Trebuchet p2|Puzzle|✅|\n");
    });
  });
});
