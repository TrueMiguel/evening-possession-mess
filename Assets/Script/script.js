// generate the current hour
var hour = dayjs().format('H');
var hourInt = parseInt(hour)

// variable to get the current day from dayjs
var today = dayjs().format('dddd, MMMM DD')
var todayEl = document.querySelector('#currentDay')
// adding the current date to the currentDay text area
todayEl.textContent = today

//  selects the parent div to then allow me to get the child divs from it
var allDiv = document.querySelector('#parent')

// for loop to iterate throught the children of the parent div and compare the id to the current hour and then make changes by that hour
for (var i = 0; i < 9; i++) {
    if (hour > parseInt(allDiv.children[i].id)) {
      
      // getting the id of the hour
      var hourId = allDiv.children[i].id
      // selecting the text area
      var textArea = allDiv.children[i].querySelector('textArea')
      // updating the textArea with the stored text
      textArea.textContent = localStorage.getItem(hourId)
      
      allDiv.children[i].classList.remove('past', 'present', 'future')
      allDiv.children[i].classList.add('past')

    
  } else if (hour < parseInt(allDiv.children[i].id)) {

      var hourId = allDiv.children[i].id
      var textArea = allDiv.children[i].querySelector('textArea')
      textArea.textContent = localStorage.getItem(hourId)

      allDiv.children[i].classList.remove('past', 'present', 'future')
      allDiv.children[i].classList.add('future')
    } else {

      var hourId = allDiv.children[i].id
      var textArea = allDiv.children[i].querySelector('textArea')
      textArea.textContent = localStorage.getItem(hourId)
      
      allDiv.children[i].classList.remove('past', 'present', 'future')
      allDiv.children[i].classList.add('present')
      }
    };
    
// add event listener to the save button that data-attribute
var saveButton = document.querySelectorAll('[data-attribute="saveButton"]')

// .forEach loop to go through every data-attribute="saveButton" and add the event listener to the save key
// and also save the textArea content to local storage. 
saveButton.forEach(function(saveButton) {
  saveButton.addEventListener('click', function (event) {
    event.preventDefault()
    var parentElement = saveButton.parentElement;
    var parentElId = parentElement.id
    var textArea = parentElement.querySelector('textarea');
    var textContent = textArea.value;
    console.log(textContent)
    console.log(parentElId)
    localStorage.setItem(parentElId, textContent)
  })  
})