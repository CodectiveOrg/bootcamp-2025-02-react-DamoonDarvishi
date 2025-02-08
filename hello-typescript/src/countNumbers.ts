export function countNumbersArray<T>(items: T[]): number {
  let count: number = 0;
  for (const item of items) {
    if (typeof item === "number") count++;
  }
  return count;
}
