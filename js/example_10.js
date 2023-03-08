const form = document.getElementById("login-form");

const email = document.getElementsByName("email")[0];
const password = document.getElementsByName("password")[0];

form.onsubmit = (e) => {
  e.preventDefault();
  console.log(email.value, password.value);
};
