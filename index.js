/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let hour = string.split(":")[0]
  if (hour <= 12 )
    return "Good Morning";
  else if (12 < hour  && hour <= 17)
    return "Good Afternoon";
  else if (17 < hour)
    return "Good Evening";
}


/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.querySelector("#greeting").innerText = string
}