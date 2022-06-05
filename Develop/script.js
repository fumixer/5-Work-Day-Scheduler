// $(".list-group").on("click", "p", function() {
//     console.log("<p> was clicked");
//   });

//Get the current date
  var today = moment().format('dddd, MMM Do YYYY');
  $("#currentDay").html(today);
  console.log(today);

//Display the current time



//Save button trigger saving input
$(".saveBtn").on("click", function() {

  var text = $(this).siblings(".contents").val;
  var time = $(this).parent().attr("id");

  localStorage.setItem(text, time)
    console.log(text, time);
  });

//save the input to local stolage