import { getInput } from "./input-parser";
import {
  countMeasurementIncreaseByWindow,
  countMeasurementIncreases,
} from "./measurement-increase-counter";

const solve = async () => {
  const input = await getInput();
  console.log(`part1: ${countMeasurementIncreases(input)}`);
  console.log(`part2: ${countMeasurementIncreaseByWindow(input)}`);
};

solve();
