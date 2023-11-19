/*
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
Kata.sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
Kata.sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
Kata.sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
Kata.sumMul(4, -7)  // throws IllegalArgumentException
*/

import java.util.ArrayList;

public class Kata {
    public static long sumMul(int n, int m) {
      int total = 0;
      int result = n;
      while (result < m) {
        System.out.println("total: " + total);
        total += result;
        System.out.println("result: " + result);
        result +=n;
      }
      return total;
      }
}