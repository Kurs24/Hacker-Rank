function hasAlternatingBits(n: number): boolean {
  const bits: String = n.toString(2);
  var returnResult = true;

  for (var i = 0; i < bits.length - 1; i++) {
    if (bits[i] == bits[i + 1]) {
      returnResult = false;
      break;
    }
  }
  return returnResult;
}
