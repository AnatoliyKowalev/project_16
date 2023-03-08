// ----------Example 5--------------
let price = 500;
let tax = 49;
let result = price - tax;

// --
// --

const BUTTON_BUY = document.getElementById("buy-btn");

// Show example with .price value here
const INPUT_PRICE = document.getElementsByName("price")[0].value;

BUTTON_BUY.addEventListener("click", () => {
  console.log(INPUT_PRICE);
});
