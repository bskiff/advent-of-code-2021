import { readFile } from "fs/promises";
import path from "path";

export type BingoBoard = number[][];

export const getInput = async (): Promise<{
  drawings: number[];
  boards: BingoBoard[];
}> => {
  const input = await (
    await readFile(path.join(__dirname, "./input.txt"))
  ).toString();

  throw new Error("not implemented");
};
