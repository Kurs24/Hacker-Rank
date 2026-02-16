import java.util.*;

class Difference {
  private int[] elements;
  public int maximumDifference;

  // Add your code here
  Difference(int[] elements) {
    this.elements = elements;
  };

  void computeDifference() {
    int min = 101;
    int max = 0;

    for (int element : elements) {
      if (min > element) {
        min = element;
      }

      if (max < element) {
        max = element;
      }
    }
    maximumDifference = Math.abs(max - min);
  }
} // End of Difference class

public class Solution {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int[] a = new int[n];
    for (int i = 0; i < n; i++) {
      a[i] = sc.nextInt();
    }
    sc.close();

    Difference difference = new Difference(a);

    difference.computeDifference();

    System.out.print(difference.maximumDifference);
  }
}