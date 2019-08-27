/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let hour = parseInt((string[0])+(string[1]))
  if ( hour < 12) {
    return "Good Morning"
} else if ( hour > 17 ) { 
    return "Good Evening"
} else {
    return "Good Afternoon"
}
}

function displayMessage(string){
  document.getElementById("greeting").innerText = string
}