var currentTimeAndDateEl = $("#current-date-and-time");
var addProjectButtonEl = $('#add-project-button');
var projectEntryModalEl = $('#project-entry-modal');

projectEntryModalEl.addEventListener('shown.bs.modal', function () {
    addProjectButtonEl.focus()
})

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