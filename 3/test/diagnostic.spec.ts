import {
  computeCo2ScrubberRating,
  computeEpsilonRate,
  computeGammaRate,
  computeLifeSupportRating,
  computeOxygenGeneratorRating,
  computePowerConsumption,
} from "../src/diagnostic";
import { Bit } from "../src/input-parser";

describe("diagnostic", () => {
  let exampleInput: Bit[][];

  beforeEach(() => {
    exampleInput = [
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 1, 0],
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0],
    ];
  });
  describe("computeGammaRate", () => {
    it("Example input/output", () => {
      expect(computeGammaRate(exampleInput)).toStrictEqual([1, 0, 1, 1, 0]);
    });
  });

  describe("computeEpsilonRate", () => {
    it("Example input/output", () => {
      expect(computeEpsilonRate(exampleInput)).toStrictEqual([0, 1, 0, 0, 1]);
    });
  });

  describe("computePowerConsumption", () => {
    it("Example input/output", () => {
      expect(computePowerConsumption(exampleInput)).toStrictEqual(198);
    });
  });

  describe("computeOxygenGeneratorRating", () => {
    it("Example input/output", () => {
      expect(computeOxygenGeneratorRating(exampleInput)).toStrictEqual([
        1,
        0,
        1,
        1,
        1,
      ]);
    });
  });

  describe("computeCo2ScrubberRating", () => {
    it("Example input/output", () => {
      expect(computeCo2ScrubberRating(exampleInput)).toStrictEqual([
        0,
        1,
        0,
        1,
        0,
      ]);
    });
  });

  describe("computeLifeSupportRating", () => {
    it("Example input/output", () => {
      expect(computeLifeSupportRating(exampleInput)).toStrictEqual(230);
    });
  });
});
