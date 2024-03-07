import { getDay, isHoliday } from "./date";

describe("correctDate", () => {
  test("should return a day of the week", () => {
    const testCases = [
      { input: new Date("2024-03-04T17:00:00Z"), expectedDay: "Lunes" },
      { input: new Date("2024-03-05T17:00:00Z"), expectedDay: "Martes" },
    ];

    testCases.forEach(({ input, expectedDay }) => {
      expect(getDay(input)).toBe(expectedDay);
    });
  });

  test("should return true for holidays", () => {
    const testCasesHolidays = [
      new Date("2024-01-01T17:00:00Z"),
      new Date("2024-02-12T17:00:00Z"),
      new Date("2024-02-13T17:00:00Z"),
    ];

    testCasesHolidays.forEach((value) => {
      expect(isHoliday(value)).toBe(true);
    });
  });
});
