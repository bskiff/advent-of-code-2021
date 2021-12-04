import { dir } from "console";
import { readFile } from "fs/promises";
import path from "path";

export type Direction = "up" | "down" | "forward";

export interface Vector {
  direction: Direction;
  units: number;
}

export const getInput = async (): Promise<Vector[]> => {
  const input = await (
    await readFile(path.join(__dirname, "./input.txt"))
  ).toString();

  const measurements = input.split(/[\n\r]+/).map((line) => {
    const [directionString, units] = line.split(" ");

    let direction: Direction;
    if (
      directionString === "up" ||
      directionString === "down" ||
      directionString === "forward"
    ) {
      direction = directionString;
    } else {
      throw new Error("Unexpected direction " + directionString);
    }

    return {
      direction,
      units: +units,
    };
  });

  return measurements;
};
