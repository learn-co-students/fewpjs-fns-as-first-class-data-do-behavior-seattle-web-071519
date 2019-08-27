/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

handleClick(e)

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(timeString){
  const hour = timeString.split(':')
  if (hour[0] <12){
    return "Good Morning"
  }
    else if  (hour[0] >=12 && hour[0] <17) {
    return "Good Afternoon"
    }

    else {
    return "Good Evening"
    }
}


function displayMessage(greetStr){
  document.getElementById('greeting').innerText= greetStr
}

/* Write your implementation of displayMessage() */
