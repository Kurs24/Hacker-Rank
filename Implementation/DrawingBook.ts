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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n: number, p: number): number {
  // Write your code here
  // kalo genap dia page 1 dan last page sendiri
  // const lonely = n % 2 == 0 ? 0 : 1;
  const lonely = n % 2 == 0 ? 1 : 0;

  const front = Math.floor(p / 2);

  // const back = Math.ceil((n - p) / 2 - lonely)
  const totalPages = Math.ceil(n / 2 + lonely);
  const pages = p > 1 && p % 2 == 0 ? p + 1 : p;
  const back = Math.floor(totalPages - pages / 2);

  return Math.min(front, back < 0 ? 0 : back);
}

function main() {
  // const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);
  const ws: WriteStream = createWriteStream("OUTPUT_PATH");

  const n: number = parseInt(readLine().trim(), 10);

  const p: number = parseInt(readLine().trim(), 10);

  const result: number = pageCount(n, p);

  ws.write(result + "\n");

  ws.end();
}
