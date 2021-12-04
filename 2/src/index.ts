import { multiplyHorizontalByVertical } from "./direction-tracker";
import { getInput } from "./input-parser";

const solve = async () => {
  const input = await getInput();
  console.log(`part1: ${multiplyHorizontalByVertical(input)}`);
};

solve();
