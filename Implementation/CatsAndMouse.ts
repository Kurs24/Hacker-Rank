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

function readLine() {
  return inputString[currentLine++];
}

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  const distance = [Math.abs(x - z), Math.abs(y - z)];

  if (distance[0] > distance[1]) {
    return "Cat B";
  } else if (distance[0] < distance[1]) {
    return "Cat A";
  } else {
    return "Mouse C";
  }
}

function main() {
  const ws: WriteStream = createWriteStream("OUTPUT_PATH");

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const xyz = readLine().split(" ");

    const x = parseInt(xyz[0], 10);

    const y = parseInt(xyz[1], 10);

    const z = parseInt(xyz[2], 10);

    let result = catAndMouse(x, y, z);

    ws.write(result + "\n");
  }

  ws.end();
}
