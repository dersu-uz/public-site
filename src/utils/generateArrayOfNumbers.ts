export const generateArrayOfNumbers = (size: number): number[] => {
  return new Array(size).fill(0).map((item, i) => i);
};
