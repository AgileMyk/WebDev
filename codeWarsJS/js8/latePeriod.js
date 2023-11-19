/*
DESCRIPTION:
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
*/

function periodIsLate(last, today, cycleLength) {

    let timeElapsed;
    let lastDay = last.getDate();
    let thisDay = today.getDate();
    let lastMonth = last.getMonth();
    let thisMonth = today.getMonth();
    
    if (lastMonth == 0 && thisMonth == 0) {
        timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 0 && thisMonth == 1) {
      timeElapsed = thisDay + (31 - lastDay);
    } else if (lastMonth == 1 && thisMonth == 1) {
      timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 1 && thisMonth == 2) {
      timeElapsed = thisDay + (28 - lastDay);
    } else if (lastMonth == 2 && thisMonth == 2) {
      timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 2 && thisMonth == 3) {
      timeElapsed = thisDay + (31 - lastDay);
    } else if (lastMonth == 3 && thisMonth == 3) {
      timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 3 && thisMonth == 4) {
      timeElapsed = thisDay + (30 - lastDay);
    } else if (lastMonth == 4 && thisMonth == 4) {
      timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 4 && thisMonth == 5) {
      timeElapsed = thisDay + (31 - lastDay);
    } else if (lastMonth == 5 && thisMonth == 5) {
      timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 5 && thisMonth == 6) {
      timeElapsed = thisDay + (30 - lastDay);
    } else if (lastMonth == 6 && thisMonth == 6) {
      timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 6 && thisMonth == 7) {
      timeElapsed = thisDay + (31 - lastDay);
    } else if (lastMonth == 7 && thisMonth == 7) {
      timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 7 && thisMonth == 8) {
      timeElapsed = thisDay + (31 - lastDay);
    } else if (lastMonth == 8 && thisMonth == 8) {
      timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 8 && thisMonth == 9) {
      timeElapsed = thisDay + (30 - lastDay);
    } else if (lastMonth == 9 && thisMonth == 9) {
      timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 9 && thisMonth == 10) {
      timeElapsed = thisDay + (31 - lastDay);
    } else if (lastMonth == 10 && thisMonth == 10) {
      timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 10 && thisMonth == 11) {
      timeElapsed = thisDay + (30 - lastDay);
    } else if (lastMonth == 11 && thisMonth == 11) {
      timeElapsed = thisDay - lastDay;
    } else if (lastMonth == 11 && thisMonth == 0) {
      timeElapsed = thisDay + (31 - lastDay);
    }
    
    if (timeElapsed > cycleLength) {
      return true;
    } 
    return false;
  }
  

