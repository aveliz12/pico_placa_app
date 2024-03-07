import { getCorrectTime } from "./time";

describe("correctTime", () => {
  test("should return true for correct times", () => {
    const testCasesTime = ["06:00", "09:30", "16:00", "21:00"];

    testCasesTime.forEach((value) => {
      expect(getCorrectTime(value)).toBe(true);
    });
  });
  test("should return false for incorrect times", () => {
    const testCasesTime = ["05:00", "10:30", "15:59", "21:01"];

    testCasesTime.forEach((value) => {
      expect(getCorrectTime(value)).toBe(false);
    });
  });
});
