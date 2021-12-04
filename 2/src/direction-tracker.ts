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

export const sumVerticalDirectionWithAim = (vectors: Vector[]): number => {
  return vectors.reduce(
    (aimAndDepth, vector): { aim: number; depth: number } => {
      if (vector.direction === "up") {
        return {
          ...aimAndDepth,
          aim: aimAndDepth.aim - vector.units,
        };
      }
      if (vector.direction === "down") {
        return {
          ...aimAndDepth,
          aim: aimAndDepth.aim + vector.units,
        };
      }
      if (vector.direction === "forward") {
        return {
          ...aimAndDepth,
          depth: aimAndDepth.depth + aimAndDepth.aim * vector.units,
        };
      }

      return aimAndDepth;
    },
    {
      aim: 0,
      depth: 0,
    }
  ).depth;
};

export const multiplyHorizontalByVerticalWithAim = (
  vectors: Vector[]
): number => {
  return sumHorizontalDirection(vectors) * sumVerticalDirectionWithAim(vectors);
};
