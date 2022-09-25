// Variables for today's date and current time
var dateToday = $("#currentDay")
var timeNow = moment().hour();
  console.log(timeNow)

// The current day is displayed at the top of the calendar
var today = moment().format("dddd, MMMM Do");
console.log(today);
dateToday.text(today);

// The save button for the timeblock saves the text for that event in local storage; refreshing the page allows the saved events to persist
$(document).ready(function(){

  var taskAt9am = localStorage.getItem("9amBlock");
  console.log(taskAt9am);
    $("#9").val(taskAt9am);
      $("#9am").on("click", function(){
        var task9am = $("#9").val();
        localStorage.setItem("9amBlock", task9am);
      })

  var taskAt10am = localStorage.getItem("10amBlock");
    $("#10").val(taskAt10am);
      $("#10am").on("click", function(){
        var task10am = $("#10").val();
        localStorage.setItem("10amBlock", task10am);
      })
    
  var taskAt11am = localStorage.getItem("11amBlock");
    $("#11").val(taskAt11am);
      $("#11am").on("click", function(){
        var task11am = $("#11").val();
        localStorage.setItem("11amBlock", task11am);
      })

  var taskAt12pm = localStorage.getItem("12pmBlock");
    $("#12").val(taskAt12pm);
      $("#12pm").on("click", function(){
        var task12pm = $("#12").val();
        localStorage.setItem("12pmBlock", task12pm);
      })

  var taskAt1pm = localStorage.getItem("1pmBlock");
    $("#13").val(taskAt1pm);
      $("#1pm").on("click", function(){
        var task1pm = $("#13").val();
        localStorage.setItem("1pmBlock", task1pm);
      })

  var taskAt2pm = localStorage.getItem("2pmBlock");
    $("#14").val(taskAt2pm);
      $("#2pm").on("click", function(){
        var task2pm = $("#14").val();
        localStorage.setItem("2pmBlock", task2pm);
      })

  var taskAt3pm = localStorage.getItem("3pmBlock");
    $("#15").val(taskAt3pm);
      $("#3pm").on("click", function(){
        var task3pm = $("#15").val();
        localStorage.setItem("3pmBlock", task3pm);
      })

  var taskAt4pm = localStorage.getItem("4pmBlock");
    $("#16").val(taskAt4pm);
      $("#4pm").on("click", function(){
        var task4pm = $("#16").val();
        localStorage.setItem("4pmBlock", task4pm);
      })

  var taskAt5pm = localStorage.getItem("5pmBlock");
    $("#17").val(taskAt5pm);
      $("#5pm").on("click", function(){
        var task5pm = $("#17").val();
        localStorage.setItem("5pmBlock", task5pm);
      })
   
})

// Each timeblock is color coded to indicate whether it is in the past, present, or future
$(".col-10").each(function(){
  var hourBlock = $(this).attr("id");
  console.log(hourBlock);
  if(hourBlock < timeNow){
    // past = gray
    $(this).addClass("past");
    // future = green
  } else if (hourBlock > timeNow){
    $(this).addClass("future");
    // present = red
  } else {
    $(this).addClass("present");
  }
})







