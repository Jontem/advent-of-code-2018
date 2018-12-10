import { input } from "./input";

const result: Array<Map<string, number>> = [];
for (const row of input) {
  const map = new Map<string, number>();
  const sorted = row.split("").sort();
  for (const char of sorted) {
    const prevVal = map.get(char);
    if (prevVal !== undefined) {
      map.set(char, prevVal + 1);
    } else {
      map.set(char, 1);
    }
  }
  result.push(map);
}
let twos = 0;
let threes = 0;
for (const map of result) {
  const set = new Set(map.values());
  if (set.has(2)) {
    twos++;
  }

  if (set.has(3)) {
    threes++;
  }
}

console.log(twos * threes);
