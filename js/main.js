let message;
let messageClass;

function validateForm(e) {
  // Get form data
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let message = document.forms["myForm"]["message"].value;

  if (name == "" || email == "" || message == "") {
    // Failed
    e.preventDefault();
    message = "Please fill in all fields";
    messageClass = "alert-danger";
    if (message != "") {
      document.getElementById("name").classList.add(`alert ${messageClass}`);
      document.getElementById("email").classList.add(`alert ${messageClass}`);
      document.getElementById("message").classList.add(`alert ${messageClass}`);
      document.getElementById("name").innerText = message;
      document.getElementById("email").innerText = message;
      document.getElementById("message").innerText = message;
    }
  } else {
    // Passed
  }
}
