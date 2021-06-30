var currentTimeAndDateEl = $("#current-date-and-time");

var timerInterval = setInterval(function() {
    var timeAndDate = moment();
    currentTimeAndDateEl.text(timeAndDate.format("MMM D, YYYY [at] h:mm:ss a") );
  }, 1000);

// Datepicker widget
$(function () {
    $('#due-date').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });  