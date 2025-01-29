// Reverse any array
export function reverseArray<T>(array: T[]): T[] {
  const reverseAnything: T[] = [];
  for (let i = 0; i < array.length; i++) {
    reverseAnything.push(array[array.length - 1 - i]);
  }
  console.log(reverseAnything);
  return reverseAnything;
}

reverseArray([1, 2, "three", "four", "5", 6]);

// Reverse a number array
export function reverseNumbersArray(array: number[]): number[] {
  const reverseNumbers: number[] = [];
  for (let i = 0; i < array.length; i++) {
    reverseNumbers.push(array[array.length - 1 - i]);
  }
  console.log(reverseNumbers);
  return reverseNumbers;
}

reverseNumbersArray([2, 4, 6, 8]); // Targert: [8, 6, 4, 2]

// Reverse a string array
export function reverseStringsArray(array: string[]): string[] {
  const reverseString: string[] = [];
  for (let i = 0; i < array.length; i++) {
    reverseString.push(array[array.length - 1 - i]);
  }
  console.log(reverseString);
  return reverseString;
}

reverseStringsArray(["A", "B", "C", "D"]); // ["D", "C", "B", "A"]
