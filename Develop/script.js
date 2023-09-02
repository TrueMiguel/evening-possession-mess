// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// generate the current hour
var hour = dayjs().format('H');
var hourInt = parseInt(hour)

var allDiv = document.querySelector('#parent')
// var hourDiv = allDiv.includes('hour')
// console.log(allDiv.children[8].id)
// console.log(allDiv.children[0].children[0].textContent.includes('9'))
// console.log(hour)

// this checks with the current hour and then text in the element
// if (hour = allDiv.children[8].id) {
//   console.log("true")
// } else {
//   console.log('false')
// }

// for loop to iterate throught the children of the parent div and compare the id to the current hour and then make changes by that hour
for (var i = 0; i < 9; i++) {
  if (hour > parseInt(allDiv.children[i].id)) {
    console.log(i, "past");
    allDiv.children[i].classList.remove('past', 'present', 'future')
    allDiv.children[i].classList.add('past')
    
  } else if (hour < parseInt(allDiv.children[i].id)) {
    console.log(i, "future")
    allDiv.children[i].classList.remove('past', 'present', 'future')
    allDiv.children[i].classList.add('future')
  } else {
    console.log(i,"present")
    allDiv.children[i].classList.remove('past', 'present', 'future')
    allDiv.children[i].classList.add('present')
  }
}