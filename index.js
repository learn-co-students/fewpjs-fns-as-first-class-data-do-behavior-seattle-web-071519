/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let parsetime = Date.parse('01/01/2001 '+time)
  const noontime = Date.parse('01/01/2001 12:00:00')
  const eveningtime = Date.parse('01/01/2001 17:00:00')
  let message = ''
  if (parsetime < noontime) {
    message = ('Good Morning')
  } else if (parsetime > eveningtime){
    message = ('Good Evening')
  } else {
    message = ('Good Afternoon')
  }

  return message
}

/* Write your implementation of displayMessage() */

function displayMessage(message){
  // let body = document.body;
  let greeting = document.getElementById('greeting')//.createElement('p')
  // body.appendChild(greeting)
  // greeting.id = "greeting";
  greeting.innerText = message
}
