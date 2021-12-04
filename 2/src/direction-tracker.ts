import { Vector } from "./input-parser";

export const sumHorizontalDirection = (vectors: Vector[]): number => {
  return vectors.reduce((sum, vector) => {
    if (vector.direction === "forward") {
      return sum + vector.units;
    }

    return sum;
  }, 0);
};

export const sumVerticalDirection = (vectors: Vector[]): number => {
  return vectors.reduce((sum, vector) => {
    if (vector.direction === "up") {
      return sum - vector.units;
    }

    if (vector.direction === "down") {
      return sum + vector.units;
    }

    return sum;
  }, 0);
};

export const multiplyHorizontalByVertical = (vectors: Vector[]): number => {
  return sumHorizontalDirection(vectors) * sumVerticalDirection(vectors);
};
