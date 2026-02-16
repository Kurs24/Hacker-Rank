function minimumCost(numbers: number[]): number {
  var num = numbers[0];
  var numNotOne = numbers.slice(1);
  numNotOne.sort((a, b) => a - b);
  return num + numNotOne[0] + numNotOne[1];
}
