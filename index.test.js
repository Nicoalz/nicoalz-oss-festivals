import {
  getFestivalsByMonth,
  getFestivalsByDepartment,
  getFestivalsByRegion,
  getFestivalsByDomaine,
  getFestivalsByFilters,
} from "./index";

describe("getFestivalsByRegion", () => {
  test("should return festivals", async () => {
    const festivals = await getFestivalsByRegion("Auvergne-Rhône-Alpes");
    expect(festivals.length).toBeGreaterThan(0);
  });

  test("should throw an error if region is invalid", async () => {
    await expect(getFestivalsByRegion("WhatEver")).rejects.toThrow(
      "Invalid region"
    );
  });
});

describe("getFestivalsByDepartment", () => {
  test("should return festivals", async () => {
    const festivals = await getFestivalsByDepartment("01");
    expect(festivals.length).toBeGreaterThan(0);
  });

  test("should throw an error if department is invalid", async () => {
    await expect(getFestivalsByDepartment("99")).rejects.toThrow(
      "Invalid department"
    );
  });
});

describe("getFestivalsByMonth", () => {
  test("should return festivals", async () => {
    const festivals = await getFestivalsByMonth("01");
    expect(festivals.length).toBeGreaterThan(0);
  });

  test("should throw an error if month is invalid", async () => {
    await expect(getFestivalsByMonth("1aaaaaaaaaaaaaaaaa3")).rejects.toThrow(
      "Invalid month"
    );
  });
});

describe("getFestivalsByTheme", () => {
  test("should return festivals", async () => {
    const festivals = await getFestivalsByDomaine("Musiques actuelles");
    expect(festivals.length).toBeGreaterThan(0);
  });

  test("should throw an error if theme is invalid", async () => {
    await expect(getFestivalsByDomaine("WhatEver")).rejects.toThrow(
      "Invalid domaine"
    );
  });
});

describe("getFestivalsByFilters", () => {
  test("should return festivals", async () => {
    const festivals = await getFestivalsByFilters([
      { filter: "region", value: "Auvergne-Rhône-Alpes" },
      { filter: "domaine", value: "Musiques actuelles" },
      { filter: "mois_habituel_de_debut", value: "01 (janvier)" },
    ]);
    expect(festivals.length).toBeGreaterThan(0);
  });

  test("should throw an error if filter is invalid", async () => {
    await expect(
      getFestivalsByFilters([{ filter: "region", value: "WhatEver" }])
    ).rejects.toThrow("Invalid filter");
  });
});
