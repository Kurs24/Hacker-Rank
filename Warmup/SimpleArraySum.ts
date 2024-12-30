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
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar: number[]): number {
  // REDUCE WAY
  // return ar.reduce((acc, curr) => acc + curr, 0);

  // TRADITIONAL FOR LOOP WAY
  // let sum: number = 0;
  // for (let value of ar) {
  //     sum += value;
  // }
  // return sum;

  // FOREACH WAY
  let sum: number = 0;
  ar.forEach((value: number) => (sum += value));
  return sum;
}

function main() {
  // const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);
  const ws: WriteStream = createWriteStream("OUTPUT_PATH");

  const arCount: number = parseInt(readLine().trim(), 10);

  const ar: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result: number = simpleArraySum(ar);

  ws.write(result + "\n");

  ws.end();
}
