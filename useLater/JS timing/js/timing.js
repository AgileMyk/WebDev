//create a specific Date
let myBday = new Date(1984, 2, 7, 3, 15, 34); //year, month, day, hour, minute, second
//verbal creat specific Date
let myBday2 = new Date("February 2, 1984");
//make time/date expression location/time specific
let localBday = myBday.toLocaleString();
//get functions
myBday.getDay();
myBday.getMonth();
myBday.getFullYear();
myBday.getSeconds();
myBday.getMinutes();
myBday.getHours();

//set functions
let someRandomDate = new Date(); //empty Date sets current date/time
//set date/time details
someRandomDate.setFullYear("2030");
someRandomDate.setMonth(6);
someRandomDate.setDate("25");
someRandomDate.setHours(1600);
someRandomDate.setMinutes("16");
someRandomDate.setSeconds(16);

//get new year time
let nextYear = new Date().getFullYear() + 1;
//get time remaining until new year (in milliseconds)
let timeRemaining = new Date() - nextYear;

//get time remaining in Days
                                //newYear - present Date / millisecond remover
let remainingInDays = (nextYear - new Date())/(1000*60*60*60*24);

//get present time in milliseconds
let someVarName = Date.now();
//convert present time to human time
let divivedByTimeUnits = someVarName/(1000*60*60*24);

//set time 1 year from present time
let someVarForExactlyOneYearFromNow;

//get days left




function createCalender() {

}