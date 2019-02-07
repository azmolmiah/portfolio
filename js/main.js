document.getElementById("myForm").addEventListener("submit", validate);

function validate(e) {
  // Get value from form
  const name = document.forms["myForm"]["name"].value;
  const email = document.forms["myForm"]["email"].value;
  const message = document.forms["myForm"]["message"].value;

  var regex = name.exec(/^$|\d/);

  if (name == regex && email == "" && message == "") {
    alert("Please fill in all fields");
    e.preventDefault();
  }
  // return true;
}

// Open and Close Side Menu
document.getElementById("openClick").addEventListener("click", openSideMenu);
let sideMenu = false;
function openSideMenu(e) {
  if (sideMenu == false) {
    sideMenu = true;
    document.getElementById("side-menu").style.width = "15rem";
    document.getElementById("main").style.marginLeft = "15rem";
    e.preventDefault();
  } else {
    document.getElementById("side-menu").style.width = "0";
  }
}
