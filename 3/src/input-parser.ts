import { readFile } from "fs/promises";
import path from "path";

export type Bit = 0 | 1;

const stringToBit = (str: string): Bit => {
  const num = Number(str);

  if (num === 0 || num === 1) {
    return num;
  }
  throw new Error(`character was not a bit: ${str}`);
};

export const getInput = async (): Promise<Bit[][]> => {
  const input = await (
    await readFile(path.join(__dirname, "./input.txt"))
  ).toString();

  const binaryInputs = input
    .split(/[\n\r]+/)
    .map((line) => [...line].map(stringToBit));

  return binaryInputs;
};
