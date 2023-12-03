import assert from "assert";
import { trebuchet } from "../1/trebuchet.mjs";
import { appendReadMe, clearReadMe } from "../utils.mjs";

describe("1st day", function () {
  describe("#trebuchet", function () {
    it("should solve puzzle", function () {
      clearReadMe();
      assert.equal(trebuchet("./1/test.txt"), 142);
      appendReadMe("Trebuchet passes the test input ✅ \n");

      assert.equal(trebuchet("./1/data.txt"), 55002);
      appendReadMe("Trebuchet passes the question input ✅ \n");
    });
  });
});
