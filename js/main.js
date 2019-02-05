let nameAlert = document.getElementById("name");
let emailAlert = document.getElementById("email");
let messageAlert = document.getElementById("message");
let messageClass = "alert alert-danger";

function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let message = document.forms["myForm"]["message"].value;

  if (name == "" || email == "" || message == "") {
    nameAlert.innerText = "Name must be filled out";
    emailAlert.innerText = "Email must be filled out";
    messageAlert.innerText = "Message must be filled out";

    nameAlert.classList.add(`${messageClass}`);
    emailAlert.classList.add(`${messageClass}`);
    messageAlert.classList.add(`${messageClass}`);

    return false;
  }
}
