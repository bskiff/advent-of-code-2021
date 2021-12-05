import { Bit } from "./input-parser";

interface BitCount {
  zero: number;
  one: number;
}

export const computeGammaRate = (input: Bit[][]): Bit[] => {
  const bitCounts = input.reduce(
    (bitCounts: BitCount[], currentValue: Bit[]): BitCount[] => {
      return currentValue.map(
        (bit, index): BitCount => {
          if (bitCounts[index]) {
            return {
              zero:
                bit === 0 ? bitCounts[index].zero + 1 : bitCounts[index].zero,
              one: bit === 1 ? bitCounts[index].one + 1 : bitCounts[index].one,
            };
          }
          return {
            zero: bit === 0 ? 1 : 0,
            one: bit === 1 ? 1 : 0,
          };
        }
      );
    },
    []
  );

  return bitCounts.map((count: BitCount): Bit => {
    if (count.one >= count.zero) {
      return 1;
    }
    return 0;
  }, [] as Bit[]);
};

export const computeEpsilonRate = (input: Bit[][]): Bit[] => {
  const gammaRate = computeGammaRate(input);

  return gammaRate.map((bit: Bit): Bit => (bit === 1 ? 0 : 1));
};

export const computePowerConsumption = (input: Bit[][]): number => {
  const gammaRate = computeGammaRate(input);
  const epsilonRate = computeEpsilonRate(input);

  return (
    convertBinaryToDecimal(gammaRate) * convertBinaryToDecimal(epsilonRate)
  );
};

export const convertBinaryToDecimal = (input: Bit[]): number => {
  return input.reduce(
    (decimal: number, nextBit: Bit, index: number): number => {
      const power = input.length - index - 1;
      const decimalValueOfBit = nextBit * Math.pow(2, power);

      return decimal + decimalValueOfBit;
    },
    0
  );
};

const computeFilteredRating = (
  input: Bit[][],
  ratingFunc: (input: Bit[][]) => Bit[]
): Bit[] => {
  return input.reduce(
    (
      filteredNumbers: Bit[][],
      _currentNumber: Bit[],
      index: number
    ): Bit[][] => {
      if (filteredNumbers.length == 1) {
        return filteredNumbers;
      }

      const rating = ratingFunc(
        filteredNumbers.map((num: Bit[]): Bit[] => [num[index]])
      )[0];

      return filteredNumbers.filter((num: Bit[]) => num[index] === rating);
    },
    [...input]
  )[0];
};

export const computeOxygenGeneratorRating = (input: Bit[][]): Bit[] => {
  return computeFilteredRating(input, computeGammaRate);
};

export const computeCo2ScrubberRating = (input: Bit[][]): Bit[] => {
  return computeFilteredRating(input, computeEpsilonRate);
};

export const computeLifeSupportRating = (input: Bit[][]): number => {
  const oxygenRating = computeOxygenGeneratorRating(input);
  const co2Rating = computeCo2ScrubberRating(input);

  return (
    convertBinaryToDecimal(oxygenRating) * convertBinaryToDecimal(co2Rating)
  );
};
