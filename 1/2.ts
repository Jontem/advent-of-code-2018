import { input } from "./input";

let sum = 0;
const frequencyHist = new Set<number>();

(() => {
  while (true) {
    for (const freq of input) {
      sum = sum + freq;
      if (frequencyHist.has(sum)) {
        return;
      }
      frequencyHist.add(sum);
    }
  }
})();

console.log(sum);
