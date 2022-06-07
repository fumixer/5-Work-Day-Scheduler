//Get the current date & disyplay
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);
console.log(today);


//Save button trigger saving input
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text)
    console.log(text);
  })

  console.log(localStorage.getItem('hour8'));
  $('#hour8 .description').val(localStorage.getItem('hour8'));
  $('#hour9 .description').val(localStorage.getItem('hour9'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour13'));
  $('#hour14 .description').val(localStorage.getItem('hour14'));
  $('#hour15 .description').val(localStorage.getItem('hour15'));
  $('#hour16 .description').val(localStorage.getItem('hour16'));
  $('#hour17 .description').val(localStorage.getItem('hour17'));
  $('#hour18 .description').val(localStorage.getItem('hour18'));

    //Change the color of time block
    //judging the time https://www.w3schools.com/jquery/jquery_css_classes.asp
    function timeCheck() {
      //Get the current time
      let timeCurrent = moment().hour(); //https://momentjs.com/docs/#/get-set/hour/
    console.log(timeCurrent)
      //Check each blocks
      $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        //backgound of the time blocks
        if (blockTime < timeCurrent) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        }
        else if (blockTime === timeCurrent) {
          $(this).removeClass("future");
          $(this).addClass("present");
          $(this).removeClass("past");
        }
        else {
          $(this).addClass("future");
          $(this).removeClass("present");
          $(this).removeClass("past");
          
        }
      })
    }
//Sace the input from the user to local strage


    timeCheck();
  });
 









