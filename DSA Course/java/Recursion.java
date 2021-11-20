public class Recursion {

    public static void countDown(int currentNum) {
        if (currentNum != 0) {
            System.out.println(currentNum);
            countDown(currentNum-1);
        } else {
            System.out.println("All done");
        }
    }

    public static int sumRange(int num, int limit) {
        if (num == limit) return num;
        return num + sumRange(num+1, limit);
    }

    public static int factorial(int currentNum) {
        if (currentNum == 1) return 1;
        return currentNum * factorial(currentNum-1);
    }

    public static String stringifyNumbers(int num) {
        String numStr = Integer.toString(num);
        if (numStr.length() == 1) return numStr.substring(0, 1);
        return numStr.substring(0, 1) + stringifyNumbers(Integer.parseInt(numStr.substring(1, numStr.length())));
    }
    
    public static void main(String[] args) {
        System.out.println("\n-- Count down function --");
        countDown(5);
        System.out.println("\n-- Sum of 1-10 --");
        System.out.println(sumRange(1, 10));
        System.out.println("\n-- Factorial of 10 --");
        System.out.println(factorial(10));
        System.out.println("\n-- Stringify 38409523 --");
        System.out.println(stringifyNumbers(38409523));
        System.out.println(stringifyNumbers(38409523).getClass());
    }
}
