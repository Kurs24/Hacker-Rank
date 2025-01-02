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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year: number): string {
  // Write your code here
  let date: number[] = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let total: number = 0;
  let month = 0;

  if (year <= 1917) {
    year % 4 == 0 ? (date[1] += 29) : (date[1] += 28);
  } else if (year == 1918) {
    year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
      ? (date[1] += 29 - 13)
      : (date[1] += 28 - 13);
  } else {
    year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ? (date[1] += 29) : (date[1] += 28);
  }

  for (let i = 0; i < date.length; i++) {
    total += date[i];

    if (total > 256) {
      month = i + 1;
      break;
    }
  }

  let mothFormatted = String(month);
  let day = String(date[month] - (total - 255));
  if (Number(day) < 10) day = "0" + day;
  if (month < 10) mothFormatted = "0" + month;

  return `${day}.${mothFormatted}.${year}`;
}

function main() {
  // const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);
  const ws: WriteStream = createWriteStream("OUTPUT_PATH");

  const year: number = parseInt(readLine().trim(), 10);

  const result: string = dayOfProgrammer(year);

  ws.write(result + "\n");

  ws.end();
}
