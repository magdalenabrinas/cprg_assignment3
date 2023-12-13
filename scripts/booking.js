/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costPerDay = 35;
var numberDaysSelected = 0;
var duration = "full";



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
var daysOfTheWeek = document.querySelectorAll(".day-selector .blue-hover");

function clickDays(item) {
  // we will apply the "clicked" class to that element
  // and update any other relevant variable
  if (!item.classList.contains("clicked")) {
    item.classList.add("clicked");
    numberDaysSelected++;

    // Then, we can recalculate the total cost.
    recalculate();
  }
}
daysOfTheWeek.forEach(function(item) {
  item.addEventListener("click", function () {
      clickDays(item);
  });
})

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clearTheDaysButton = document.getElementById("clear-button")

function clearDays() {
  daysOfTheWeek.forEach(function(item) {
    item.classList.remove("clicked");
  });
  costPerDay = 20;
  numberDaysSelected = 0;
  duration = "full";
  clickFull();

  recalculate();
}

clearTheDaysButton.addEventListener("click", clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var halfDayButton = document.getElementById("half");

function clickHalfDay() {
  // set the daily rate to $20
  // add the "clicked" class to the "half" element
  // remove it from the "full" element
  // recalculate the total cost.
  costPerDay = 20;
  halfDayButton.classList.add("clicked");
  fullButton.classList.remove("clicked");
  recalculate();
}

halfDayButton.addEventListener("click", clickHalfDay);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var fullButton = document.getElementById("full");

function clickFull() {
  // the daily rate is set back to $35
  // the clicked class is added to "full"
  // and removed from "half"
  // and the total cost is recalculated.
  costPerDay = 35;
  fullButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  recalculate();
}

fullButton.addEventListener("click", clickFull);


// /********* calculate *********/
// // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
  const costLabel = document.getElementById("calculated-cost");

  const weeklyCost = numberDaysSelected * costPerDay;

  costLabel.innerHTML = weeklyCost;
}

