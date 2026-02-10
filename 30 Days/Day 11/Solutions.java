import java.io.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.toList;

public class Solutions {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        List<List<Integer>> arr = new ArrayList<>();
        int maxValue = -999;

        IntStream.range(0, 6).forEach(i -> {
            try {
                arr.add(
                        Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                                .map(Integer::parseInt)
                                .collect(toList()));
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        for (int x = 0; x < 4; x++) {
            for (int y = 0; y < 4; y++) {
                int currentTotal = arr.get(x).get(y) +
                        arr.get(x).get(y + 1) +
                        arr.get(x).get(y + 2) +
                        arr.get(x + 1).get(y + 1) +
                        arr.get(x + 2).get(y) +
                        arr.get(x + 2).get(y + 1) +
                        arr.get(x + 2).get(y + 2);
                maxValue = currentTotal > maxValue ? currentTotal : maxValue;
            }
        }
        System.out.println(maxValue);

        bufferedReader.close();
    }
}