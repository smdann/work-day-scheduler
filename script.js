var dateToday = $("#currentDay")




// The current day is displayed at the top of the calendar
var today = moment().format("dddd, MMMM Do");
console.log(today);
dateToday.text(today);


// Timeblocks for standard business hours are displayed
    // Each hour block: generate a moment object for today's date at the specified time (moment add 1 hour)


// Each timeblock is color coded to indicate whether it is in the past, present, or future
    // past = gray
    // present hour = red
    // future = green


// Clicking into a timeblock allows you to enter an event



// The save button for the timeblock saves the text for that event in local storage



// Refreshing the page allows the saved events to persist