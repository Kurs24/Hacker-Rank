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
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let max = 0;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let price = keyboards[i] + drives[j];

      if (price <= b && price > max) {
        max = price;
      }
    }
  }

  max == 0 ? (max = -1) : (max = max);

  return max;
}

function main() {
  const ws: WriteStream = createWriteStream("OUTPUT_PATH");

  const bnm = readLine().split(" ");

  const b = parseInt(bnm[0], 10);

  const n = parseInt(bnm[1], 10);

  const m = parseInt(bnm[2], 10);

  const keyboards = readLine()
    .split(" ")
    .map((keyboardsTemp) => parseInt(keyboardsTemp, 10));

  const drives = readLine()
    .split(" ")
    .map((drivesTemp) => parseInt(drivesTemp, 10));

  /*
   * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
   */

  let moneySpent = getMoneySpent(keyboards, drives, b);

  ws.write(moneySpent + "\n");

  ws.end();
}
