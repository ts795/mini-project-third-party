var currentTimeAndDateEl = $("#current-date-and-time");

var timerInterval = setInterval(function() {
    var timeAndDate = moment();
    currentTimeAndDateEl.text(timeAndDate.format("MMM D, YYYY [at] h:mm:ss a") );
  }, 1000);