var dateToday = $("#currentDay")
var timeNow = moment().hour();
console.log(timeNow)

// The current day is displayed at the top of the calendar
var today = moment().format("dddd, MMMM Do");
console.log(today);
dateToday.text(today);

// The save button for the timeblock saves the text for that event in local storage; refreshing the page allows the saved events to persist
$(document).ready(function(){

 var todo9am =localStorage.getItem("9am");
 console.log(todo9am)
    
 $("#9").val(todo9am)

    $("#9am").on("click", function(e){
        e.preventDefault()
        var ToDo9am = $("#9").val();
        localStorage.setItem("9am", ToDo9am)
    })
    
   
})





// Timeblocks for standard business hours are displayed
    // Each hour block: generate a moment object for today's date at the specified time 
    


// Each timeblock is color coded to indicate whether it is in the past, present, or future
    // past = gray
    // present hour = red
    // future = green


// Clicking into a timeblock allows you to enter an event



