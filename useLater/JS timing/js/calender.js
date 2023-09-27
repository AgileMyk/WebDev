let calender_table = document.getElementById("calender_table");
let calender_head = document.getElementById();
let calender_weekdays = document.getElementById();
let calender_dates;

let calendar_today;


let thisDay = new Date("September 10, 2023");

document.getElementById("calender").innerHTML = "createCalender(thisDay)";

function createCalender(calDate) {
    let calendarHTML = "<table id='calender_table'>";
    calendarHTML += calCaption(calDate);
    calendarHTML += "</table>";
}

/* Function to write the calender caption*/
function calCaption(calDate) {
    let monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let thisMonth = thisDay.getMonth();
    let thisYear = thisDay.getFullYear();
    return "<caption>" + monthName[thisMonth] + " " + thisYear + "<caption>";
}
 