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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n: number): void {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    // let text: string[] = [];
    for (let j = 0; j < n; j++) {
      // j >= n - i ? text.push("#") : text.push(" ");
      j >= n - i ? process.stdout.write("#") : process.stdout.write(" ");
    }
    // console.log(text.join(""));
    // text = [];
    process.stdout.write("\n");
  }
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);

  staircase(n);
}
