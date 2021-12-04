import {
  multiplyHorizontalByVertical,
  sumHorizontalDirection,
  sumVerticalDirection,
} from "../src/direction-tracker";
import { Vector } from "../src/input-parser";

describe("direction-tracker", () => {
  let exampleVectors: Vector[];

  beforeEach(() => {
    exampleVectors = [
      { direction: "forward", units: 5 },
      { direction: "down", units: 5 },
      { direction: "forward", units: 8 },
      { direction: "up", units: 3 },
      { direction: "down", units: 8 },
      { direction: "forward", units: 2 },
    ];
  });

  describe("sumHorizontalDirection", () => {
    it("example input/output", () => {
      expect(sumHorizontalDirection(exampleVectors)).toStrictEqual(15);
    });
  });

  describe("sumVerticalDirection", () => {
    it("example input/output", () => {
      expect(sumVerticalDirection(exampleVectors)).toStrictEqual(10);
    });
  });

  describe("multiplyHorizontalByVertical", () => {
    it("example input/output", () => {
      expect(multiplyHorizontalByVertical(exampleVectors)).toStrictEqual(150);
    });
  });
});
