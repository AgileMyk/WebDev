
/*
The following program checks if the given array is sorted in ascending 
order and prints "OK" if the answer is positive, otherwise prints "BROKEN".
*/

int[] numbers = { 1, 2, 3, 4, 5, 10, 6 }; // the order is broken

boolean broken = false; // suppose the array is well-ordered

/* iterating over the array */
for (int i = 1; i < numbers.length; i++) {
    
    if (numbers[i] < numbers[i - 1]) { // if the order is broken
        broken = true; // write a result
        break;         // terminate the loop
    }
}

if (broken) {
    System.out.println("BROKEN");
} else {
    System.out.println("OK");
}