"use strict";

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a: number[]): number {
  // Write your code here
  let max: number = 0;
  let currNumber: number = a[0];
  let nextNumber: number = currNumber + 1;
  let sum = 1;
  let nextSum = 0;

  a.sort((a, b) => a - b);

  for (let i = 1; i < a.length; i++) {
    if (a[i] == currNumber) {
      sum += 1;
    } else if (a[i] == nextNumber) {
      nextSum += 1;
    } else if (a[i] == nextNumber + 1) {
      if (max < nextSum + sum) {
        max = nextSum + sum;
      }
      currNumber = nextNumber;
      nextNumber = a[i];
      sum = nextSum;
      nextSum = 1;
    } else {
      if (max < nextSum + sum) {
        max = nextSum + sum;
      }
      currNumber = a[i];
      nextNumber = currNumber + 1;
      sum = 1;
      nextSum = 0;
    }
    if (max < nextSum + sum) {
      max = nextSum + sum;
    }
  }

  return max;
}

function main() {
  // const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);
  const ws: WriteStream = createWriteStream("OUTPUT_PATH");

  const n: number = parseInt(readLine().trim(), 10);

  const a: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result: number = pickingNumbers(a);

  ws.write(result + "\n");

  ws.end();
}
