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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n: number, ar: number[]): number {
  // Write your code here
  let splittedArr: number[][] = [[ar[0]]];
  let result = 0;

  for (let i = 1; i < n; i++) {
    console.log(i);
    for (let j = 0; j < splittedArr.length; j++) {
      console.log(j);
      if (ar[i] == splittedArr[j][0]) {
        splittedArr[j].push(ar[i]);
        break;
      } else if (j == splittedArr.length - 1) {
        splittedArr.push([ar[i]]);
        break;
      }
    }
  }

  splittedArr.forEach((value) => {
    result += Math.floor(value.length / 2);
  });

  return result;

  // Optimized

  //   const lonelySock = new Set([ar[0]]);
  //   let counter = 0;
  //   for (let i = 1; i < ar.length; i++) {
  //     const currentVaL = ar[i];
  //     if (lonelySock.has(currentVaL)) {
  //       counter++;
  //       lonelySock.delete(currentVaL);
  //     } else {
  //       lonelySock.add(currentVaL);
  //     }
  //   }
  //   return counter;
}

function main() {
  // const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);
  const ws: WriteStream = createWriteStream("OUTPUT_PATH");

  const n: number = parseInt(readLine().trim(), 10);

  const ar: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result: number = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
