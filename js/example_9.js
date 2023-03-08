// ----------Example 9--------------
// Promt example, how to save value

let yourName = prompt("What's you name?");

let nameElement = document.getElementById("example-9-name");

nameElement.innerText = `Your name - ${yourName}`;
