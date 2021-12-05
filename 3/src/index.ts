import {
  computeLifeSupportRating,
  computePowerConsumption,
} from "./diagnostic";
import { getInput } from "./input-parser";

const solve = async () => {
  const input = await getInput();
  console.log(`part1: ${computePowerConsumption(input)}`);
  console.log(`part2: ${computeLifeSupportRating(input)}`);
};

solve();
