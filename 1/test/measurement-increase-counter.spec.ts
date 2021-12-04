import { Chance } from "chance";
import {
  countMeasurementIncreaseByWindow,
  countMeasurementIncreases,
} from "../src/measurement-increase-counter";
const chance = new Chance();
describe("measurement-increase-counter", () => {
  describe("countMeasurementIncreases", () => {
    let small: number, big: number, bigger: number;

    beforeEach(() => {
      small = chance.natural({ min: 0, max: 100 });
      big = chance.natural({ min: 101, max: 200 });
      bigger = chance.natural({ min: 201, max: 300 });
    });

    it("should return 0 when empty array is given", () => {
      expect(countMeasurementIncreases([])).toStrictEqual(0);
    });

    it("should return 1 when smaller then larger value given", () => {
      expect(countMeasurementIncreases([small, big])).toStrictEqual(1);
    });

    it("should return 0 when larger then smaller value given", () => {
      expect(countMeasurementIncreases([big, small])).toStrictEqual(0);
    });

    it("should return 0 when the same value is given twice", () => {
      expect(countMeasurementIncreases([small, small])).toStrictEqual(0);
    });

    it("should return 2 when small, big, bigger", () => {
      expect(countMeasurementIncreases([small, big, bigger])).toStrictEqual(2);
    });

    it("should return 1 when big, small, bigger", () => {
      expect(countMeasurementIncreases([big, small, bigger])).toStrictEqual(1);
    });

    it("example input/output", () => {
      expect(
        countMeasurementIncreases([
          199,
          200,
          208,
          210,
          200,
          207,
          240,
          269,
          260,
          263,
        ])
      ).toStrictEqual(7);
    });
  });

  describe("countMeasurementIncreaseByWindow", () => {
    let smallest: number,
      smaller: number,
      small: number,
      big: number,
      bigger: number,
      biggest: number;

    beforeEach(() => {
      smallest = chance.natural({ min: 0, max: 100 });
      smaller = chance.natural({ min: 101, max: 200 });
      small = chance.natural({ min: 201, max: 300 });
      big = chance.natural({ min: 301, max: 400 });
      bigger = chance.natural({ min: 401, max: 500 });
      biggest = chance.natural({ min: 501, max: 600 });
    });

    it("should return 0 when empty array is given", () => {
      expect(countMeasurementIncreaseByWindow([])).toStrictEqual(0);
    });

    it("should return 0 when 4 of the same value are given", () => {
      expect(
        countMeasurementIncreaseByWindow([small, small, small, small])
      ).toStrictEqual(0);
    });

    it("should return 1 when window grows with 4 measurement", () => {
      expect(
        countMeasurementIncreaseByWindow([smallest, smaller, small, big])
      ).toStrictEqual(1);
    });

    it("should return 2 when window grows with 4th and 5th measurements", () => {
      expect(
        countMeasurementIncreaseByWindow([
          smallest,
          smaller,
          small,
          big,
          bigger,
        ])
      ).toStrictEqual(2);
    });

    it("should return 3 when window grows with 4th, 5th, and 6th measurements", () => {
      expect(
        countMeasurementIncreaseByWindow([
          smallest,
          smaller,
          small,
          big,
          bigger,
          biggest,
        ])
      ).toStrictEqual(3);
    });

    it("should return 0 when window keeps getting smaller", () => {
      expect(
        countMeasurementIncreaseByWindow([
          biggest,
          bigger,
          big,
          small,
          smaller,
          smallest,
        ])
      ).toStrictEqual(0);
    });

    it("example input/output", () => {
      expect(
        countMeasurementIncreaseByWindow([
            199,
            200,
            208,
            210,
            200,
            207,
            240,
            269,
            260,
            263,
        ])
      ).toStrictEqual(5);
    });
  });
});
