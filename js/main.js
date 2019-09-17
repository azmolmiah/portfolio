// document.getElementById("myForm").addEventListener("submit", validate);

// function validate(e) {
//   // Get value from form
//   const name = document.forms["myForm"]["name"].value;
//   const email = document.forms["myForm"]["email"].value;
//   const message = document.forms["myForm"]["message"].value;

//   if (name == "" && email == "" && message == "") {
//     alert("Please fill in all fields");
//     e.preventDefault();
//   }
//   // return true;
// }

// Open and Close Side Menu
document.getElementById('openClick').addEventListener('click', openSideMenu);
let sideMenu = false;
function openSideMenu(e) {
  if (!sideMenu) {
    sideMenu = true;
    document.getElementById('side-menu').style.width = '15rem';
    document.getElementById('side-menu').style.position = 'fixed';
    document.getElementById('main').style.marginLeft = '15rem';
    document.querySelector('.menuBtn').classList.add('closeBtn');
    e.preventDefault();
  } else {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.querySelector('.menuBtn').classList.remove('closeBtn');
    sideMenu = false;
    e.preventDefault();
  }
}

// Add active class
let btns = document.getElementsByClassName('nav-item');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', e => {
    // console.log(e.target.parentElement.classList);
    if (e.target.innerHTML === btns[i].children[0].innerHTML) {
      e.target.parentElement.classList.add('active');
      // console.log(btns[i].children[0].parentElement.parentElement.children[i]);
    } else {
    }
  });
}
