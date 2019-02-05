let message;
let messageClass;

function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let message = document.forms["myForm"]["message"].value;

  if (name == "" || email == "" || message == "") {
    document.getElementById("name").innerText = "Name must be filled out";
    document.getElementById("email").innerText = "Email must be filled out";
    document.getElementById("message").innerText = "Message must be filled out";

    return false;
  }
}
