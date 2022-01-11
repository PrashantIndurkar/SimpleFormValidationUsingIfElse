const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Functions
// show Errors
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// show Success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// check email validEmail
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // USERNAME
  if (username.value === "") {
    showError(username, "Username is required");
    // console.log(username.value);
  } else {
    showSuccess(username);
  }

  //   EMAIL
  if (email.value === "") {
    showError(email, "email is required");
    // console.log(username.value);
  } else if (!validateEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  //   PASSWORD
  if (password.value === "") {
    showError(password, "password is required");
    // console.log(username.value);
  } else {
    showSuccess(password);
  }
  //   PASSWORD2
  if (password2.value === "") {
    showError(password2, "password2 is required");
    // console.log(username.value);
  } else {
    showSuccess(password2);
  }
});
