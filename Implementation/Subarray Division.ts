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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s: number[], d: number, m: number): number {
  // Write your code here
  let result: number = 0;

  for (let i = 0; i < s.length; i++) {
    // let tempArr: number[] = s.slice(i, i + m);

    // if (tempArr.reduce((acc, curr) => acc + curr, 0) == d) {
    //     result += 1;
    // }

    // Another option
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];

      if (j == i + m - 1 && sum == d) {
        result += 1;
      }
    }
  }

  return result;
}

function main() {
  // const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);
  const ws: WriteStream = createWriteStream("OUTPUT_PATH");

  const n: number = parseInt(readLine().trim(), 10);

  const s: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((sTemp) => parseInt(sTemp, 10));

  const firstMultipleInput: string[] = readLine().replace(/\s+$/g, "").split(" ");

  const d: number = parseInt(firstMultipleInput[0], 10);

  const m: number = parseInt(firstMultipleInput[1], 10);

  const result: number = birthday(s, d, m);

  ws.write(result + "\n");

  ws.end();
}
