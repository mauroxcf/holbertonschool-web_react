import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("utils_tests", function () {
  describe("getFullYear", function () {
    it("should return current year", function () {
      const year = getFullYear();
      expect(year).toEqual(new Date().getFullYear());
    });
  });
  describe("getFooterCopy", function () {
    const trueMsg = "Holberton School";
    const falseMsg = "Holberton School main dashboard";

    it("Should return true message", function () {
      const message = getFooterCopy(true);
      expect(message).toEqual(trueMsg);
    });
    it("Should return false message", function () {
      const message = getFooterCopy(false);
      expect(message).toEqual(falseMsg);
    });
  });
  describe("getLatestNotification", function () {
    it("should return correct string element", function () {
      const element = "<strong>Urgent requirement</strong> - complete by EOD";
      expect(getLatestNotification()).toEqual(element);
    });
  });
});
