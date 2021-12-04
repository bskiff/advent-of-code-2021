import {
  multiplyHorizontalByVertical,
  multiplyHorizontalByVerticalWithAim,
} from "./direction-tracker";
import { getInput } from "./input-parser";

const solve = async () => {
  const input = await getInput();
  console.log(`part1: ${multiplyHorizontalByVertical(input)}`);
  console.log(`part2: ${multiplyHorizontalByVerticalWithAim(input)}`);
};

solve();
