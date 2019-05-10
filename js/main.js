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
document.getElementById("openClick").addEventListener("click", openSideMenu);
let sideMenu = false;
function openSideMenu(e) {
  if (!sideMenu) {
    sideMenu = true;
    document.getElementById("side-menu").style.width = "15rem";
    document.getElementById("main").style.marginLeft = "15rem";
    document.querySelector(".menuBtn").classList.add("closeBtn");
    e.preventDefault();
  } else {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.querySelector(".menuBtn").classList.remove("closeBtn");
  }
}

//Carousel;
const outputSkill = document.querySelector(".output");
const outputText = document.querySelector(".outputText");
let i = 0;
function changeLogo() {
  let skills = [
    "adobe",
    "html5",
    "css3",
    "sass",
    "js",
    "database",
    "express",
    "react",
    "node-js"
  ];

  let texts = [
    `I have experince in Adobe Illustrator and Photoshop for over 10 years. I have been studying it since secondary school. I have made website designs, posters wedding cards and menus etc.
  `,
    `I can recreate most website designs using HTML 5 and CSS3. I have been using mostly Bootstrap and a bit of Foundation for responsive, mobile-ready and cross-browser usability.`,
    `I use this to get more out of CSS for better styling performance. One of the great benefits of using a CSS pre-processor. Has a bit more dynamic programming capabilities. Easy, powerful, and useful.`,
    `I use this to get more out of SASS for better styling performance. One of the great benefits of using a CSS pre-processor. Has a bit more dynamic programming capabilities. Easy, powerful, and useful.`,
    `I use this to get more out of JAVASCRIPT for better styling performance. One of the great benefits of using a CSS pre-processor. Has a bit more dynamic programming capabilities. Easy, powerful, and useful.`,
    `I use this to get more out of MONGODB for better styling performance. One of the great benefits of using a CSS pre-processor. Has a bit more dynamic programming capabilities. Easy, powerful, and useful.`,
    `I use this to get more out of EXPRESS.JS for better styling performance. One of the great benefits of using a CSS pre-processor. Has a bit more dynamic programming capabilities. Easy, powerful, and useful.`,
    `I use this to get more out of REACT.JS for better styling performance. One of the great benefits of using a CSS pre-processor. Has a bit more dynamic programming capabilities. Easy, powerful, and useful.`,
    `I use this to get more out of NODE.JS for better styling performance. One of the great benefits of using a CSS pre-processor. Has a bit more dynamic programming capabilities. Easy, powerful, and useful.`
  ];

  if (i == skills.length - 1) {
    i = 0;
  } else {
    i++;
  }
  let output;
  if (i == 5) {
    output = `
    <i class="fas fa-${skills[i]} fa-5x"></i>
  `;
  } else if (i == 6) {
    output = `
    <span style="font-size:2rem;font-weight:100; padding:0 !important;">Express.js</span>
  `;
  } else {
    output = `
    <i class="fab fa-${skills[i]} fa-5x"></i>
  `;
  }

  outputSkill.innerHTML = output;

  let outputTwo = `<p>${texts[i]}</p>`;
  outputText.innerHTML = outputTwo;
}

setInterval("changeLogo()", 3000);

window.onload = changeLogo();
