"use strict";

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
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here
  let total: number = 0 - bill[k];
  bill.forEach((val) => (total += val));

  if (total / 2 == b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - total / 2);
  }
}

function main() {
  const firstMultipleInput: string[] = readLine().replace(/\s+$/g, "").split(" ");

  const n: number = parseInt(firstMultipleInput[0], 10);

  const k: number = parseInt(firstMultipleInput[1], 10);

  const bill: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((billTemp) => parseInt(billTemp, 10));

  const b: number = parseInt(readLine().trim(), 10);

  bonAppetit(bill, k, b);
}
