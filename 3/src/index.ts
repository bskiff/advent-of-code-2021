import { computePowerConsumption } from "./diagnostic";
import { getInput } from "./input-parser";

const solve = async () => {
  const input = await getInput();
  console.log(`part1: ${computePowerConsumption(input)}`);
};

solve();
