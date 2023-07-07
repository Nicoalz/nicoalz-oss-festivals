import { getFestivalsByMonth, getFestivalsByDepartment } from "./index";

test("getFestivalsByMonth should return festivals", async () => {
  const festivals = await getFestivalsByMonth("01");
  expect(festivals.length).toBeGreaterThan(0);
});

test("getFestivalsByMonth should throw an error if month is invalid", async () => {
  await expect(getFestivalsByMonth("13")).rejects.toThrow("Invalid month");
});

test("getFestivalsByDepartment should return festivals", async () => {
  const festivals = await getFestivalsByDepartment("01");
  expect(festivals.length).toBeGreaterThan(0);
});

test("getFestivalsByDepartment should throw an error if department is invalid", async () => {
  await expect(getFestivalsByDepartment("99")).rejects.toThrow(
    "Invalid department"
  );
});
