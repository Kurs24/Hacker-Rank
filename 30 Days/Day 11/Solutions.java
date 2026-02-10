import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

public class Solutions {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        List<List<Integer>> arr = new ArrayList<>();

        IntStream.range(0, 6).forEach(i -> {
            try {
                arr.add(
                        Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                                .map(Integer::parseInt)
                                .collect(toList()));

                int maxValue = -999;

                for (int x = 0; i < 4; x++) {
                    for (int y = 0; y < 4; y++) {
                        int currentTotal = arr.get(x).get(y) +
                                arr.get(x).get(y + 1) +
                                arr.get(x).get(y + 2) +
                                arr.get(x + 1).get(y + 1) +
                                arr.get(x + 1).get(y) +
                                arr.get(x + 1).get(y + 1) +
                                arr.get(x + 1).get(y + 1);

                        maxValue =  currentTotal > maxValue ? currentTotal : maxValue;
                    }
                }
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        bufferedReader.close();
    }
}
