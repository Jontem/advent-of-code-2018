import { input } from "./input";

let bestDiff: [number, string] = [500, ""];

for (const row of input) {
  for (const innerRow of input) {
    if (innerRow === row) {
      continue;
    }
    let currentDiff = "";
    for (let i = 0; i < row.length; i++) {
      if (row[i] === innerRow[i]) {
        currentDiff += row[i];
      }
    }

    const diffCount = innerRow.length - currentDiff.length;
    if (diffCount < bestDiff[0]) {
      bestDiff = [diffCount, currentDiff];
    }
  }
}

console.log(bestDiff);
