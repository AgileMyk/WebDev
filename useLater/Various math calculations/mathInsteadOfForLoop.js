/*
The sum of integers from a to b
Print the sum of all integers from a to b including both.

It is guaranteed that a < b in all test cases.
*/

//instead of looping through from A to B and incrementing to a total
//to calculate the value, you can use the below math formula:

answer = b*(b+1)/2 - a*(a-1)/2;
