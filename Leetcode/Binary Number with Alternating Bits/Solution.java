class Solution {
  public boolean hasAlternatingBits(int n) {
    String bitCode = Integer.toString(n, 2);
    boolean result = true;
    for (int i = 0; i < bitCode.length() - 1; i++) {
      if (bitCode.charAt(i) == bitCode.charAt(i + 1)) {
        result = false;
        break;
      }
    }
    return result;
  }
}