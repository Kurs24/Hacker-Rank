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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  // Write your code here
  const sets = new Set(ranked);
  let result: number[] = [];
  const uniqueArray = Array.from(sets);
  let lastIndex = uniqueArray.length - 1;

  for (let i = 0; i < player.length; i++) {
    for (let j = lastIndex; j >= 0; j--) {
      if (j == 0 && uniqueArray[j] < player[i]) {
        result.push(1);
        break;
      }
      if (uniqueArray[j] < player[i]) {
        continue;
      } else if (uniqueArray[j] == player[i]) {
        result.push(j + 1);
        lastIndex = j;
        break;
      } else {
        result.push(j + 2);
        lastIndex = j;
        break;
      }
    }
  }
  return result;
}

function main() {
  // const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);
  const ws: WriteStream = createWriteStream("OUTPUT_PATH");

  const rankedCount: number = parseInt(readLine().trim(), 10);

  const ranked: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((rankedTemp) => parseInt(rankedTemp, 10));

  const playerCount: number = parseInt(readLine().trim(), 10);

  const player: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((playerTemp) => parseInt(playerTemp, 10));

  const result: number[] = climbingLeaderboard(ranked, player);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
