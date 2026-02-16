import java.util.Arrays;

class Solution {
  public int minimumCost(int[] numbers) {
    int num = numbers[0];
    int[] numbersC = new int[numbers.length - 1];
    int j = 0;
    for (int i = 1; i < numbers.length; i++) {
      numbersC[j] = numbers[i];
      j++;
    }

    Arrays.sort(numbersC);

    return num + numbersC[0] + numbersC[1];
  }
}