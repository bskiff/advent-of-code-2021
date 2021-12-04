import { readFile } from 'fs/promises';
import path from 'path';

export const getInput = async (): Promise<number[]> => {
    const input = await (await readFile(path.join(__dirname, './input.txt'))).toString();
    const measurements = input.split(/\s/).map((measurementStrings) => Number(measurementStrings));
    return measurements;
};