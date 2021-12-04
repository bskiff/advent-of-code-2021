export const countMeasurementIncreases = (measurements: number[]): number => {
  return measurements.reduce((count, measurement, index, array) => {
    if (index > 0 && measurement > array[index - 1]) {
      return count + 1;
    }
    return count;
  }, 0);
};

const computeWindowSum = (
  measurements: number[],
  startingIndex: number
): number =>
  measurements[startingIndex] +
  measurements[startingIndex + 1] +
  measurements[startingIndex + 2];

export const countMeasurementIncreaseByWindow = (
  measurements: number[]
): number => {
  return measurements.reduce((count, _measurement, index, array) => {
    const currentWindow = computeWindowSum(array, index - 2);
    const lastWindow = computeWindowSum(array, index - 3);

    if (index > 2 && currentWindow > lastWindow) {
      return count + 1;
    }
    return count;
  }, 0);
};
