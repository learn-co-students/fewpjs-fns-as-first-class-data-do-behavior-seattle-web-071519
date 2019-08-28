/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeStr){
  let time = parseInt(timeStr,10)
if (time <= 12){
  return "Good Morning"
} else if (time > 12 && time < 17){
  return "Good Afternoon"
} else {
  return "Good Evening"
}}

function displayMessage(message){
  let addText = document.getElementById('greeting')

  addText.innerHTML = `${message}`

}