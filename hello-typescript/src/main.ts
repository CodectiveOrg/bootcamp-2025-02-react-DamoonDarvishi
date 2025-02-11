import { countNumbersArray } from "./countNumbers";
import { reverseArray } from "./reverse";
import { entities } from "./sort/entities.data";
import { sortEntities } from "./sort/sortEntities";

function testReverseArray(): void {
  console.log(reverseArray([1, 2, "three", "four", "5", 6]));
}

function testCountNumbers(): void {
  const items = [3, 5, "Vue", 3, "React", "Angular"];
  const count = countNumbersArray(items);
  console.log(count);
}

function testSortEntities(): void {
  const sortedEntities = sortEntities(entities);

  console.log(sortedEntities);
}

function main(): void {
  testReverseArray();
  testCountNumbers();
  testSortEntities();
}

main();
