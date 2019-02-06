document.getElementById("myForm").addEventListener("submit", validate);

function validate(e) {
  // Get value from form
  const name = document.forms["myForm"]["name"].value;
  const email = document.forms["myForm"]["email"].value;
  const message = document.forms["myForm"]["message"].value;

  if (name == "" && email == "" && message == "") {
    alert("Please fill in all input");
    e.preventDefault();
  }
  // return true;
}
