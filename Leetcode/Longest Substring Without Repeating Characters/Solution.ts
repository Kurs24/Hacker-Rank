function lengthOfLongestSubstring(s: string): number {
  const arr: string[] = s.split("");
  var longest = arr.length == 1 ? 1 : 0;

  for (var i = 0; i < arr.length - 1; i++) {
    var checkSet = new Set([arr[i]]);
    for (var j = i + 1; j < arr.length; j++) {
      if (checkSet.has(arr[j])) {
        break;
      }
      checkSet.add(arr[j]);
    }
    longest = longest < checkSet.size ? checkSet.size : longest;
  }
  return longest;
}
